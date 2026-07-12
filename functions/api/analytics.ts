type Env = {
  CLOUDFLARE_API_TOKEN?: string;
  CLOUDFLARE_ZONE_TAG?: string;
  ADMIN_EMAILS?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

const allowedRanges = new Set(["7d", "30d", "90d"]);

export async function onRequestGet(context: PagesContext): Promise<Response> {
  const email = context.request.headers.get("cf-access-authenticated-user-email")?.toLowerCase();
  const hasAccessToken = Boolean(context.request.headers.get("cf-access-jwt-assertion"));
  const allowedEmails = (context.env.ADMIN_EMAILS ?? "maria.95nc@gmail.com")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (!email || !hasAccessToken || !allowedEmails.includes(email)) {
    return json({ error: "Acceso no autorizado" }, 401);
  }

  if (!context.env.CLOUDFLARE_API_TOKEN || !context.env.CLOUDFLARE_ZONE_TAG) {
    return json({ error: "Analítica pendiente de conectar" }, 503);
  }

  const url = new URL(context.request.url);
  const requestedRange = url.searchParams.get("range") ?? "30d";
  const range = allowedRanges.has(requestedRange) ? requestedRange : "30d";
  const days = Number.parseInt(range, 10);
  const end = new Date();
  const start = new Date(end.getTime() - days * 86_400_000);

  const query = `query Dashboard($zoneTag: string!, $start: DateTime!, $end: DateTime!) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        totals: httpRequestsAdaptiveGroups(limit: 1, filter: { datetime_geq: $start, datetime_leq: $end }) {
          count
          sum { requests visits }
          uniq { uniques }
        }
        timeline: httpRequestsAdaptiveGroups(limit: 1000, orderBy: [date_ASC], filter: { datetime_geq: $start, datetime_leq: $end }) {
          dimensions { date }
          sum { requests visits }
          uniq { uniques }
        }
        countries: httpRequestsAdaptiveGroups(limit: 10, orderBy: [count_DESC], filter: { datetime_geq: $start, datetime_leq: $end }) {
          count
          dimensions { clientCountryName }
        }
        devices: httpRequestsAdaptiveGroups(limit: 10, orderBy: [count_DESC], filter: { datetime_geq: $start, datetime_leq: $end }) {
          count
          dimensions { clientDeviceType }
        }
        sources: httpRequestsAdaptiveGroups(limit: 10, orderBy: [count_DESC], filter: { datetime_geq: $start, datetime_leq: $end }) {
          count
          dimensions { clientRefererHost }
        }
      }
    }
  }`;

  try {
    const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          zoneTag: context.env.CLOUDFLARE_ZONE_TAG,
          start: start.toISOString(),
          end: end.toISOString(),
        },
      }),
    });

    if (!response.ok) {
      console.error(JSON.stringify({ event: "analytics_upstream_error", status: response.status }));
      return json({ error: "Cloudflare no ha podido entregar las métricas" }, 502);
    }

    const payload = (await response.json()) as {
      data?: { viewer?: { zones?: Array<Record<string, unknown>> } };
      errors?: unknown[];
    };
    if (payload.errors?.length || !payload.data?.viewer?.zones?.[0]) {
      console.error(
        JSON.stringify({ event: "analytics_graphql_error", errors: payload.errors ?? [] }),
      );
      return json({ error: "La consulta de analítica necesita revisión" }, 502);
    }

    return json(normalize(payload.data.viewer.zones[0], days));
  } catch (error) {
    console.error(
      JSON.stringify({
        event: "analytics_exception",
        message: error instanceof Error ? error.message : "unknown",
      }),
    );
    return json({ error: "No se han podido cargar las métricas" }, 500);
  }
}

function normalize(zone: Record<string, unknown>, days: number) {
  const totals = ((zone.totals as Array<Record<string, unknown>>) ?? [])[0] ?? {};
  const sum = (totals.sum as Record<string, number>) ?? {};
  const uniq = (totals.uniq as Record<string, number>) ?? {};
  const visitors = uniq.uniques ?? sum.visits ?? 0;
  const views = sum.requests ?? Number(totals.count ?? 0);

  return {
    mode: "live",
    generatedAt: new Date().toISOString(),
    summary: {
      visitors,
      views,
      whatsappClicks: 0,
      conversionRate: 0,
      averageSeconds: 0,
      bounceRate: 0,
    },
    comparison: { visitors: 0, views: 0, whatsappClicks: 0 },
    timeline: ((zone.timeline as Array<Record<string, unknown>>) ?? []).map((item) => ({
      label: String((item.dimensions as Record<string, string>)?.date ?? ""),
      visitors: Number(
        (item.uniq as Record<string, number>)?.uniques ??
          (item.sum as Record<string, number>)?.visits ??
          0,
      ),
      views: Number((item.sum as Record<string, number>)?.requests ?? 0),
    })),
    sources: toPercentages(
      (zone.sources as Array<Record<string, unknown>>) ?? [],
      "clientRefererHost",
      "Acceso directo",
    ),
    devices: toPercentages(
      (zone.devices as Array<Record<string, unknown>>) ?? [],
      "clientDeviceType",
      "Desconocido",
    ),
    countries: toPercentages(
      (zone.countries as Array<Record<string, unknown>>) ?? [],
      "clientCountryName",
      "Desconocido",
    ),
    actions: [],
    insight: `En los últimos ${days} días la página recibió ${visitors} visitantes y ${views} visualizaciones. Los clics de contacto se activarán en la siguiente fase de seguimiento de eventos.`,
  };
}

function toPercentages(items: Array<Record<string, unknown>>, key: string, fallback: string) {
  const total = items.reduce((sum, item) => sum + Number(item.count ?? 0), 0) || 1;
  return items.slice(0, 4).map((item) => ({
    label: String((item.dimensions as Record<string, string>)?.[key] || fallback),
    value: Math.round((Number(item.count ?? 0) / total) * 100),
  }));
}

function json(value: unknown, status = 200): Response {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

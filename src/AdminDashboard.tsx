import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ExternalLink,
  Eye,
  Globe2,
  Info,
  Laptop,
  LogOut,
  MessageCircle,
  MousePointerClick,
  RefreshCw,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type Range = "7d" | "30d" | "90d";

type AnalyticsData = {
  mode: "live" | "demo";
  generatedAt: string;
  summary: {
    visitors: number;
    views: number;
    whatsappClicks: number;
    conversionRate: number;
    averageSeconds: number;
    bounceRate: number;
  };
  comparison: {
    visitors: number;
    views: number;
    whatsappClicks: number;
  };
  timeline: Array<{ label: string; visitors: number; views: number }>;
  sources: Array<{ label: string; value: number }>;
  devices: Array<{ label: string; value: number }>;
  countries: Array<{ label: string; value: number }>;
  actions: Array<{ label: string; value: number }>;
  insight: string;
};

const demoByRange: Record<Range, AnalyticsData> = {
  "7d": makeDemo(7, 184, 263, 31),
  "30d": makeDemo(30, 728, 1104, 126),
  "90d": makeDemo(90, 2038, 3186, 354),
};

function makeDemo(days: number, visitors: number, views: number, whatsapp: number): AnalyticsData {
  const points = days === 7 ? 7 : days === 30 ? 10 : 12;
  const timeline = Array.from({ length: points }, (_, index) => {
    const wave = 0.72 + ((index * 7) % 9) / 18;
    return {
      label: days === 7 ? ["L", "M", "X", "J", "V", "S", "D"][index] : `${index + 1}`,
      visitors: Math.round((visitors / points) * wave),
      views: Math.round((views / points) * (wave + 0.08)),
    };
  });

  return {
    mode: "demo",
    generatedAt: new Date().toISOString(),
    summary: {
      visitors,
      views,
      whatsappClicks: whatsapp,
      conversionRate: Number(((whatsapp / visitors) * 100).toFixed(1)),
      averageSeconds: 96,
      bounceRate: 38,
    },
    comparison: { visitors: 18.4, views: 12.7, whatsappClicks: 23.1 },
    timeline,
    sources: [
      { label: "Google", value: 52 },
      { label: "Acceso directo", value: 24 },
      { label: "Instagram", value: 16 },
      { label: "Otros", value: 8 },
    ],
    devices: [
      { label: "Móvil", value: 78 },
      { label: "Ordenador", value: 19 },
      { label: "Tablet", value: 3 },
    ],
    countries: [
      { label: "España", value: 91 },
      { label: "Francia", value: 4 },
      { label: "Reino Unido", value: 3 },
      { label: "Otros", value: 2 },
    ],
    actions: [
      { label: "WhatsApp general", value: Math.round(whatsapp * 0.45) },
      { label: "Pack novia", value: Math.round(whatsapp * 0.24) },
      { label: "Maquillaje invitadas", value: Math.round(whatsapp * 0.19) },
      { label: "Galería completa", value: Math.round(whatsapp * 0.55) },
    ],
    insight:
      "La mayoría de las visitas llegan desde móvil y Google. Los viernes y domingos concentran más consultas, y el servicio con mayor intención es el pack de novia.",
  };
}

export default function AdminDashboard() {
  const [range, setRange] = useState<Range>("30d");
  const [data, setData] = useState<AnalyticsData>(demoByRange["30d"]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setNotice(null);
    try {
      const response = await fetch(`/api/analytics?range=${range}`, {
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = (await response.json()) as AnalyticsData;
      setData(result);
    } catch {
      setData(demoByRange[range]);
      setNotice(
        "Mostrando datos de demostración hasta terminar la conexión privada con Cloudflare.",
      );
    } finally {
      setLoading(false);
    }
  }, [range]);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  const periodLabel =
    range === "7d" ? "últimos 7 días" : range === "30d" ? "últimos 30 días" : "últimos 90 días";

  return (
    <div className="min-h-screen bg-[#f6f2ea] text-[#312a25]">
      <header className="border-b border-[#ded6ca] bg-[#fffdf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="truncate font-serif text-xl sm:text-2xl">Isabel Agüera Jiménez</p>
            <p className="text-xs text-[#766d64]">Panel de actividad de la web</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-[#ded6ca] bg-white px-4 text-sm hover:bg-[#f5efe6]"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Ver página</span>
            </a>
            <a
              href="/cdn-cgi/access/logout"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ded6ca] bg-white"
              aria-label="Cerrar sesión"
            >
              <LogOut className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a17650]">
              <Sparkles className="h-4 w-4" /> Resumen sencillo
            </div>
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl">Así está funcionando tu página</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#766d64]">
              Datos de los {periodLabel}. Las comparaciones se realizan con el periodo anterior
              equivalente.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-full border border-[#ded6ca] bg-white p-1">
              {(["7d", "30d", "90d"] as Range[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRange(item)}
                  className={`min-w-12 rounded-full px-3 py-2 text-xs font-semibold transition ${
                    range === item ? "bg-[#392d27] text-white" : "text-[#766d64] hover:bg-[#f5efe6]"
                  }`}
                >
                  {item.replace("d", " días")}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => void loadData()}
              disabled={loading}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ded6ca] bg-white disabled:opacity-50"
              aria-label="Actualizar datos"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {(data.mode === "demo" || notice) && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#d8b98f] bg-[#fff7e8] px-4 py-3 text-sm text-[#76552f]">
            <Info className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-left">
              <strong>Modo demostración.</strong>{" "}
              {notice ??
                "Estas cifras son de ejemplo y sirven para probar el panel antes de activar la conexión privada."}
            </p>
          </div>
        )}

        <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <MetricCard
            icon={Users}
            label="Personas"
            value={formatNumber(data.summary.visitors)}
            change={data.comparison.visitors}
            help="Visitantes distintos que han entrado."
          />
          <MetricCard
            icon={Eye}
            label="Páginas vistas"
            value={formatNumber(data.summary.views)}
            change={data.comparison.views}
            help="Número total de páginas cargadas."
          />
          <MetricCard
            icon={MessageCircle}
            label="Clics en WhatsApp"
            value={formatNumber(data.summary.whatsappClicks)}
            change={data.comparison.whatsappClicks}
            help="Personas que mostraron intención de contactar."
          />
          <MetricCard
            icon={TrendingUp}
            label="Conversión"
            value={`${data.summary.conversionRate}%`}
            help="Porcentaje de visitantes que pulsaron WhatsApp."
          />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <Panel
            title="Evolución de visitas"
            subtitle="Personas y páginas vistas a lo largo del periodo"
            icon={BarChart3}
          >
            <TimelineChart data={data.timeline} />
          </Panel>
          <Panel
            title="Lectura rápida"
            subtitle="Lo más importante, explicado sin tecnicismos"
            icon={Sparkles}
          >
            <div className="rounded-2xl bg-[#392d27] p-5 text-[#fffaf2]">
              <p className="text-left text-sm leading-relaxed">{data.insight}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <MiniStat
                icon={CalendarDays}
                label="Tiempo medio"
                value={formatDuration(data.summary.averageSeconds)}
              />
              <MiniStat
                icon={MousePointerClick}
                label="Salida rápida"
                value={`${data.summary.bounceRate}%`}
              />
            </div>
          </Panel>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <BreakdownPanel title="Cómo llegan" icon={Globe2} items={data.sources} />
          <BreakdownPanel title="Dispositivos" icon={Smartphone} items={data.devices} />
          <BreakdownPanel title="Países" icon={Globe2} items={data.countries} />
          <BreakdownPanel
            title="Acciones importantes"
            icon={MousePointerClick}
            items={data.actions}
            rawValues
          />
        </section>

        <p className="mt-8 text-center text-xs text-[#8d8379]">
          Actualizado{" "}
          {new Date(data.generatedAt).toLocaleString("es-ES", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
          . Los datos respetan la privacidad y no identifican personalmente a los visitantes.
        </p>
      </main>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  change,
  help,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  change?: number;
  help: string;
}) {
  const positive = (change ?? 0) >= 0;
  return (
    <article className="rounded-2xl border border-[#ded6ca] bg-[#fffdf8] p-4 shadow-[0_18px_50px_-40px_rgba(57,45,39,.65)] sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe3d4] text-[#9b6b42]">
          <Icon className="h-5 w-5" />
        </span>
        {typeof change === "number" && (
          <span
            className={`inline-flex items-center text-xs font-semibold ${positive ? "text-[#39785c]" : "text-[#a34d4d]"}`}
          >
            {positive ? (
              <ArrowUpRight className="h-3.5 w-3.5" />
            ) : (
              <ArrowDownRight className="h-3.5 w-3.5" />
            )}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <p className="mt-5 text-left text-xs font-semibold uppercase tracking-[0.1em] text-[#8d8379]">
        {label}
      </p>
      <p className="mt-1 text-left font-serif text-3xl sm:text-4xl">{value}</p>
      <p className="mt-2 text-left text-xs leading-relaxed text-[#8d8379]">{help}</p>
    </article>
  );
}

function Panel({
  title,
  subtitle,
  icon: Icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: typeof Users;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-[#ded6ca] bg-[#fffdf8] p-5 shadow-[0_18px_50px_-40px_rgba(57,45,39,.65)] sm:p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#efe3d4] text-[#9b6b42]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-serif text-xl">{title}</h2>
          <p className="text-left text-xs text-[#8d8379]">{subtitle}</p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </article>
  );
}

function TimelineChart({ data }: { data: AnalyticsData["timeline"] }) {
  const max = Math.max(...data.flatMap((item) => [item.views, item.visitors]), 1);
  const points = (key: "visitors" | "views") =>
    data
      .map(
        (item, index) =>
          `${(index / Math.max(data.length - 1, 1)) * 100},${96 - (item[key] / max) * 80}`,
      )
      .join(" ");
  return (
    <div>
      <div className="h-56 overflow-hidden rounded-2xl bg-[#faf6ef] p-4">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
          role="img"
          aria-label="Gráfico de evolución de visitas"
        >
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#ddd4c8" strokeWidth="0.45" />
          ))}
          <polyline
            points={points("views")}
            fill="none"
            stroke="#d1a06e"
            strokeWidth="2.2"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points={points("visitors")}
            fill="none"
            stroke="#4d4038"
            strokeWidth="2.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-[#8d8379]">
        {data.map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <span className="flex items-center gap-2">
          <i className="h-2.5 w-2.5 rounded-full bg-[#4d4038]" /> Personas
        </span>
        <span className="flex items-center gap-2">
          <i className="h-2.5 w-2.5 rounded-full bg-[#d1a06e]" /> Páginas vistas
        </span>
      </div>
    </div>
  );
}

function BreakdownPanel({
  title,
  icon: Icon,
  items,
  rawValues = false,
}: {
  title: string;
  icon: typeof Users;
  items: Array<{ label: string; value: number }>;
  rawValues?: boolean;
}) {
  const total = rawValues ? Math.max(...items.map((item) => item.value), 1) : 100;
  return (
    <article className="rounded-3xl border border-[#ded6ca] bg-[#fffdf8] p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#9b6b42]" />
        <h2 className="font-serif text-lg">{title}</h2>
      </div>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between gap-3 text-xs">
              <span>{item.label}</span>
              <strong>
                {item.value}
                {rawValues ? "" : "%"}
              </strong>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eee7dd]">
              <div
                className="h-full rounded-full bg-[#9b6b42]"
                style={{ width: `${Math.max((item.value / total) * 100, 4)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Laptop;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e4dcd1] p-4">
      <Icon className="h-4 w-4 text-[#9b6b42]" />
      <p className="mt-3 text-left text-[10px] uppercase tracking-wider text-[#8d8379]">{label}</p>
      <p className="mt-1 text-left font-serif text-xl">{value}</p>
    </div>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-ES").format(value);
}
function formatDuration(seconds: number) {
  return `${Math.floor(seconds / 60)} min ${seconds % 60} s`;
}

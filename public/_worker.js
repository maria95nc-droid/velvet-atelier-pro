const CANONICAL_HOST = "isabelaguerajimenez.es";
const REDIRECT_HOSTS = new Set([
  "www.isabelaguerajimenez.es",
  "velvet-atelier-pro.pages.dev",
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRECT_HOSTS.has(url.hostname)) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

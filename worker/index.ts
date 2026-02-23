export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);

    // Redirect workers.dev to main domain to avoid duplicate content
    if (url.hostname.endsWith(".workers.dev")) {
      const destination = new URL(url.pathname + url.search, "https://dirasmart.com");
      return Response.redirect(destination.toString(), 301);
    }

    // API routes
    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

    // Serve static assets
    const asset = await env.ASSETS.fetch(request);
    if (asset.status === 200) {
      return asset;
    }

    // Fallback to index.html for SPA routing
    if (asset.status === 404 && !url.pathname.includes(".")) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }

    return asset;
  },
} satisfies ExportedHandler;
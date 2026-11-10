import assert from "node:assert/strict";
import { build } from "esbuild";
import { readFile } from "node:fs/promises";

// Exercise real HTTP decisions without a Cloudflare account or live changes.
const { outputFiles } = await build({
  entryPoints: ["worker/index.ts"], bundle: true, write: false,
  format: "esm", platform: "node", target: "node20",
});
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString("base64")}`);
let assetRequests = [];
const env = { ASSETS: { async fetch(request) {
  const path = new URL(request.url).pathname;
  assetRequests.push(path);
  if (path.endsWith(".html") || path === "/assets/site.css") {
    return new Response("<!doctype html><html><body>Static asset</body></html>", { headers: { "content-type": path.endsWith(".css") ? "text/css" : "text/html" } });
  }
  return new Response("Missing", { status: 404 });
} } };
let passed = 0;
async function check(path, status, location, headers = {}) {
  assetRequests = [];
  const response = await worker.fetch(new Request(`https://dirasmart.com${path}`, { headers }), env);
  assert.equal(response.status, status, path);
  if (location) assert.equal(response.headers.get("location"), `https://dirasmart.com${location}`, path);
  if (status === 404 || status === 410) {
    assert.equal(response.headers.get("x-robots-tag"), "noindex", path);
    assert.ok(!(await response.text()).includes("Static asset"), "Missing pages must not reuse home content");
  }
  passed++;
  return response;
}
await check("/blog/nonexistent-article", 404);
await check("/en/blog/nonexistent-article", 404, null, { Accept: "text/markdown" });
await check("/blog/nonexistent/nested", 404);
await check("/producto/switch-smart-triple/?add-to-cart=1203", 410);
await check("/wp-content/plugins/woocommerce/old.js", 410);
await check("/premium/", 301, "/premium");
await check("/en/blog/knx-panama-automatizacion-premium", 301, "/en/blog/knx-premium-automation-panama");
await check("/en/blog/bms-sistema-gestion-edificios-comercial/?ref=test", 301, "/en/blog/bms-building-management-systems?ref=test");
await check("/blog/bms-building-management-systems", 301, "/blog/bms-sistema-gestion-edificios-comercial");
await check("/blog/knx-panama-automatizacion-premium", 200);
assert.ok(assetRequests.includes("/blog/knx-panama-automatizacion-premium.html"));
const markdown = await check("/en/blog/bms-building-management-systems", 200, null, { Accept: "text/markdown" });
assert.match(markdown.headers.get("content-type"), /text\/markdown/);
await check("/premium", 200);
await check("/assets/site.css", 200);
const sitemap = await readFile("public/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
assert.ok(urls.length >= 68, "Expected the complete bilingual sitemap");
for (const url of urls) await check(url.pathname, 200);
console.log(`${passed} HTTP SEO checks passed`);

/**
 * Notifies Bing / IndexNow (which feeds ChatGPT search, Yandex, Naver, Seznam) that pages changed.
 * Reads every <loc> from public/sitemap.xml and submits them in one request.
 * Usage: node scripts/indexnow.mjs            -> submit all sitemap URLs
 *        node scripts/indexnow.mjs /blog/x /y -> submit specific paths
 * Key: the file public/<key>.txt must be deployed and reachable at https://dirasmart.com/<key>.txt
 */
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const HOST = "dirasmart.com";

const keyFile = readdirSync(PUBLIC).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.error("No IndexNow key file in public/ (expected <32 hex>.txt)"); process.exit(1); }
const key = keyFile.replace(".txt", "");

let urls;
const args = process.argv.slice(2);
if (args.length) {
  urls = args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p}`));
} else {
  const sitemap = readFileSync(join(PUBLIC, "sitemap.xml"), "utf8");
  urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const body = { host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls };
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(`IndexNow: ${res.status} ${res.statusText} · ${urls.length} URLs submitted`);
if (res.status >= 400) { console.error(await res.text()); process.exit(1); }

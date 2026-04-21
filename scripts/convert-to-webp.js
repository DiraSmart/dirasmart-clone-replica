import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, dirname, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets");

// Only convert files larger than 20KB
const MIN_SIZE = 20 * 1024;

async function convertFile(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return null;

  const stat = statSync(inputPath);
  if (stat.size < MIN_SIZE) return null;

  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const name = basename(inputPath);

  try {
    const result = await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    const savedPct = Math.round((1 - result.size / stat.size) * 100);
    console.log(`  ${name} (${(stat.size / 1024).toFixed(0)}KB) → ${basename(outputPath)} (${(result.size / 1024).toFixed(0)}KB) — saved ${savedPct}%`);
    return { input: inputPath, output: outputPath, saved: stat.size - result.size };
  } catch (err) {
    console.error(`  SKIP ${name}: ${err.message}`);
    return null;
  }
}

async function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...(await walkDir(fullPath)));
    } else {
      const r = await convertFile(fullPath);
      if (r) results.push(r);
    }
  }
  return results;
}

async function main() {
  console.log("Converting heavy images to WebP...\n");
  const results = await walkDir(ASSETS_DIR);
  const totalSaved = results.reduce((sum, r) => sum + r.saved, 0);
  console.log(`\nConverted ${results.length} files. Total savings: ${(totalSaved / 1024).toFixed(0)}KB`);
}

main().catch(console.error);

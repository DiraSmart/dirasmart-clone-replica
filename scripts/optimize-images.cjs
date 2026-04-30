#!/usr/bin/env node
/**
 * One-shot image optimizer for public/comercial/ and key brand assets.
 * Run with: node scripts/optimize-images.cjs
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const targets = [
  // /comercial/ sector cards: 4:3, displayed at ~280px wide. 1200x900 max is plenty.
  { dir: 'public/comercial', files: ['hoteles.jpg', 'restaurantes.jpg', 'retail.jpg', 'museos.jpg', 'edificios.jpg', 'clinicas.jpg', 'gimnasios.jpg', 'oficinas.jpg'], maxW: 1200, maxH: 900, jpgQuality: 78, webpQuality: 72 },
  // Hero panama: full-bleed, can be wider but compressed
  { dir: 'public/comercial', files: ['hero-panama.jpg'], maxW: 2000, maxH: 1200, jpgQuality: 75, webpQuality: 70 },
  // KNX Partner badge: displayed at h=56px, source 1500x500-ish probably
  { dir: 'src/assets/brands', files: ['knx-partner.png'], maxW: 600, maxH: 200, pngQuality: 85, webpQuality: 88 },
];

async function processFile(absPath, opts) {
  if (!fs.existsSync(absPath)) {
    console.log(`  skip (missing): ${path.relative(root, absPath)}`);
    return null;
  }
  const before = fs.statSync(absPath).size;
  const ext = path.extname(absPath).toLowerCase();
  const { maxW, maxH, jpgQuality = 80, webpQuality = 75, pngQuality = 90 } = opts;

  const baseDir = path.dirname(absPath);
  const baseName = path.basename(absPath, ext);
  const webpPath = path.join(baseDir, `${baseName}.webp`);

  // Generate webp version
  await sharp(absPath)
    .resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: webpQuality, effort: 6 })
    .toFile(webpPath);

  // Re-encode original
  const originalTmp = `${absPath}.tmp`;
  if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(absPath)
      .resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: jpgQuality, progressive: true, mozjpeg: true })
      .toFile(originalTmp);
  } else if (ext === '.png') {
    await sharp(absPath)
      .resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true })
      .png({ quality: pngQuality, compressionLevel: 9 })
      .toFile(originalTmp);
  }

  if (fs.existsSync(originalTmp)) {
    fs.renameSync(originalTmp, absPath);
  }

  const after = fs.statSync(absPath).size;
  const webpSize = fs.statSync(webpPath).size;
  return { before, after, webpSize };
}

(async () => {
  let totalBefore = 0, totalAfter = 0, totalWebp = 0;
  for (const target of targets) {
    console.log(`\nDir: ${target.dir}`);
    for (const file of target.files) {
      const abs = path.join(root, target.dir, file);
      const result = await processFile(abs, target);
      if (result) {
        const { before, after, webpSize } = result;
        totalBefore += before;
        totalAfter += after;
        totalWebp += webpSize;
        const beforeKB = (before / 1024).toFixed(1);
        const afterKB = (after / 1024).toFixed(1);
        const webpKB = (webpSize / 1024).toFixed(1);
        const savedPct = (((before - after) / before) * 100).toFixed(0);
        console.log(`  ${file.padEnd(28)} ${beforeKB.padStart(7)} -> ${afterKB.padStart(7)} KB  (-${savedPct}%) | webp ${webpKB} KB`);
      }
    }
  }
  console.log(`\nTotal originals: ${(totalBefore/1024).toFixed(1)} -> ${(totalAfter/1024).toFixed(1)} KB`);
  console.log(`Total webp:      ${(totalWebp/1024).toFixed(1)} KB`);
})();

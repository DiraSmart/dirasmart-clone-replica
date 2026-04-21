import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, "..", "public", "blog");

const WIDTH = 1200;
const HEIGHT = 630;

// Blog images to generate with gradient colors and icon SVGs
const BLOG_IMAGES = [
  {
    filename: "knx-partner.jpg",
    gradient: ["#059669", "#065f46"], // emerald-600 to green-800
    title: "KNX",
    subtitle: "PARTNER",
    icon: `<circle cx="100" cy="100" r="80" fill="none" stroke="white" stroke-width="6"/>
           <text x="100" y="90" font-family="Arial,sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle">KNX</text>
           <text x="100" y="125" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.8)" text-anchor="middle">CERTIFIED</text>`,
  },
  {
    filename: "voice-control.jpg",
    gradient: ["#8b5cf6", "#4f46e5"], // purple-500 to indigo-600
    title: "VOICE",
    subtitle: "CONTROL",
    icon: `<circle cx="100" cy="100" r="70" fill="rgba(255,255,255,0.15)"/>
           <rect x="88" y="50" width="24" height="55" rx="12" fill="white"/>
           <path d="M70 95 L70 110 A30 30 0 0 0 130 110 L130 95" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"/>
           <line x1="100" y1="140" x2="100" y2="160" stroke="white" stroke-width="5" stroke-linecap="round"/>
           <line x1="85" y1="160" x2="115" y2="160" stroke="white" stroke-width="5" stroke-linecap="round"/>`,
  },
  {
    filename: "motorized-blinds.jpg",
    gradient: ["#14b8a6", "#0e7490"], // teal-500 to cyan-700
    title: "SMART",
    subtitle: "BLINDS",
    icon: `<rect x="30" y="30" width="140" height="140" rx="8" fill="none" stroke="white" stroke-width="5"/>
           <line x1="30" y1="60" x2="170" y2="60" stroke="white" stroke-width="3"/>
           <line x1="30" y1="85" x2="170" y2="85" stroke="white" stroke-width="3"/>
           <line x1="30" y1="110" x2="170" y2="110" stroke="white" stroke-width="3"/>
           <line x1="30" y1="135" x2="170" y2="135" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-dasharray="8,6"/>`,
  },
  {
    filename: "apartment-automation.jpg",
    gradient: ["#3b82f6", "#7c3aed"], // blue-500 to violet-600
    title: "SMART",
    subtitle: "LIVING",
    icon: `<rect x="40" y="55" width="120" height="100" rx="4" fill="none" stroke="white" stroke-width="5"/>
           <line x1="100" y1="55" x2="100" y2="155" stroke="white" stroke-width="3"/>
           <line x1="40" y1="105" x2="100" y2="105" stroke="white" stroke-width="3"/>
           <rect x="50" y="25" width="100" height="30" rx="3" fill="none" stroke="white" stroke-width="4"/>
           <rect x="52" y="68" width="16" height="16" rx="2" fill="rgba(255,255,255,0.6)"/>
           <rect x="72" y="68" width="16" height="16" rx="2" fill="rgba(255,255,255,0.6)"/>
           <rect x="52" y="118" width="16" height="16" rx="2" fill="rgba(255,255,255,0.6)"/>`,
  },
  {
    filename: "energy-savings.jpg",
    gradient: ["#eab308", "#16a34a"], // yellow-500 to green-600
    title: "SAVE",
    subtitle: "ENERGY",
    icon: `<path d="M110 30 L60 100 L90 100 L80 170 L140 90 L108 90 Z" fill="white" stroke="none"/>`,
  },
];

async function generateBlogImage({ filename, gradient, icon }) {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${gradient[0]}"/>
        <stop offset="100%" style="stop-color:${gradient[1]}"/>
      </linearGradient>
      <radialGradient id="glow" cx="70%" cy="40%" r="50%">
        <stop offset="0%" style="stop-color:rgba(255,255,255,0.12)"/>
        <stop offset="100%" style="stop-color:rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
    <!-- Decorative circles -->
    <circle cx="950" cy="150" r="200" fill="rgba(255,255,255,0.05)"/>
    <circle cx="1000" cy="200" r="150" fill="rgba(255,255,255,0.05)"/>
    <!-- Grid pattern -->
    <line x1="0" y1="210" x2="${WIDTH}" y2="210" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <line x1="0" y1="420" x2="${WIDTH}" y2="420" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <line x1="400" y1="0" x2="400" y2="${HEIGHT}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <line x1="800" y1="0" x2="800" y2="${HEIGHT}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <!-- Icon -->
    <g transform="translate(${WIDTH / 2 - 100}, ${HEIGHT / 2 - 100})">
      ${icon}
    </g>
    <!-- DiraSmart watermark -->
    <text x="${WIDTH - 40}" y="${HEIGHT - 25}" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="rgba(255,255,255,0.4)" text-anchor="end" font-weight="500">dirasmart.com</text>
  </svg>`;

  const outPath = join(BLOG_DIR, filename);
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outPath);

  console.log(`  Created: ${filename}`);
}

async function main() {
  console.log("Generating blog hero images...");
  for (const img of BLOG_IMAGES) {
    await generateBlogImage(img);
  }
  console.log(`\nDone! Generated ${BLOG_IMAGES.length} blog images.`);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});

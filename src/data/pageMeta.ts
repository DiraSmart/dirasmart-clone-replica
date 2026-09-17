/**
 * Titles and meta descriptions for the static (non-blog) pages.
 * Shared by DynamicHead (client <head>) and the Cloudflare worker (markdown / agent responses)
 * so both surfaces always say the same thing.
 */
export interface PageMeta {
  title: string;
  description: string;
}

export const PAGE_META_ES: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart · Casa Inteligente y Domótica en Panamá",
    description:
      "Empresa de casas inteligentes en Panamá. KNX Partner certificado, procesamiento 100% local y app propia para hogares, hoteles, comercios y edificios.",
  },
  "/about": {
    title: "Nosotros · DiraSmart · Casa Inteligente en Panamá",
    description:
      "Por qué nació DiraSmart: casa inteligente en Panamá con procesamiento 100% local, KNX, Zigbee y Modbus, modo Shabbat y soporte directo por WhatsApp.",
  },
  "/comercial": {
    title: "Automatización y BMS para Hoteles y Edificios en Panamá",
    description:
      "Automatización y BMS para hoteles, oficinas, retail y edificios en Panamá. KNX Partner, arquitectura descentralizada, BACnet y DALI, soporte 24/7.",
  },
  "/premium": {
    title: "Instalaciones KNX Premium en Panamá · DiraSmart",
    description:
      "Pantallas KNX en pared y marcas como Basalte, Gira, Jung y ABB: el equipo de hoteles, ahora para residencias en Panamá. KNX Partner, sin nube.",
  },
  "/reviews": {
    title: "Reseñas de Clientes · DiraSmart Panamá",
    description:
      "Reseñas reales de clientes de DiraSmart en Panamá: hogares, oficinas y residencias automatizadas. Calificación 5.0 en Google con 15 opiniones.",
  },
  "/blog": {
    title: "Blog · DiraSmart · Guías de Smart Home y Domótica",
    description:
      "Artículos, guías y noticias sobre casas inteligentes, automatización del hogar, domótica y tecnología en Panamá.",
  },
};

export const PAGE_META_EN: Record<string, PageMeta> = {
  "/": {
    title: "DiraSmart · Smart Home Company in Panama",
    description:
      "Smart home company in Panama. Certified KNX Partner, 100% local processing and a custom app for homes, hotels, retail and buildings.",
  },
  "/about": {
    title: "About Us · DiraSmart · Smart Homes in Panama",
    description:
      "Why DiraSmart exists: smart homes in Panama with 100% local processing, KNX, Zigbee and Modbus, Shabbat mode and direct WhatsApp support.",
  },
  "/comercial": {
    title: "Hotel, Office & Building Automation in Panama · DiraSmart",
    description:
      "Automation and BMS for hotels, offices, retail and buildings in Panama. Certified KNX Partner, decentralized architecture, BACnet and DALI, 24/7 support.",
  },
  "/premium": {
    title: "Premium KNX Installations in Panama · DiraSmart",
    description:
      "Wall-mounted KNX touchscreens and brands like Basalte, Gira, Jung and ABB: hotel-grade equipment for residences in Panama. Certified KNX Partner, no cloud.",
  },
  "/reviews": {
    title: "Client Reviews · DiraSmart Panama",
    description:
      "Real reviews from DiraSmart clients in Panama: homes, offices and residences automated with local processing and KNX. Rated 5.0 on Google with 15 reviews.",
  },
  "/blog": {
    title: "Blog · DiraSmart · Smart Home & Automation Guides",
    description:
      "Articles, guides and news about smart homes, home automation, and technology in Panama.",
  },
};

/** Resolve meta for any static path, including the /en prefix. */
export function getPageMeta(pathname: string): PageMeta | undefined {
  if (pathname === "/en") return PAGE_META_EN["/"];
  if (pathname.startsWith("/en/")) return PAGE_META_EN[pathname.slice(3)];
  return PAGE_META_ES[pathname];
}

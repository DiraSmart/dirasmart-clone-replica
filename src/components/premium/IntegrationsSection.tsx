import { motion } from "framer-motion";
import {
  Lightbulb,
  ThermometerSun,
  Music2,
  ShieldCheck,
  Car,
  Blinds,
  Droplets,
  Flame,
  Waves,
} from "lucide-react";

const categories = [
  {
    icon: Lightbulb,
    title: "Iluminación KNX + DALI",
    body: "Escenas, dimmer, control circadiano, RGBW arquitectónico.",
    brands: ["Gira", "Jung", "ABB", "Hue", "DALI"],
  },
  {
    icon: ThermometerSun,
    title: "Clima por zona",
    body: "AC inverter por habitación, termostatos KNX, ventilación HRV.",
    brands: ["Daikin", "LG", "Mitsubishi", "Ecobee"],
  },
  {
    icon: Music2,
    title: "Audio multi-room",
    body: "Sonido sincronizado por zona, fuentes locales o streaming.",
    brands: ["Sonos", "Denon Heos", "Basalte"],
  },
  {
    icon: ShieldCheck,
    title: "Seguridad & cámaras",
    body: "CCTV 4K, control de accesos biométrico, alarmas con escenas.",
    brands: ["Hikvision", "Dahua", "Aqara"],
  },
  {
    icon: Car,
    title: "Tesla & EV",
    body: "Powerwall, Wallbox, gestión solar, escenas de salida del coche.",
    brands: ["Tesla", "Wallbox"],
  },
  {
    icon: Blinds,
    title: "Persianas & cortinas",
    body: "Motorización silenciosa, automatización por sol y privacidad.",
    brands: ["Somfy", "Lutron", "Forest"],
  },
  {
    icon: Droplets,
    title: "Riego inteligente",
    body: "Estación meteorológica, riego por zonas, ahorro de agua medido.",
    brands: ["Hunter", "Rain Bird"],
  },
  {
    icon: Flame,
    title: "Sauna & jacuzzi",
    body: "Pre-calentamiento programado, monitoreo de temperatura y filtración.",
    brands: ["Klafs", "Tylö"],
  },
  {
    icon: Waves,
    title: "Piscina & jardín",
    body: "Filtración, iluminación subacuática, calentamiento solar integrado.",
    brands: ["Pentair", "Hayward"],
  },
];

const IntegrationsSection = () => {
  return (
    <section
      id="integramos"
      className="relative py-28 md:py-40 overflow-hidden bg-[#06080f]"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div
            className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70 mb-5"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            Lo que integramos
          </div>
          <h2
            className="text-white leading-[1.02] tracking-[-0.03em] mb-6"
            style={{
              fontFamily: "'Fraunces Variable', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 300,
              fontVariationSettings: "'opsz' 144, 'SOFT' 30",
            }}
          >
            Cada sistema de la casa,
            <br />
            bajo el <span className="italic text-cyan-200">mismo control.</span>
          </h2>
          <p
            className="text-white/55 text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 350 }}
          >
            No es ofrecer "luces inteligentes". Es diseñar un sistema único que
            conecta nueve sistemas distintos de la casa. Estos son los que integramos
            de fábrica.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#06080f] p-7 md:p-8 hover:bg-[#0a0e1a] transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/[0.08] transition-all">
                <cat.icon className="w-4 h-4 text-white/70 group-hover:text-cyan-300 transition-colors" strokeWidth={1.5} />
              </div>

              <h3
                className="text-white text-lg mb-2 leading-tight"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 500 }}
              >
                {cat.title}
              </h3>
              <p
                className="text-white/50 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                {cat.body}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {cat.brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-[10px] px-2 py-1 rounded-md bg-white/[0.03] text-white/40 border border-white/[0.05] uppercase tracking-wider"
                    style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                  >
                    {brand}
                  </span>
                ))}
              </div>

              {/* Hover indicator */}
              <span className="absolute bottom-7 right-7 text-white/15 group-hover:text-cyan-300 transition-colors text-lg">
                ↗
              </span>
            </motion.div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-[12px] text-white/35"
          style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
        >
          ¿Una marca o sistema que no aparece? Pregúntanos — si existe en el mercado
          premium, casi siempre se puede integrar.
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;

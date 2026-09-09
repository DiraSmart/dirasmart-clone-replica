import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const fragments = [
  "App de Hue para luces",
  "App de Sonos para audio",
  "App de Nest para clima",
  "App de Ring para cámaras",
  "App de Tesla para coche",
  "App de Somfy para persianas",
];

const integrated = [
  { label: "Iluminación KNX", brand: "Gira / Jung / ABB" },
  { label: "Audio multi-room", brand: "Sonos / Denon" },
  { label: "Clima por zona", brand: "Daikin / LG" },
  { label: "Seguridad", brand: "Hikvision / Dahua" },
  { label: "Tesla & EV", brand: "Powerwall / Wallbox" },
  { label: "Persianas & cortinas", brand: "Somfy / Lutron" },
];

const DifferenceSection = () => {
  return (
    <section id="diferencia" className="relative py-28 md:py-40 bg-[#06080f] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(28,184,219,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <div
            className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70 mb-5"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            La diferencia
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
            Dispositivos inteligentes
            <br />
            <span className="italic text-white/50">no son</span> una casa inteligente.
          </h2>
          <p
            className="text-white/55 text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 350 }}
          >
            La mayoría compra dispositivos sueltos y termina con ocho apps abiertas
            cuando quiere apagar las luces. Premium significa un sistema, no una
            colección de aparatos.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* LEFT: Fragmented */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 md:p-10 overflow-hidden border border-white/[0.06]"
            style={{
              background: "linear-gradient(165deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <X className="w-4 h-4 text-rose-400/80" strokeWidth={2} />
              <span
                className="text-[10px] uppercase tracking-[0.22em] text-rose-300/70"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                Lo común
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl text-white/70 mb-2 leading-tight"
              style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
            >
              Casa con dispositivos sueltos
            </h3>
            <p
              className="text-white/40 text-sm mb-8"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Comprados uno por uno. Marcas distintas. Apps separadas.
            </p>

            <div className="space-y-2.5">
              {fragments.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-white/[0.015] border border-white/[0.04]"
                >
                  <span className="w-1 h-1 rounded-full bg-rose-400/50" />
                  <span
                    className="text-sm text-white/55"
                    style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                  >
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-7 pt-5 border-t border-white/[0.05] text-[11px] text-white/30"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              <span className="text-white/50 font-medium">Resultado:</span>{" "}
              6 apps abiertas, sin escenas globales, cada cosa se actualiza por su lado, soporte distribuido entre 6 fabricantes.
            </div>
          </motion.div>

          {/* RIGHT: Integrated */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 md:p-10 overflow-hidden border"
            style={{
              background: "linear-gradient(165deg, rgba(28,184,219,0.08) 0%, rgba(28,184,219,0.02) 100%)",
              borderColor: "rgba(28,184,219,0.2)",
              boxShadow: "0 30px 60px -20px rgba(28,184,219,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Glow corner */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(28,184,219,0.25) 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            <div className="relative flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-cyan-300" strokeWidth={2.5} />
              <span
                className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/90"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                DiraSmart Premium
              </span>
            </div>
            <h3
              className="relative text-2xl md:text-3xl text-white mb-2 leading-tight"
              style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
            >
              Casa <span className="italic text-cyan-200">integrada</span> como un sistema
            </h3>
            <p
              className="relative text-white/55 text-sm mb-8"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Diseñado en conjunto. Backbone KNX. Multi-marca bajo una sola interfaz.
            </p>

            <div className="relative space-y-2.5">
              {integrated.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(28,184,219,0.8)]" />
                    <span
                      className="text-sm text-white/85"
                      style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="text-[10px] text-white/35 hidden sm:inline"
                    style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                  >
                    {item.brand}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className="relative mt-7 pt-5 border-t border-white/[0.08] text-[11px] text-white/50"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              <span className="text-cyan-200/90 font-medium">Resultado:</span>{" "}
              Una sola app. Escenas globales. Un solo punto de soporte. Diez años de vida útil garantizada por el estándar KNX.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

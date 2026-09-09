import { motion } from "framer-motion";
import { Star, Clock, Sun, Moon } from "lucide-react";

const ShabbatSection = () => {
  return (
    <section
      id="shabbat"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #06080f 0%, #0d0a08 50%, #06080f 100%)",
      }}
    >
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(252, 211, 77, 0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* LEFT: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Star className="w-4 h-4 text-amber-300" strokeWidth={1.5} fill="currentColor" />
              <span
                className="text-[10px] uppercase tracking-[0.28em] text-amber-300/80"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                Diferenciador único en Panamá
              </span>
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
              <span
                className="italic"
                style={{
                  background: "linear-gradient(110deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Modo Shabbat.
              </span>
              <br />
              Automatización con respeto a la halajá.
            </h2>

            <p
              className="text-white/60 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 350 }}
            >
              Programado para mantener la observancia del Shabat y festividades sin
              compromiso. Las luces, persianas, clima y agua siguen el horario halájico —
              automatizadas sin acción humana directa durante el día sagrado. Validado
              en consulta con autoridades rabínicas locales.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: "Detección automática",
                  body: "Calendario hebreo incorporado. Encendido y apagado según horarios de Jerusalén o Panamá, con margen halájico.",
                },
                {
                  icon: Sun,
                  title: "Escenas programadas",
                  body: "Iluminación previa al encendido de velas, dimmer progresivo en kabbalat shabbat, modo havdalá al cierre.",
                },
                {
                  icon: Moon,
                  title: "Sin botones, sin pantallas activas",
                  body: "Durante Shabbat, paneles muestran solo información pasiva. Nada que requiera contacto eléctrico directo.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-400/20 flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-amber-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      className="text-white text-base mb-1"
                      style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 500 }}
                    >
                      {item.title}
                    </div>
                    <p
                      className="text-white/55 text-sm leading-relaxed"
                      style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: visual — candle / glow card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer warm halo */}
            <div
              className="absolute -inset-12 rounded-[40px]"
              style={{
                background: "radial-gradient(ellipse, rgba(245,158,11,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Card */}
            <div
              className="relative rounded-3xl overflow-hidden border border-amber-400/15"
              style={{
                background: "linear-gradient(165deg, rgba(245,158,11,0.06) 0%, rgba(6,8,15,0.6) 60%, rgba(6,8,15,0.95) 100%), url('/premium/bg-onyx.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 50px 100px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(252,211,77,0.1)",
              }}
            >
              <div className="aspect-[4/5] p-10 md:p-12 flex flex-col justify-end relative">

                {/* Floating candle metaphor — pulsing dot */}
                <div className="absolute top-12 right-12 flex flex-col items-center gap-1">
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-3 h-4 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse at 50% 30%, #fde68a 0%, #f59e0b 60%, transparent 100%)",
                      filter: "blur(1px)",
                      boxShadow: "0 0 24px rgba(252,211,77,0.7)",
                    }}
                  />
                  <div className="w-px h-6 bg-white/20" />
                </div>

                {/* Status block */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 w-fit"
                  style={{
                    background: "rgba(245,158,11,0.12)",
                    border: "1px solid rgba(252,211,77,0.25)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse shadow-[0_0_8px_rgba(252,211,77,0.9)]" />
                  <span
                    className="text-[10px] text-amber-200/90 uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                  >
                    Modo Shabbat · Activo
                  </span>
                </div>

                <div
                  className="text-white/90 text-3xl md:text-4xl leading-tight mb-4"
                  style={{
                    fontFamily: "'Fraunces Variable', Georgia, serif",
                    fontWeight: 300,
                    fontVariationSettings: "'opsz' 144, 'SOFT' 60",
                  }}
                >
                  <span
                    className="italic"
                    style={{
                      background: "linear-gradient(120deg, #fde68a, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Encendido de velas
                  </span>
                  <br />
                  18:24
                </div>
                <div
                  className="text-white/55 text-sm mb-7 leading-relaxed"
                  style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                >
                  Las luces se atenúan progresivamente. Persianas en posición de
                  privacidad. Clima en modo silencioso. La casa se prepara para Shabbat.
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { time: "18:24", label: "Velas", active: true },
                    { time: "19:42", label: "Cena", active: false },
                    { time: "Sábado 19:42", label: "Havdalá", active: false },
                  ].map((step) => (
                    <div
                      key={step.label}
                      className={`px-3 py-2.5 rounded-lg border ${
                        step.active
                          ? "border-amber-400/40 bg-amber-500/[0.08]"
                          : "border-white/[0.06] bg-white/[0.02]"
                      }`}
                    >
                      <div
                        className={`text-[10px] uppercase tracking-wider mb-1 ${
                          step.active ? "text-amber-200/80" : "text-white/30"
                        }`}
                        style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                      >
                        {step.label}
                      </div>
                      <div
                        className={`text-xs tabular-nums ${step.active ? "text-white" : "text-white/40"}`}
                        style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 500 }}
                      >
                        {step.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShabbatSection;

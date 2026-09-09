import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Consulta privada",
    duration: "1 sesión · 90 minutos",
    body: "Nos sentamos contigo (o con tu arquitecto) a entender la casa, el estilo de vida y las prioridades. Sin compromiso, sin presupuesto inflado.",
  },
  {
    n: "02",
    title: "Diseño técnico",
    duration: "2–3 semanas",
    body: "Levantamiento eléctrico, plano de dispositivos KNX, integración con sistemas existentes, presupuesto detallado por zona. Documento que puedes mostrar a tu constructor.",
  },
  {
    n: "03",
    title: "Instalación profesional",
    duration: "Coordinada con la obra",
    body: "Cableado KNX en obra gris, configuración ETS, programación de escenas, pruebas por habitación. Equipo certificado, no subcontratado.",
  },
  {
    n: "04",
    title: "Soporte de por vida",
    duration: "Anual · sin caducidad",
    body: "Ajustes de escenas, actualizaciones de firmware, integraciones nuevas según vayan saliendo. Un solo número de teléfono, una sola factura.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="proceso"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #06080f 0%, #08111e 50%, #06080f 100%)",
      }}
    >
      {/* Center vertical line — visual spine */}
      <div
        className="hidden lg:block absolute left-1/2 top-40 bottom-40 w-px -translate-x-1/2"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(28,184,219,0.3) 15%, rgba(28,184,219,0.5) 50%, rgba(28,184,219,0.3) 85%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20 md:mb-28"
        >
          <div
            className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70 mb-5"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            Cómo trabajamos
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
            Un proceso <span className="italic text-cyan-200">consultivo</span>,
            no transaccional.
          </h2>
          <p
            className="text-white/55 text-lg leading-relaxed"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 350 }}
          >
            Cuatro pasos. Cada uno documentado, cada uno con tiempos claros.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  isLeft ? "" : "lg:[direction:rtl]"
                }`}
              >
                {/* Number badge */}
                <div className={`flex ${isLeft ? "lg:justify-end" : "lg:justify-start [direction:ltr]"}`}>
                  <div className="relative">
                    <div
                      className="absolute -inset-8 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(28,184,219,0.18) 0%, transparent 70%)",
                        filter: "blur(20px)",
                      }}
                    />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-cyan-400/20 bg-[#06080f] flex items-center justify-center"
                         style={{ boxShadow: "0 0 60px -10px rgba(28,184,219,0.3), inset 0 0 30px rgba(28,184,219,0.04)" }}>
                      <span
                        className="text-5xl md:text-6xl"
                        style={{
                          fontFamily: "'Fraunces Variable', Georgia, serif",
                          fontWeight: 300,
                          fontVariationSettings: "'opsz' 144",
                          background: "linear-gradient(120deg, #67e8f9 0%, #22d3ee 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {step.n}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="[direction:ltr] max-w-lg">
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/60 mb-3"
                    style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                  >
                    {step.duration}
                  </div>
                  <h3
                    className="text-3xl md:text-4xl text-white mb-4 leading-tight"
                    style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/55 text-base leading-relaxed"
                    style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

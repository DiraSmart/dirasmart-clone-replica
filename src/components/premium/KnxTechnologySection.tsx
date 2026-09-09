import { motion } from "framer-motion";
import { Globe, Award, Wrench } from "lucide-react";

const stats = [
  { value: "60+", label: "años de estándar mundial", since: "Desde 1990" },
  { value: "500+", label: "fabricantes certificados", since: "Catálogo global" },
  { value: "100K+", label: "proyectos en el mundo", since: "Hoteles, residencias, museos" },
];

const referenceProjects = [
  { name: "Burj Khalifa", location: "Dubái", type: "Residencia + amenidades" },
  { name: "Marina Bay Sands", location: "Singapur", type: "Hotel & resort" },
  { name: "Museo del Prado", location: "Madrid", type: "Iluminación dirigida" },
  { name: "Allianz Arena", location: "Múnich", type: "Iluminación arquitectónica" },
];

const KnxTechnologySection = () => {
  return (
    <section
      id="tecnologia"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #06080f 0%, #0a0e1a 50%, #06080f 100%)",
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/premium/wall-slate.jpg')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">

        {/* Eyebrow + headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <div
            className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70 mb-5"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            La tecnología
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
            <span className="italic text-cyan-200">KNX.</span> El estándar
            <br />que sostiene los hogares y edificios más exigentes del mundo.
          </h2>
          <p
            className="text-white/55 text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 350 }}
          >
            KNX es un protocolo abierto y certificado por ISO. No depende de la nube,
            no caduca, y funciona aunque mañana cierre cualquier fabricante. Es la
            razón por la que se especifica en hoteles, museos, embajadas y residencias
            premium desde hace tres décadas.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#06080f] p-8 md:p-10"
            >
              <div
                className="text-5xl md:text-6xl mb-3 text-white"
                style={{
                  fontFamily: "'Fraunces Variable', Georgia, serif",
                  fontWeight: 300,
                  fontVariationSettings: "'opsz' 144",
                  letterSpacing: "-0.04em",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(120deg, #67e8f9 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
              </div>
              <div
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                {stat.label}
              </div>
              <div
                className="text-[11px] text-white/35 uppercase tracking-wider"
                style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
              >
                {stat.since}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two-column: why KNX + reference projects */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Why KNX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="text-2xl md:text-3xl text-white mb-8 leading-tight"
              style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
            >
              Por qué <span className="italic text-cyan-200">KNX</span> y no WiFi
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: Globe,
                  title: "Estándar abierto e ISO",
                  body: "No depende de un fabricante. Cualquier instalador certificado puede mantenerlo. Tu casa no muere si una empresa quiebra.",
                },
                {
                  icon: Award,
                  title: "Sin nube, sin latencia",
                  body: "Bus cableado dedicado. Cuando tocas un botón, la luz responde en milisegundos, no espera a un servidor en Virginia.",
                },
                {
                  icon: Wrench,
                  title: "Pensado para durar 20 años",
                  body: "Mismo bus, dispositivos modernos. Actualizar no requiere romper paredes ni cambiar todo. Inversión que protege capital.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      className="text-white text-base mb-1.5"
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

          {/* Reference projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h3
              className="text-2xl md:text-3xl text-white mb-2 leading-tight"
              style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 300 }}
            >
              Donde se usa <span className="italic text-cyan-200">KNX</span> en el mundo
            </h3>
            <p
              className="text-white/40 text-sm mb-8"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Referencias internacionales (no proyectos propios). KNX es la tecnología.
            </p>

            <div className="space-y-2">
              {referenceProjects.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all"
                >
                  <div>
                    <div
                      className="text-white text-base mb-0.5"
                      style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontWeight: 400 }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="text-[11px] text-white/40 uppercase tracking-wider"
                      style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                    >
                      {p.location} · {p.type}
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-cyan-300 transition-colors">→</span>
                </motion.div>
              ))}
            </div>

            <p
              className="mt-6 text-[11px] text-white/30 italic leading-relaxed"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              DiraSmart es KNX Partner certificado desde 2026. Implementamos el mismo
              estándar usado en estos proyectos, adaptado a residencias premium en Panamá.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KnxTechnologySection;

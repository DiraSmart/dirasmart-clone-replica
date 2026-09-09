import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PremiumHero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0807]">

      {/* Full-bleed photograph */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/premium/bg-marble-dark.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Warm desaturation layer */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(10,8,7,0.35)",
          mixBlendMode: "color",
        }}
      />

      {/* Editorial vignette + readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(10,8,7,0.55) 0%, rgba(10,8,7,0.15) 35%, rgba(10,8,7,0.85) 100%),
            radial-gradient(ellipse at 30% 60%, rgba(10,8,7,0.25) 0%, transparent 70%)
          `,
        }}
      />

      {/* Fine paper grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-14 lg:px-20 min-h-[100svh] flex flex-col">

        {/* Top mark — extremely restrained */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="flex items-center justify-between pt-28 md:pt-32"
        >
          <div
            className="text-[10px] tracking-[0.4em] text-[#d4c5a0]/60"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 400 }}
          >
            <span className="uppercase">P r e m i u m</span>
          </div>
          <div
            className="text-[10px] tracking-[0.3em] text-[#d4c5a0]/40 tabular-nums"
            style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
          >
            <span className="hidden sm:inline">Volumen 01 · </span>2026
          </div>
        </motion.div>

        {/* Headline area — anchored toward middle-lower */}
        <div className="flex-1 flex flex-col justify-end pb-24 md:pb-32 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#f5ecdc] leading-[0.95] tracking-[-0.035em] mb-10"
            style={{
              fontFamily: "'Fraunces Variable', 'Fraunces', Georgia, serif",
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
              fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
              fontWeight: 300,
            }}
          >
            El upgrade
            <br />
            <span
              className="italic"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                color: "#e8d9b8",
              }}
            >
              premium
            </span>{" "}
            de DiraSmart.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#f5ecdc]/55 max-w-xl leading-[1.65] mb-14"
            style={{
              fontFamily: "'Geist Variable', system-ui, sans-serif",
              fontSize: "clamp(1.0625rem, 1.2vw, 1.1875rem)",
              fontWeight: 350,
            }}
          >
            Para nuevas construcciones y remodelaciones de alcance integral.
            Equipamiento de catálogo internacional, ingeniería en fase de planos,
            instalación cableada desde la obra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8"
          >
            <a
              href="#hablemos"
              className="group inline-flex items-center gap-3 text-[#f5ecdc] hover:text-white transition-colors"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif", fontWeight: 400 }}
            >
              <span className="text-sm">Hablemos sobre tu proyecto</span>
              <span
                className="relative w-9 h-9 rounded-full border border-[#f5ecdc]/40 flex items-center justify-center group-hover:border-[#e8d9b8] group-hover:bg-[#e8d9b8]/10 transition-all"
              >
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom hairline credentials — barely there */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="absolute bottom-8 inset-x-0 px-8 md:px-14 lg:px-20"
        >
          <div className="border-t border-[#f5ecdc]/[0.08] pt-5 flex flex-wrap items-center justify-between gap-3">
            <div
              className="text-[10px] tracking-[0.28em] text-[#f5ecdc]/35 uppercase"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Partner certificado KNX · desde 2026
            </div>
            <div
              className="text-[10px] tracking-[0.28em] text-[#f5ecdc]/35 uppercase"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              Panamá · Costa del Este · Coronado
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHero;

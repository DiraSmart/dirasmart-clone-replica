import { motion } from "framer-motion";
import { Sun, UtensilsCrossed, Star, Film, Moon, Sparkles, Thermometer, Lightbulb, Music, Lock } from "lucide-react";

const tiles = [
  { icon: Lightbulb, label: "Luces" },
  { icon: Thermometer, label: "Clima" },
  { icon: Music, label: "Audio" },
  { icon: Lock, label: "Seguridad" },
];

const scenes = [
  { icon: Sun, label: "Mañana" },
  { icon: UtensilsCrossed, label: "Cena" },
  { icon: Star, label: "Shabbat", active: true },
  { icon: Film, label: "Cinema" },
  { icon: Moon, label: "Noche" },
];

/**
 * Renders a realistic KNX touchscreen panel mounted on a textured wall.
 * Visual reference: iNexus / Basalte Deseo style — vertical portrait orientation,
 * black bezel, glass front, ambient screen content.
 */
const WallMountedPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto"
      style={{ perspective: "2000px" }}
    >
      {/* Wall-mount shadow (sells the "mounted on wall" feeling) */}
      <div
        className="absolute -inset-6 rounded-[28px]"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0.65) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Cyan ambient glow */}
      <div
        className="absolute -inset-10 rounded-[28px] opacity-50"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(28,184,219,0.4) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      {/* Panel bezel (the physical device) */}
      <div
        className="relative rounded-[22px] aspect-[3/4] p-[10px]"
        style={{
          background: "linear-gradient(160deg, #1a1d24 0%, #0a0c10 100%)",
          boxShadow: `
            0 30px 80px -20px rgba(0,0,0,0.9),
            0 0 0 1px rgba(255,255,255,0.06),
            inset 0 1px 0 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 0 rgba(0,0,0,0.5)
          `,
        }}
      >
        {/* Glass screen */}
        <div
          className="relative w-full h-full rounded-[14px] overflow-hidden p-3"
          style={{
            background: "linear-gradient(165deg, #0a0e1a 0%, #050709 100%)",
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Glass reflection highlight */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[14px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.02) 100%)",
            }}
          />

          {/* UI content */}
          <div className="relative h-full flex flex-col">
            {/* Top bar */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <div
                  className="text-[8px] uppercase tracking-[0.18em] text-white/30 mb-0.5"
                  style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                >
                  Casa Aguilar
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-2xl text-white font-light tabular-nums leading-none"
                    style={{ fontFamily: "'Fraunces Variable', Georgia, serif", fontVariationSettings: "'opsz' 144" }}
                  >
                    21
                  </span>
                  <span className="text-[10px] text-white/40">°C</span>
                  <span className="ml-auto text-[10px] text-white/40 tabular-nums">21:34</span>
                </div>
              </div>
            </div>

            {/* Quick tiles */}
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <div
                    key={tile.label}
                    className="aspect-square rounded-lg bg-white/[0.04] border border-white/[0.06] flex flex-col items-center justify-center gap-1"
                  >
                    <Icon className="w-3 h-3 text-white/60" strokeWidth={1.5} />
                    <span
                      className="text-[7px] text-white/40 uppercase tracking-wider"
                      style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                    >
                      {tile.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Active scene pill */}
            <div
              className="px-2 py-1.5 rounded-lg mb-2 flex items-center gap-1.5"
              style={{
                background: "linear-gradient(90deg, rgba(28,184,219,0.15) 0%, rgba(28,184,219,0.05) 100%)",
                border: "1px solid rgba(28,184,219,0.3)",
              }}
            >
              <Sparkles className="w-2.5 h-2.5 text-cyan-300" strokeWidth={1.5} />
              <span className="text-[8px] text-white/80" style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}>
                Modo <span className="text-white font-medium">Shabbat</span>
              </span>
              <span className="ml-auto w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(28,184,219,0.9)]" />
            </div>

            {/* Scenes mini-list */}
            <div className="space-y-1 flex-1">
              {scenes.map((scene) => {
                const Icon = scene.icon;
                return (
                  <div
                    key={scene.label}
                    className={`flex items-center gap-1.5 px-1.5 py-1 rounded ${
                      scene.active ? "bg-white/[0.04]" : ""
                    }`}
                  >
                    <Icon
                      className={`w-2.5 h-2.5 ${scene.active ? "text-cyan-300" : "text-white/40"}`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[8px] ${scene.active ? "text-white/80" : "text-white/40"}`}
                      style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
                    >
                      {scene.label}
                    </span>
                    {scene.active && <span className="ml-auto w-1 h-1 rounded-full bg-cyan-300" />}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="pt-2 mt-2 border-t border-white/[0.04] flex items-center justify-between text-[7px] text-white/30"
              style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}
            >
              <span>9 disp. · 4 zonas</span>
              <span className="font-mono">KNX</span>
            </div>
          </div>
        </div>

        {/* Bottom indicator LED */}
        <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-cyan-400/70 shadow-[0_0_4px_rgba(28,184,219,0.8)]" />
        </div>
      </div>
    </motion.div>
  );
};

export default WallMountedPanel;

import { motion } from "framer-motion";
import { Sun, UtensilsCrossed, Star, Film, Moon, Sparkles } from "lucide-react";

const scenes = [
  { icon: Sun, label: "Buenos días", time: "07:00", active: false },
  { icon: UtensilsCrossed, label: "Cena", time: "19:30", active: false },
  { icon: Star, label: "Shabbat", time: "Activo", active: true },
  { icon: Film, label: "Cinema", time: "21:00", active: false },
  { icon: Moon, label: "Buenas noches", time: "23:00", active: false },
];

const AppShowcase = () => (
  <motion.div
    initial={{ opacity: 0, y: 24, rotateX: -10, rotateY: 8 }}
    animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: -4 }}
    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
    className="relative w-full max-w-[340px] mx-auto"
  >
    {/* Outer glow */}
    <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(28,184,219,0.35),transparent_70%)] blur-3xl" />

    {/* Glass card */}
    <div
      className="relative rounded-[28px] p-5 backdrop-blur-2xl border border-white/10"
      style={{
        background: "linear-gradient(165deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        boxShadow:
          "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* App header */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">
            Casa
          </div>
          <div className="text-sm font-medium text-white">Residencia Aguilar</div>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          En línea
        </div>
      </div>

      {/* Status pill */}
      <div className="mb-4 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" strokeWidth={1.5} />
          <div className="text-[11px] text-white/70">
            Modo <span className="text-white font-medium">Shabbat</span> activo —
            <span className="text-white/40"> hasta sábado 19:42</span>
          </div>
        </div>
      </div>

      {/* Scenes list */}
      <div className="space-y-1.5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/30 px-2 mb-2">
          Escenas
        </div>
        {scenes.map((scene, i) => {
          const Icon = scene.icon;
          return (
            <motion.div
              key={scene.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all ${
                scene.active
                  ? "bg-cyan-500/[0.12] border-cyan-400/30"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    scene.active
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-white/5 text-white/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
                <span
                  className={`text-[12px] ${
                    scene.active ? "text-white font-medium" : "text-white/70"
                  }`}
                >
                  {scene.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/40 tabular-nums">{scene.time}</span>
                {scene.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(28,184,219,0.8)]" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30">
        <span>9 dispositivos · 4 zonas</span>
        <span className="font-mono">v2.4</span>
      </div>
    </div>
  </motion.div>
);

export default AppShowcase;

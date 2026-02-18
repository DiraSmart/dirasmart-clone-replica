import { Shield, Zap, WifiOff, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyFeatures = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const features = [
    {
      icon: Lock,
      titleKey: "privacy.local.title",
      descKey: "privacy.local.desc",
      color: "primary",
      number: "01",
    },
    {
      icon: Zap,
      titleKey: "privacy.speed.title",
      descKey: "privacy.speed.desc",
      color: "accent",
      number: "02",
    },
    {
      icon: WifiOff,
      titleKey: "privacy.offline.title",
      descKey: "privacy.offline.desc",
      color: "primary",
      number: "03",
    },
    {
      icon: Shield,
      titleKey: "privacy.privacy.title",
      descKey: "privacy.privacy.desc",
      color: "accent",
      number: "04",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-3 sm:px-4 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            {t("privacy.title")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {t("privacy.title")}{" "}
            <span className="text-gradient">{t("privacy.titleHighlight")}</span>
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            {t("privacy.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col gap-5">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      feature.color === "primary"
                        ? "bg-primary/20 text-primary"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-white/10 group-hover:text-white/15 transition-colors leading-none">
                    {feature.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;

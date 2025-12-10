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
    },
    {
      icon: Zap,
      titleKey: "privacy.speed.title",
      descKey: "privacy.speed.desc",
      color: "accent",
    },
    {
      icon: WifiOff,
      titleKey: "privacy.offline.title",
      descKey: "privacy.offline.desc",
      color: "primary",
    },
    {
      icon: Shield,
      titleKey: "privacy.privacy.title",
      descKey: "privacy.privacy.desc",
      color: "accent",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase mb-4">
            {t("privacy.title")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("privacy.title")} <span className="text-gradient">{t("privacy.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("privacy.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 sm:p-8 text-center">
                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-muted/0 to-muted/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with subtle ring */}
                <div className="relative mb-5">
                  <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    feature.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-accent/10 text-accent'
                  }`}>
                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="relative text-base sm:text-lg font-semibold text-foreground mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;

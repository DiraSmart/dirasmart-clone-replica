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
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Zap,
      titleKey: "privacy.speed.title",
      descKey: "privacy.speed.desc",
      gradient: "from-accent to-accent/70",
    },
    {
      icon: WifiOff,
      titleKey: "privacy.offline.title",
      descKey: "privacy.offline.desc",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Shield,
      titleKey: "privacy.privacy.title",
      descKey: "privacy.privacy.desc",
      gradient: "from-accent to-accent/70",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t("privacy.title")} <span className="text-gradient">{t("privacy.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {t("privacy.subtitle")}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className={`group bg-card rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/30 transition-all duration-500 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyFeatures;

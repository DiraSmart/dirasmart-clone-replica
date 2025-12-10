import { Wifi, Signal, Router, Network } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const InfrastructureSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const features = [
    { icon: Router, labelKey: "infra.enterprise" },
    { icon: Signal, labelKey: "infra.coverage" },
    { icon: Network, labelKey: "infra.stable" },
  ];

  return (
    <section className="section-padding bg-muted/40 dark:bg-muted/20">
      <div className="container-custom px-3 sm:px-4">
        <div ref={ref} className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 border border-border shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {t("infra.badge")}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("infra.title")} <span className="text-gradient">{t("infra.titleHighlight")}</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                  {t("infra.description")}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.labelKey}
                    className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{t(feature.labelKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                  <div className="w-32 h-32 sm:w-44 sm:h-44 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border border-primary/30 animate-pulse">
                    <Wifi className="w-16 h-16 sm:w-20 sm:h-20 text-primary" />
                  </div>
                </div>
                {/* Animated signal rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 border border-primary/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

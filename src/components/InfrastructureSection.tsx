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
    <section className="section-padding bg-muted/20 dark:bg-muted/10">
      <div className="container-custom px-3 sm:px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase">
              {t("infra.badge")}
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {t("infra.title")} <span className="text-gradient">{t("infra.titleHighlight")}</span>
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              {t("infra.description")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {features.map((feature) => (
                <div
                  key={feature.labelKey}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-background rounded-full border border-border/50 shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground">{t(feature.labelKey)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-60" />
              
              {/* Main circle */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-border/30 flex items-center justify-center bg-background/50">
                {/* Inner circle */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5">
                  <Wifi className="w-12 h-12 sm:w-16 sm:h-16 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 sm:w-96 sm:h-96 border border-primary/5 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

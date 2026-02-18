import { MessageSquare, Wrench, HeartHandshake, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSteps = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      titleKey: "process.step1.title",
      descKey: "process.step1.desc",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
      number: "01",
    },
    {
      icon: Wrench,
      titleKey: "process.step2.title",
      descKey: "process.step2.desc",
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
      number: "02",
    },
    {
      icon: HeartHandshake,
      titleKey: "process.step3.title",
      descKey: "process.step3.desc",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
      number: "03",
    },
  ];

  return (
    <section className="section-padding bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t("process.title")}{" "}
            <span className="text-gradient">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.titleKey}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Arrow between cards (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 z-10 items-center justify-center w-8 h-8">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                )}

                <div className={`h-full bg-background rounded-2xl p-7 border border-border/50 hover:border-${step.color}/30 hover:shadow-lg transition-all duration-300 group flex flex-col gap-6`}>
                  {/* Top: number + icon */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transition-transform group-hover:scale-105`}
                    >
                      <step.icon
                        className={`w-7 h-7 ${
                          step.color === "primary" ? "text-primary" : "text-accent"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-5xl font-black text-muted/50 group-hover:text-muted-foreground/20 transition-colors leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>

                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2 lg:hidden">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs sm:text-sm text-muted-foreground/70 italic">
            {t("process.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

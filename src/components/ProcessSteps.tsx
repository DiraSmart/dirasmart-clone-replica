import { MessageSquare, Wrench, HeartHandshake, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSteps = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      numberKey: "process.step1.number",
      titleKey: "process.step1.title",
      descKey: "process.step1.desc",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Wrench,
      numberKey: "process.step2.number",
      titleKey: "process.step2.title",
      descKey: "process.step2.desc",
      gradient: "from-accent to-accent/70",
    },
    {
      icon: HeartHandshake,
      numberKey: "process.step3.number",
      titleKey: "process.step3.title",
      descKey: "process.step3.desc",
      gradient: "from-primary to-primary/70",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t("process.title")} <span className="text-gradient">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {t("process.subtitle")}
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.titleKey}
                className={`relative z-10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-3">
                    {t(step.numberKey)}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(step.descKey)}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-8 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-6 py-3 rounded-full border border-border">
            {t("process.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

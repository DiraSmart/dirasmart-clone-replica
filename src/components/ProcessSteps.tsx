import { MessageSquare, Wrench, HeartHandshake } from "lucide-react";
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
      color: "primary",
    },
    {
      icon: Wrench,
      numberKey: "process.step2.number",
      titleKey: "process.step2.title",
      descKey: "process.step2.desc",
      color: "accent",
    },
    {
      icon: HeartHandshake,
      numberKey: "process.step3.number",
      titleKey: "process.step3.title",
      descKey: "process.step3.desc",
      color: "primary",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase mb-4">
            Proceso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("process.title")} <span className="text-gradient">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.titleKey}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  {/* Step number badge */}
                  <div className="relative inline-block mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform hover:scale-105 ${
                      step.color === 'primary' 
                        ? 'bg-primary/10' 
                        : 'bg-accent/10'
                    }`}>
                      <step.icon className={`w-7 h-7 ${
                        step.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} strokeWidth={1.5} />
                    </div>
                    {/* Number indicator */}
                    <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step.color === 'primary' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {t(step.descKey)}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs sm:text-sm text-muted-foreground/80 italic">
            {t("process.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

import { Wifi, Signal, Router, Network, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const InfrastructureSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const features = [
  { icon: Router, labelKey: "infra.enterprise" },
  { icon: Signal, labelKey: "infra.coverage" },
  { icon: Network, labelKey: "infra.stable" }];


  const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "<1ms", label: "Latencia" },
  { value: "∞", label: "Dispositivos" }];


  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />


      <div className="container-custom px-3 sm:px-4 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div
            className={`flex justify-center order-last lg:order-first transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`
            }>

            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-16 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl" />

              {/* Stats cards arranged around central icon */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Central circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                    <Wifi className="w-14 h-14 sm:w-16 sm:h-16 text-primary" strokeWidth={1.2} />
                  </div>
                </div>

                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full border border-primary/10 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
                </div>
                <div className="absolute inset-[-20px] flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full border border-accent/8 rounded-full animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
                </div>

                {/* Floating stat chips */}
                {stats.map((stat, i) => {
                  const positions = [
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"];

                  return (
                    <div
                      key={stat.label}
                      className={`absolute ${positions[i]} bg-card border border-border rounded-xl px-3 py-2 shadow-lg text-center min-w-[72px]`}>

                      <p className="text-lg font-bold text-primary leading-none">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>);

                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`
            }>

            



            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {t("infra.title")}{" "}
              <span className="text-gradient">{t("infra.titleHighlight")}</span>
            </h2>

            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              {t("infra.description")}
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feature) =>
              <div
                key={feature.labelKey}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all">

                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground flex-1">{t(feature.labelKey)}</span>
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default InfrastructureSection;
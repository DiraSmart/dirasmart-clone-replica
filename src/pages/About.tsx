import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Users, MapPin, Award, Heart, Cpu } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, titleKey: "about.value1.title", descKey: "about.value1.desc", color: "primary" },
    { icon: Users, titleKey: "about.value2.title", descKey: "about.value2.desc", color: "accent" },
    { icon: Cpu, titleKey: "about.value3.title", descKey: "about.value3.desc", color: "primary" },
    { icon: Heart, titleKey: "about.value4.title", descKey: "about.value4.desc", color: "accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container-custom px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t("about.title")} <span className="text-gradient">{t("about.titleHighlight")}</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-muted/20 dark:bg-muted/10">
          <div className="container-custom px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t("about.story.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story.p1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story.p2")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story.p3")}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl" />
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="w-12 h-12 text-primary mx-auto" strokeWidth={1.2} />
                      <div>
                        <p className="text-2xl font-bold text-foreground">Panama City</p>
                        <p className="text-muted-foreground text-sm">{t("about.location")}</p>
                      </div>
                      <div className="flex gap-6 justify-center pt-2">
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary">2500+</p>
                          <p className="text-xs text-muted-foreground">{t("about.stat.devices")}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-accent">24/7</p>
                          <p className="text-xs text-muted-foreground">{t("about.stat.support")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("about.values.title")} <span className="text-gradient">{t("about.values.titleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("about.values.subtitle")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => {
                const isPrimary = value.color === "primary";
                return (
                  <div key={value.titleKey} className="group text-center p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 ${isPrimary ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      <value.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{t(value.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'hsl(220 40% 13%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container-custom px-4 relative z-10 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1.2} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("about.cta.title")}
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              {t("about.cta.subtitle")}
            </p>
            <a
              href={`https://wa.me/50765956439?text=${encodeURIComponent(t("about.cta.message"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              {t("about.cta.button")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;

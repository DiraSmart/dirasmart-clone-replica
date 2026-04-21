import { useState, useEffect, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Moon, Zap, Cpu, Lightbulb, Thermometer, Home, Clock, Calendar, Tablet, Monitor } from "lucide-react";
import devicesMockup from "@/assets/devices-mockup.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import appMobileImage from "@/assets/app-mobile-main.webp";
import shabatModeImage from "@/assets/shabat-mode.webp";
import automationsImage from "@/assets/automations-screen.webp";

// Reusable feature card component
const FeatureCard = ({ icon: Icon, title, desc, colorClass }: {icon: typeof Thermometer;title: string;desc: string;colorClass: string;}) => {
  const isPrimary = colorClass === "primary";
  return (
    <div className={`group flex items-start gap-4 p-4 rounded-xl border border-border/50 border-l-[3px] transition-all duration-300 ${isPrimary ? "border-l-primary hover:border-primary/30 hover:bg-primary/5" : "border-l-accent hover:border-accent/30 hover:bg-accent/5"}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${isPrimary ? "bg-primary/10" : "bg-accent/10"}`}>
        <Icon className={`w-5 h-5 ${isPrimary ? "text-primary" : "text-accent"}`} strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-foreground text-sm">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

// Reusable tab content with alternating layout
const TabPanel = ({ badge, badgeColor, title, description, cards, image, imageAlt, imageClass, reversed }: {
  badge: string; badgeColor: "primary" | "accent"; title: string; description: string;
  cards: { icon: typeof Thermometer; title: string; desc: string; colorClass: string }[];
  image: string; imageAlt: string; imageClass?: string; reversed?: boolean;
}) => {
  const textContent = (
    <div className="space-y-6">
      <div>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${badgeColor === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
          {badge}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
      <div className="space-y-3">
        {cards.map((card, i) => (
          <FeatureCard key={i} icon={card.icon} title={card.title} desc={card.desc} colorClass={card.colorClass} />
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className={`absolute -inset-8 bg-gradient-to-r ${badgeColor === "accent" ? "from-accent/10 to-primary/10" : "from-primary/10 to-accent/10"} rounded-full blur-3xl opacity-60`} />
        <img
          src={image}
          alt={imageAlt}
          className={`relative object-contain ${imageClass || "w-auto h-[260px] sm:h-[380px]"}`}
          width={400}
          height={380}
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-border/50 shadow-sm ring-1 ring-primary/5">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {reversed ? (
          <>
            <div className="order-2 lg:order-1">{imageContent}</div>
            <div className="order-1 lg:order-2">{textContent}</div>
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
};

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const tabs = [
    { id: "app", labelKey: "features.tab.app", icon: Smartphone },
    { id: "shabbat", labelKey: "features.tab.shabbat", icon: Moon },
    { id: "automate", labelKey: "features.tab.automate", icon: Zap },
    { id: "dispositivos", labelKey: "features.tab.devices", icon: Cpu },
  ];

  const goToNextTab = useCallback(() => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  }, [activeTab, tabs]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNextTab();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, goToNextTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="features" className="section-padding bg-muted/20 dark:bg-muted/10 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom px-3 sm:px-4 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("features.title")} <span className="text-gradient">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-10 md:mb-14">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative overflow-hidden data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=inactive]:bg-background px-5 sm:px-6 py-3 rounded-full border border-border/50 data-[state=active]:border-foreground data-[state=inactive]:hover:border-primary/30 transition-all duration-300 text-sm font-medium"
              >
                <tab.icon className="w-4 h-4 mr-2" strokeWidth={1.5} />
                {t(tab.labelKey)}
                {activeTab === tab.id && (
                  <span
                    key={`progress-${activeTab}`}
                    className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-primary to-accent rounded-full origin-left"
                    style={{
                      animation: isPaused ? 'none' : 'tab-progress 5s linear forwards',
                      transform: isPaused ? 'scaleX(1)' : undefined,
                    }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* App Tab — image right */}
          <TabsContent value="app" className="animate-fade-in">
            <TabPanel
              badge={t("features.app.badge")}
              badgeColor="primary"
              title={t("features.app.title")}
              description={t("features.app.description")}
              cards={[
                { icon: Thermometer, title: t("features.app.ac"), desc: t("features.app.acDesc"), colorClass: "primary" },
                { icon: Home, title: t("features.app.blinds"), desc: t("features.app.blindsDesc"), colorClass: "accent" },
                { icon: Lightbulb, title: t("features.app.lights"), desc: t("features.app.lightsDesc"), colorClass: "primary" },
              ]}
              image={appMobileImage}
              imageAlt="App de casa inteligente DiraSmart - control de luces, clima y persianas en Panamá"
            />
          </TabsContent>

          {/* Shabbat Tab — image left (reversed) */}
          <TabsContent value="shabbat" className="animate-fade-in">
            <TabPanel
              badge={t("features.shabbat.badge")}
              badgeColor="accent"
              title={t("features.shabbat.title")}
              description={t("features.shabbat.description")}
              cards={[
                { icon: Calendar, title: t("features.shabbat.holidays"), desc: t("features.shabbat.holidaysDesc"), colorClass: "accent" },
                { icon: Clock, title: t("features.shabbat.quick"), desc: t("features.shabbat.quickDesc"), colorClass: "primary" },
                { icon: Moon, title: t("features.shabbat.auto"), desc: t("features.shabbat.autoDesc"), colorClass: "accent" },
              ]}
              image={shabatModeImage}
              imageAlt="Modo Shabbat - automatización inteligente del hogar según calendario hebreo"
              reversed
            />
          </TabsContent>

          {/* Automate Tab — image right */}
          <TabsContent value="automate" className="animate-fade-in">
            <TabPanel
              badge={t("features.automate.badge")}
              badgeColor="primary"
              title={t("features.automate.title")}
              description={t("features.automate.description")}
              cards={[
                { icon: Zap, title: t("features.automate.scenes"), desc: t("features.automate.scenesDesc"), colorClass: "primary" },
                { icon: Clock, title: t("features.automate.schedule"), desc: t("features.automate.scheduleDesc"), colorClass: "accent" },
                { icon: Home, title: t("features.automate.presence"), desc: t("features.automate.presenceDesc"), colorClass: "primary" },
              ]}
              image={automationsImage}
              imageAlt="Automatización del hogar DiraSmart - escenas y programación inteligente"
              imageClass="w-auto h-[260px] sm:h-[380px] rounded-xl"
            />
          </TabsContent>

          {/* Devices Tab — image left (reversed) */}
          <TabsContent value="dispositivos" className="animate-fade-in">
            <TabPanel
              badge={t("features.devices.badge")}
              badgeColor="primary"
              title={t("features.devices.title")}
              description={t("features.devices.description")}
              cards={[
                { icon: Smartphone, title: t("features.devices.phone"), desc: t("features.devices.phoneDesc"), colorClass: "primary" },
                { icon: Tablet, title: t("features.devices.tablet"), desc: t("features.devices.tabletDesc"), colorClass: "accent" },
                { icon: Monitor, title: t("features.devices.pc"), desc: t("features.devices.pcDesc"), colorClass: "primary" },
              ]}
              image={devicesMockup}
              imageAlt="Smart home multiplataforma - control de domótica desde celular, tablet y PC"
              imageClass="w-auto max-h-[260px] sm:max-h-[380px] drop-shadow-2xl"
              reversed
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureTabs;
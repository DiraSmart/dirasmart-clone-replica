import { useState, useEffect, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Moon, Zap, Cpu, Lightbulb, Thermometer, Home, Clock, Calendar, Tablet, Monitor } from "lucide-react";
import devicesMockup from "@/assets/devices-mockup.png";
import { useLanguage } from "@/contexts/LanguageContext";
import appMobileImage from "@/assets/app-mobile-main.webp";
import shabatModeImage from "@/assets/shabat-mode.png";
import automationsImage from "@/assets/automations-screen.jpg";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const tabs = [
  { id: "app", labelKey: "features.tab.app", icon: Smartphone },
  { id: "shabbat", labelKey: "features.tab.shabbat", icon: Moon },
  { id: "automate", labelKey: "features.tab.automate", icon: Zap },
  { id: "dispositivos", labelKey: "features.tab.devices", icon: Cpu }];


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
            {tabs.map((tab) =>
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="relative overflow-hidden data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=inactive]:bg-background px-4 sm:px-5 py-2.5 rounded-full border border-border/50 data-[state=active]:border-foreground data-[state=inactive]:hover:border-primary/30 transition-all duration-300 text-xs sm:text-sm font-medium">

                <tab.icon className="w-4 h-4 mr-2" strokeWidth={1.5} />
                {t(tab.labelKey)}
                {activeTab === tab.id && (
                  <span
                    key={`progress-${activeTab}`}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-accent rounded-full origin-left"
                    style={{
                      animation: isPaused ? 'none' : 'tab-progress 5s linear forwards',
                      transform: isPaused ? 'scaleX(1)' : undefined,
                    }}
                  />
                )}
              </TabsTrigger>
            )}
          </TabsList>

          {/* App Tab */}
          <TabsContent value="app" className="animate-fade-in">
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-border/50 shadow-sm ring-1 ring-primary/5">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {t("features.app.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {t("features.app.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("features.app.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <FeatureCard icon={Thermometer} title={t("features.app.ac")} desc={t("features.app.acDesc")} colorClass="primary" />
                    <FeatureCard icon={Home} title={t("features.app.blinds")} desc={t("features.app.blindsDesc")} colorClass="accent" />
                    <FeatureCard icon={Lightbulb} title={t("features.app.lights")} desc={t("features.app.lightsDesc")} colorClass="primary" />
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-60" />
                    <img
                      src={appMobileImage}
                      alt="DiraSmart mobile app showing smart home controls"
                      className="relative w-auto h-[320px] sm:h-[380px] object-contain"
                      width={300}
                      height={380}
                      loading="lazy" />

                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Shabbat Tab */}
          <TabsContent value="shabbat" className="animate-fade-in">
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-border/50 shadow-sm ring-1 ring-primary/5">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                      {t("features.shabbat.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {t("features.shabbat.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("features.shabbat.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <FeatureCard icon={Calendar} title={t("features.shabbat.holidays")} desc={t("features.shabbat.holidaysDesc")} colorClass="accent" />
                    <FeatureCard icon={Clock} title={t("features.shabbat.quick")} desc={t("features.shabbat.quickDesc")} colorClass="accent" />
                    <FeatureCard icon={Moon} title={t("features.shabbat.auto")} desc={t("features.shabbat.autoDesc")} colorClass="accent" />
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl opacity-60" />
                    <img
                      src={shabatModeImage}
                      alt="DiraSmart Shabbat mode configuration screen"
                      className="relative w-auto h-[320px] sm:h-[380px] object-contain"
                      width={300}
                      height={380}
                      loading="lazy" />

                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Automate Tab */}
          <TabsContent value="automate" className="animate-fade-in">
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-border/50 shadow-sm ring-1 ring-primary/5">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {t("features.automate.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {t("features.automate.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("features.automate.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <FeatureCard icon={Zap} title={t("features.automate.scenes")} desc={t("features.automate.scenesDesc")} colorClass="primary" />
                    <FeatureCard icon={Clock} title={t("features.automate.schedule")} desc={t("features.automate.scheduleDesc")} colorClass="accent" />
                    <FeatureCard icon={Home} title={t("features.automate.presence")} desc={t("features.automate.presenceDesc")} colorClass="primary" />
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-60" />
                    <img
                      src={automationsImage}
                      alt="DiraSmart automation rules and scenes configuration"
                      className="relative w-auto h-[320px] sm:h-[380px] object-contain rounded-xl"
                      width={400}
                      height={380}
                      loading="lazy" />

                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="dispositivos" className="animate-fade-in">
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-border/50 shadow-sm ring-1 ring-primary/5">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {t("features.devices.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {t("features.devices.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("features.devices.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <FeatureCard icon={Smartphone} title={t("features.devices.phone")} desc={t("features.devices.phoneDesc")} colorClass="primary" />
                    <FeatureCard icon={Tablet} title={t("features.devices.tablet")} desc={t("features.devices.tabletDesc")} colorClass="accent" />
                    <FeatureCard icon={Monitor} title={t("features.devices.pc")} desc={t("features.devices.pcDesc")} colorClass="primary" />
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-40" />
                    <img
                      src={devicesMockup}
                      alt="DiraSmart compatible with phone, tablet and desktop"
                      className="relative w-auto max-h-[320px] sm:max-h-[380px] object-contain drop-shadow-2xl"
                      width={500}
                      height={380}
                      loading="lazy" />

                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>);

};

export default FeatureTabs;
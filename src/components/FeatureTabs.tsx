import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Moon, Zap, Cpu, Lightbulb, Thermometer, Home, Clock, ChevronRight, Calendar, Tablet, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import appMobileImage from "@/assets/app-mobile-main.webp";
import shabatModeImage from "@/assets/shabat-mode.png";
import automationsImage from "@/assets/automations-screen.jpg";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("app");
  const { t } = useLanguage();

  const tabs = [
    { id: "app", labelKey: "features.tab.app", icon: Smartphone },
    { id: "automate", labelKey: "features.tab.automate", icon: Zap },
    { id: "shabbat", labelKey: "features.tab.shabbat", icon: Moon },
    { id: "dispositivos", labelKey: "features.tab.devices", icon: Cpu },
  ];

  return (
    <section id="features" className="section-padding bg-muted/40 dark:bg-muted/20">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t("features.title")} <span className="text-gradient">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {t("features.subtitle")}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 bg-transparent h-auto mb-8 md:mb-12">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-border data-[state=inactive]:bg-card data-[state=inactive]:hover:border-primary/50 transition-all text-xs sm:text-sm"
              >
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {t(tab.labelKey)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="app" className="animate-fade-in">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-border shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      {t("features.app.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                      {t("features.app.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {t("features.app.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.app.ac")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.app.acDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Home className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.app.blinds")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.app.blindsDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.app.lights")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.app.lightsDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                    <img 
                      src={appMobileImage} 
                      alt="App DiraSmart" 
                      className="relative w-auto h-[350px] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shabbat" className="animate-fade-in">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-border shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      {t("features.shabbat.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                      {t("features.shabbat.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {t("features.shabbat.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.shabbat.holidays")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.shabbat.holidaysDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.shabbat.quick")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.shabbat.quickDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.shabbat.auto")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.shabbat.autoDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl" />
                    <img 
                      src={shabatModeImage} 
                      alt="Modo Shabbat" 
                      className="relative w-auto h-[350px] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="automate" className="animate-fade-in">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-border shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      {t("features.automate.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                      {t("features.automate.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {t("features.automate.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.automate.scenes")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.automate.scenesDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.automate.schedule")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.automate.scheduleDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Home className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.automate.presence")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.automate.presenceDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                    <img 
                      src={automationsImage} 
                      alt="Automatizaciones" 
                      className="relative w-auto h-[350px] object-contain drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dispositivos" className="animate-fade-in">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-border shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      {t("features.devices.badge")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                      {t("features.devices.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {t("features.devices.description")}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.devices.phone")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.devices.phoneDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Tablet className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.devices.tablet")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.devices.tabletDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                        <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("features.devices.pc")}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t("features.devices.pcDesc")}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl" />
                    <div className="relative grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center border border-primary/20">
                        <Smartphone className="w-16 h-16 text-primary" />
                      </div>
                      <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 flex items-center justify-center border border-accent/20">
                        <Tablet className="w-16 h-16 text-accent" />
                      </div>
                      <div className="col-span-2 bg-gradient-to-br from-primary/20 to-accent/5 rounded-2xl p-8 flex items-center justify-center border border-primary/20">
                        <Monitor className="w-20 h-20 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureTabs;

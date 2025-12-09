import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Moon, Zap, Cpu, Lightbulb, Thermometer, Home, Clock, ChevronRight, Calendar, Tablet, Monitor } from "lucide-react";
import appMobileImage from "@/assets/app-mobile-main.webp";
import shabatModeImage from "@/assets/shabat-mode.png";
import automationsImage from "@/assets/automations-screen.jpg";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    { id: "app", label: "App", icon: Smartphone },
    { id: "automate", label: "Automatiza Tu Vida", icon: Zap },
    { id: "shabbat", label: "Shabbat Mode", icon: Moon },
    { id: "dispositivos", label: "Dispositivos", icon: Cpu },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas en <span className="text-gradient">una app</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre las funcionalidades que hacen de DiraSmart la mejor opción para tu hogar inteligente
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-3 bg-transparent h-auto mb-12">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg px-6 py-3 rounded-full border-2 border-border data-[state=inactive]:bg-card data-[state=inactive]:hover:border-primary/50 transition-all"
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="app" className="animate-fade-in">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl min-h-[500px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      Control Total
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Casa Inteligente
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Controla todos los aspectos de tu hogar desde una única aplicación intuitiva y fácil de usar.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Thermometer className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Aire Acondicionado</p>
                        <p className="text-sm text-muted-foreground">Controla la temperatura de cada habitación</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Home className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Persianas Motorizadas</p>
                        <p className="text-sm text-muted-foreground">Programa horarios o controla manualmente</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Iluminación Inteligente</p>
                        <p className="text-sm text-muted-foreground">Ajusta intensidad y color en cada zona</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                    <img 
                      src={appMobileImage} 
                      alt="App DiraSmart" 
                      className="relative w-full max-w-sm drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shabbat" className="animate-fade-in">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl min-h-[500px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                      Calendario Judío
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Modo Shabbat
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Sistema inteligente que se adapta al calendario judío, configurando automáticamente los días importantes con solo un par de clicks.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Reconoce Jaguim</p>
                        <p className="text-sm text-muted-foreground">Detecta festividades incluso en días de semana</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Configuración Rápida</p>
                        <p className="text-sm text-muted-foreground">Todo automático con solo un par de clicks</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Moon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Modo Automático</p>
                        <p className="text-sm text-muted-foreground">Tu hogar se prepara solo para cada ocasión</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl" />
                    <img 
                      src={shabatModeImage} 
                      alt="Modo Shabbat" 
                      className="relative w-48 md:w-56 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="automate" className="animate-fade-in">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl min-h-[500px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      Automatización
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Automatiza Tu Vida
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Crea escenas y rutinas personalizadas que se adaptan a tu estilo de vida.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Escenas Personalizadas</p>
                        <p className="text-sm text-muted-foreground">"Buenos días", "Cine en casa", "Hora de dormir"</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Programación Horaria</p>
                        <p className="text-sm text-muted-foreground">Automatiza según tu rutina diaria</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Home className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Detección de Presencia</p>
                        <p className="text-sm text-muted-foreground">Activa escenas al llegar o salir de casa</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                    <img 
                      src={automationsImage} 
                      alt="Automatizaciones" 
                      className="relative w-48 md:w-56 drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dispositivos" className="animate-fade-in">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl min-h-[500px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                      Multiplataforma
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Todos Tus Dispositivos
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Accede a tu hogar inteligente desde cualquier dispositivo: celular, tablet, PC y más.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Smartphone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Celular</p>
                        <p className="text-sm text-muted-foreground">App nativa para iOS y Android</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Tablet className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">Tablet</p>
                        <p className="text-sm text-muted-foreground">Interfaz optimizada para pantallas grandes</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Monitor className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">PC y Web</p>
                        <p className="text-sm text-muted-foreground">Accede desde cualquier navegador</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
                    <div className="relative bg-gradient-to-br from-card to-muted rounded-3xl p-8 border border-accent/20 shadow-2xl">
                      <p className="text-center text-lg font-semibold text-foreground mb-6">Disponible en</p>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-xl border border-border">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground">Celular</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-xl border border-border">
                          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
                            <Tablet className="w-8 h-8 text-accent-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground">Tablet</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-xl border border-border">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                            <Monitor className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground">PC</span>
                        </div>
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
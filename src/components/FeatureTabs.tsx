import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Moon, Zap, Cpu, Lightbulb, Thermometer, Home, Clock } from "lucide-react";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    { id: "app", label: "App", icon: Smartphone },
    { id: "shabbat", label: "Shabbat Mode", icon: Moon },
    { id: "automate", label: "Automatiza Tu Vida", icon: Zap },
    { id: "dispositivos", label: "Dispositivos", icon: Cpu },
  ];

  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Todo lo que necesitas en <span className="text-primary">una app</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre las funcionalidades que hacen de DiraSmart la mejor opción para tu hogar inteligente
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-full border border-border data-[state=inactive]:bg-card"
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="app" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  Casa Inteligente
                </h3>
                <p className="text-muted-foreground text-lg">
                  Controla todos los aspectos de tu hogar desde una única aplicación intuitiva y fácil de usar.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Thermometer className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Aire Acondicionado</p>
                      <p className="text-sm text-muted-foreground">Controla la temperatura de cada habitación</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Persianas Motorizadas</p>
                      <p className="text-sm text-muted-foreground">Programa horarios o controla manualmente</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Iluminación Inteligente</p>
                      <p className="text-sm text-muted-foreground">Ajusta intensidad y color en cada zona</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-[500px] bg-secondary rounded-[2.5rem] p-2 shadow-xl">
                  <div className="w-full h-full bg-background rounded-[2rem] flex items-center justify-center">
                    <div className="text-center p-6">
                      <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold">App DiraSmart</p>
                      <p className="text-sm text-muted-foreground">Disponible para iOS y Android</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shabbat" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  Modo Shabbat
                </h3>
                <p className="text-muted-foreground text-lg">
                  Programa automáticamente tu hogar para Shabbat y festividades judías sin preocupaciones.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Programación Automática</p>
                      <p className="text-sm text-muted-foreground">Se activa automáticamente según el calendario</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Control de Luces</p>
                      <p className="text-sm text-muted-foreground">Enciende y apaga luces en horarios predefinidos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Moon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Modo Nocturno</p>
                      <p className="text-sm text-muted-foreground">Transición suave a iluminación tenue</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-card rounded-3xl p-8 shadow-lg">
                  <Moon className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-center text-lg font-semibold">Shabbat Mode</p>
                  <p className="text-center text-sm text-muted-foreground mt-2">Tranquilidad total en días festivos</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="automate" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  Automatiza Tu Vida
                </h3>
                <p className="text-muted-foreground text-lg">
                  Crea escenas y rutinas personalizadas que se adaptan a tu estilo de vida.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Escenas Personalizadas</p>
                      <p className="text-sm text-muted-foreground">"Buenos días", "Cine en casa", "Hora de dormir"</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Programación Horaria</p>
                      <p className="text-sm text-muted-foreground">Automatiza según tu rutina diaria</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Detección de Presencia</p>
                      <p className="text-sm text-muted-foreground">Activa escenas al llegar o salir de casa</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-card rounded-3xl p-8 shadow-lg">
                  <Zap className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-center text-lg font-semibold">Automatización Total</p>
                  <p className="text-center text-sm text-muted-foreground mt-2">Tu hogar aprende de ti</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dispositivos" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  Dispositivos Compatibles
                </h3>
                <p className="text-muted-foreground text-lg">
                  Integra una amplia gama de dispositivos inteligentes de las mejores marcas del mercado.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Cpu className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Múltiples Protocolos</p>
                      <p className="text-sm text-muted-foreground">WiFi, Zigbee, Z-Wave, Bluetooth</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Marcas Líderes</p>
                      <p className="text-sm text-muted-foreground">Philips Hue, Sonos, Nest, y más</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Fácil Integración</p>
                      <p className="text-sm text-muted-foreground">Añade nuevos dispositivos en segundos</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-card rounded-3xl p-8 shadow-lg">
                  <Cpu className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-center text-lg font-semibold">+100 Dispositivos</p>
                  <p className="text-center text-sm text-muted-foreground mt-2">Compatibles con DiraSmart</p>
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
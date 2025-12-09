import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, Lightbulb, Thermometer } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Controla tu hogar{" "}
              <span className="text-gradient">desde un app</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Transforma tu casa en un hogar inteligente. Controla luces,
              climatización, persianas y más desde tu smartphone, en cualquier
              momento y lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg px-8 py-6"
              >
                Contáctanos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
                onClick={() => {
                  const element = document.querySelector("#features");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Saber más
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={500} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground">Hogares conectados</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Soporte técnico</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={100} suffix="%" />
                </p>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 md:w-80 h-[580px] md:h-[640px] bg-secondary rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="p-6 space-y-4">
                    <div className="text-center pt-4">
                      <h3 className="text-lg font-semibold text-secondary">Casa Inteligente</h3>
                      <p className="text-sm text-muted-foreground">Bienvenido de vuelta</p>
                    </div>

                    {/* Room Cards */}
                    <div className="space-y-3 pt-4">
                      <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">Sala de estar</p>
                            <p className="text-xs text-muted-foreground">3 luces encendidas</p>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-accent rounded-full" />
                      </div>

                      <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <Thermometer className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">Climatización</p>
                            <p className="text-xs text-muted-foreground">23°C - Activo</p>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-accent rounded-full" />
                      </div>

                      <div className="bg-muted rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                            <Wifi className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">Persianas</p>
                            <p className="text-xs text-muted-foreground">Abiertas al 75%</p>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-muted-foreground/30 rounded-full" />
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-4">
                      <p className="text-sm font-medium mb-3">Acciones rápidas</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-accent/10 rounded-xl p-3 text-center">
                          <Lightbulb className="w-6 h-6 text-accent mx-auto" />
                          <p className="text-xs mt-1">Luces</p>
                        </div>
                        <div className="bg-primary/10 rounded-xl p-3 text-center">
                          <Thermometer className="w-6 h-6 text-primary mx-auto" />
                          <p className="text-xs mt-1">Clima</p>
                        </div>
                        <div className="bg-accent/10 rounded-xl p-3 text-center">
                          <Wifi className="w-6 h-6 text-accent mx-auto" />
                          <p className="text-xs mt-1">Escenas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 top-20 bg-card shadow-lg rounded-2xl p-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Control remoto</p>
                    <p className="text-xs text-muted-foreground">Desde cualquier lugar</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-32 bg-card shadow-lg rounded-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">WiFi conectado</p>
                    <p className="text-xs text-muted-foreground">100% seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

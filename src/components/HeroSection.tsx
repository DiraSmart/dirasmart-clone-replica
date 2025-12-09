import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import AnimatedCounter from "./AnimatedCounter";
import appMobileImage from "@/assets/app-mobile.png";

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

          {/* Right Content - App Image */}
          <div className="relative flex justify-center animate-fade-in-right">
            <img 
              src={appMobileImage} 
              alt="DiraSmart App" 
              className="w-72 md:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

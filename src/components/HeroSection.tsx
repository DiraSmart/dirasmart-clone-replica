import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import appMobileImage from "@/assets/app-mobile.png";
import appMobileImage2 from "@/assets/app-mobile-2.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [appMobileImage, appMobileImage2];
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg px-8 py-6"
              >
                {t("hero.cta")}
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
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={500} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground">{t("hero.stat.homes")}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat.support")}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={100} suffix="%" />
                </p>
                <p className="text-sm text-muted-foreground">{t("hero.stat.satisfaction")}</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Image */}
          <div className="relative flex justify-center animate-fade-in-right">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt="DiraSmart App" 
                className={`w-72 md:w-96 drop-shadow-2xl absolute transition-opacity duration-700 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ position: index === 0 ? 'relative' : 'absolute' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

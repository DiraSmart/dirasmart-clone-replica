import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Pause, Play } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import appMobileImage2 from "@/assets/app-mobile-2.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const images = ["/app-mobile.png", appMobileImage2];
  const { t } = useLanguage();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const scrollToDemo = () => {
    const element = document.querySelector("#demo");
    if (element) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 md:pt-20 relative overflow-hidden"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <a
                  href={`https://wa.me/50765956439?text=${encodeURIComponent(t("hero.cta.message"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t("hero.cta")}
                </a>
              </Button>
              <Button
                onClick={scrollToDemo}
                variant="outline"
                size="lg"
                className="border-primary bg-white/90 dark:bg-background text-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{t("hero.stat1.value")}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat1.label")}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">{t("hero.stat2.value")}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat2.label")}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{t("hero.stat3.value")}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat3.label")}</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Image */}
          <div className="relative flex justify-center motion-safe:animate-fade-in-right order-first lg:order-last">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={index === 0 ? "App de casa inteligente DiraSmart - control de domótica en Panamá" : "Automatización del hogar DiraSmart - smart home app Panamá"}
                width={384}
                height={680}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className={`w-48 sm:w-64 md:w-80 lg:w-96 drop-shadow-2xl absolute motion-safe:transition-opacity motion-safe:duration-700 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ position: index === 0 ? 'relative' : 'absolute' }}
              />
            ))}
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? t("a11y.resumeAutoplay") : t("a11y.pauseAutoplay")}
              className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-background/70 backdrop-blur border border-border/40 text-foreground/70 hover:text-foreground hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-safe:transition-colors"
            >
              {isPaused ? <Play aria-hidden="true" className="w-3.5 h-3.5" /> : <Pause aria-hidden="true" className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

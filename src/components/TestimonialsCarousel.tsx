import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const testimonials = {
    es: [
      {
        name: "María González",
        roleKey: "testimonials.role.owner",
        text: "DiraSmart transformó completamente mi hogar. Ahora puedo controlar todo desde mi teléfono y la automatización del Shabbat funciona perfectamente.",
        rating: 5,
        initial: "M",
      },
      {
        name: "David Cohen",
        roleKey: "testimonials.role.business",
        text: "La instalación fue impecable y el soporte técnico es excelente. Recomiendo DiraSmart a todos mis conocidos.",
        rating: 5,
        initial: "D",
      },
      {
        name: "Ana Rodríguez",
        roleKey: "testimonials.role.architect",
        text: "Como profesional del diseño, valoro mucho la integración elegante de DiraSmart con cualquier estilo de hogar. Es simplemente perfecto.",
        rating: 5,
        initial: "A",
      },
      {
        name: "Carlos Martínez",
        roleKey: "testimonials.role.engineer",
        text: "La compatibilidad con múltiples dispositivos y protocolos me convenció. Ahora todo mi hogar está conectado de forma inteligente.",
        rating: 5,
        initial: "C",
      },
      {
        name: "Laura Fernández",
        roleKey: "testimonials.role.doctor",
        text: "Con mis horarios complicados, poder controlar mi casa desde cualquier lugar es invaluable. DiraSmart me da tranquilidad.",
        rating: 5,
        initial: "L",
      },
    ],
    en: [
      {
        name: "María González",
        roleKey: "testimonials.role.owner",
        text: "DiraSmart completely transformed my home. Now I can control everything from my phone and the Shabbat automation works perfectly.",
        rating: 5,
        initial: "M",
      },
      {
        name: "David Cohen",
        roleKey: "testimonials.role.business",
        text: "The installation was flawless and the technical support is excellent. I recommend DiraSmart to everyone I know.",
        rating: 5,
        initial: "D",
      },
      {
        name: "Ana Rodríguez",
        roleKey: "testimonials.role.architect",
        text: "As a design professional, I highly value DiraSmart's elegant integration with any home style. It's simply perfect.",
        rating: 5,
        initial: "A",
      },
      {
        name: "Carlos Martínez",
        roleKey: "testimonials.role.engineer",
        text: "The compatibility with multiple devices and protocols convinced me. Now my entire home is smartly connected.",
        rating: 5,
        initial: "C",
      },
      {
        name: "Laura Fernández",
        roleKey: "testimonials.role.doctor",
        text: "With my complicated schedule, being able to control my house from anywhere is invaluable. DiraSmart gives me peace of mind.",
        rating: 5,
        initial: "L",
      },
    ],
  };

  const currentTestimonials = testimonials[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
  };

  const current = currentTestimonials[currentIndex];

  return (
    <section id="testimonios" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t("testimonials.title")}{" "}
            <span className="text-gradient">{t("testimonials.titleHighlight")}</span>?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div className="relative bg-muted/20 border border-border/60 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Large decorative number */}
            <div className="absolute top-6 right-8 text-[120px] font-black text-foreground/5 leading-none select-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium relative z-10 max-w-2xl">
              "{current.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md shrink-0">
                <span className="text-base font-bold text-white">{current.initial}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{t(current.roleKey)}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-primary to-accent w-6"
                      : "bg-muted-foreground/20 hover:bg-muted-foreground/40 w-1.5"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

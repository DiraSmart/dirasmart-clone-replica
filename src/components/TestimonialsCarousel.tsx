import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Propietaria",
      text: "DiraSmart transformó completamente mi hogar. Ahora puedo controlar todo desde mi teléfono y la automatización del Shabbat funciona perfectamente.",
      rating: 5,
    },
    {
      name: "David Cohen",
      role: "Empresario",
      text: "La instalación fue impecable y el soporte técnico es excelente. Recomiendo DiraSmart a todos mis conocidos.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      role: "Arquitecta",
      text: "Como profesional del diseño, valoro mucho la integración elegante de DiraSmart con cualquier estilo de hogar. Es simplemente perfecto.",
      rating: 5,
    },
    {
      name: "Carlos Martínez",
      role: "Ingeniero",
      text: "La compatibilidad con múltiples dispositivos y protocolos me convenció. Ahora todo mi hogar está conectado de forma inteligente.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      role: "Médica",
      text: "Con mis horarios complicados, poder controlar mi casa desde cualquier lugar es invaluable. DiraSmart me da tranquilidad.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Qué dicen nuestros <span className="text-gradient">clientes</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Opiniones reales de hogares transformados con tecnología inteligente
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <Quote className="w-16 h-16 md:w-20 md:h-20 text-primary/10" />
              </div>
              
              <div className="relative z-10">

                {/* Quote text */}
                <blockquote className="text-lg md:text-2xl text-foreground mb-8 leading-relaxed font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full w-12 h-12 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-gradient-to-r from-primary to-accent w-8" 
                      : "bg-muted hover:bg-muted-foreground/30 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full w-12 h-12 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
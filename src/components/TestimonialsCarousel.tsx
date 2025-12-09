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
    },
    {
      name: "David Cohen",
      role: "Empresario",
      text: "La instalación fue impecable y el soporte técnico es excelente. Recomiendo DiraSmart a todos mis conocidos.",
    },
    {
      name: "Ana Rodríguez",
      role: "Arquitecta",
      text: "Como profesional del diseño, valoro mucho la integración elegante de DiraSmart con cualquier estilo de hogar. Es simplemente perfecto.",
    },
    {
      name: "Carlos Martínez",
      role: "Ingeniero",
      text: "La compatibilidad con múltiples dispositivos y protocolos me convenció. Ahora todo mi hogar está conectado de forma inteligente.",
    },
    {
      name: "Laura Fernández",
      role: "Médica",
      text: "Con mis horarios complicados, poder controlar mi casa desde cualquier lugar es invaluable. DiraSmart me da tranquilidad.",
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
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            ¿Qué dicen nuestros <span className="text-accent">clientes</span>?
          </h2>
          <p className="text-muted-foreground">
            Opiniones reales de hogares transformados
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-foreground">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-secondary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
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
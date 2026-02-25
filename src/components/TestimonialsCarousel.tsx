import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import saraImg from "@/assets/testimonials/sara.png";
import josephImg from "@/assets/testimonials/joseph.png";
import estherImg from "@/assets/testimonials/esther.jpg";
import samyImg from "@/assets/testimonials/samy.jpg";
import jacoboImg from "@/assets/testimonials/jacobo.jpg";
import eliasImg from "@/assets/testimonials/elias.png";
import jonathanImg from "@/assets/testimonials/jonathan.png";
import samiImg from "@/assets/testimonials/sami.png";
import rafaelImg from "@/assets/testimonials/rafael.png";
import morrisImg from "@/assets/testimonials/morris.jpg";
import simonImg from "@/assets/testimonials/simon.jpg";
import mendyImg from "@/assets/testimonials/mendy.png";
import tiborImg from "@/assets/testimonials/tibor.png";
import joeImg from "@/assets/testimonials/joe.png";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { t, language } = useLanguage();

  const testimonials = {
    es: [
    {
      name: "Sara Tesone",
      role: "Cliente DiraSmart",
      text: "Instalamos el sistema DiraSmart y nos da la tranquilidad de poder controlar todo según la Halajá, además del ahorro significativo en nuestra cuenta mensual de energía. Recomiendo al 100% este proyecto. Además nos dieron seguimiento y ayuda cuando necesitamos, ¡así sea minutos antes de Shabat!",
      rating: 5,
      initial: "S",
      image: saraImg
    },
    {
      name: "Sami Dornbusch",
      role: "Cliente DiraSmart",
      text: "Muy dedicado. Muy personalizado. Recomendado.",
      rating: 5,
      initial: "S",
      image: samiImg
    },
    {
      name: "Joseph Homsany",
      role: "Cliente DiraSmart",
      text: "Quiero dejar constancia del trabajo profesional que se ha realizado en mis residencias creando un ambiente perfecto de Shabat. Quiero recomendarlo por su dinamismo, resolución y constancia.",
      rating: 5,
      initial: "J",
      image: josephImg
    },
    {
      name: "Esther Kamhaji",
      role: "Cliente DiraSmart",
      text: "Excelente sistema. Excelente atención. Excelente proceso de instalación. Tener control de la casa desde tu mano, donde sea que estés, es un sueño hecho realidad. Gracias DiraSmart. Lo recomiendo con los ojos cerrados.",
      rating: 5,
      initial: "E",
      image: estherImg
    },
    {
      name: "Samy Poliwoda",
      role: "Cliente DiraSmart",
      text: "Me ha cambiado la forma de manejar mi oficina de trabajo. Siento el control desde mi celular en una sola app: video seguridad, registro entrada y salida, encendido y apagado de aires e iluminación, manejo de la música del lugar. ¡Increíble! Y la atención es super.",
      rating: 5,
      initial: "S",
      image: samyImg
    },
    {
      name: "Jacobo Kolangui",
      role: "Cliente DiraSmart",
      text: "El sistema smarthome de DiraSmart funciona increíblemente bien. Todo está perfectamente integrado y funciona de maravilla. Además, su atención al cliente es de 10, siempre están ahí para ayudar en todo momento. ¡Totalmente recomendados!",
      rating: 5,
      initial: "J",
      image: jacoboImg
    },
    {
      name: "Elias Eskenazi",
      role: "Cliente DiraSmart",
      text: "Excelente el sistema y el servicio al cliente. Estaba indeciso si montar un sistema smart para mi casa pero con la ayuda de DiraSmart no lo pensé dos veces. Si algo no sale al principio, buscan la forma de resolver hasta que salga. Recomendado al 100%.",
      rating: 5,
      initial: "E",
      image: eliasImg
    },
    {
      name: "Jonathan Tache",
      role: "Cliente DiraSmart",
      text: "Excelentes productos pero sobre todo excelente atención al cliente. Siempre encima de todo y tratando que sea la mejor experiencia para el cliente. ¡Super recomendado!",
      rating: 5,
      initial: "J",
      image: jonathanImg
    },
    {
      name: "Rafael Yedid",
      role: "Cliente DiraSmart",
      text: "La solución a mis shabat y fiestas.",
      rating: 5,
      initial: "R",
      image: rafaelImg
    },
    {
      name: "Morris Dornbusch",
      role: "Cliente DiraSmart",
      text: "Excelente servicio y sistema de control. Altamente recomendado.",
      rating: 5,
      initial: "M",
      image: morrisImg
    },
    {
      name: "Simon Tache",
      role: "Cliente DiraSmart",
      text: "Excelente servicio y producto. Super recomendado.",
      rating: 5,
      initial: "S",
      image: simonImg
    },
    {
      name: "Rabino Mendy Karniel",
      role: "Cliente DiraSmart",
      text: "Mejor experiencia.",
      rating: 5,
      initial: "M",
      image: mendyImg
    },
    {
      name: "Tibor Silber",
      role: "Cliente DiraSmart",
      text: "Increíble la gente. Increíble el servicio al cliente. No hay error al elegir DiraSmart.",
      rating: 5,
      initial: "T",
      image: tiborImg
    },
    {
      name: "Joe Abadi",
      role: "Cliente DiraSmart",
      text: "Muy muyyyyy bueno el sistema, estoy muy contento, todo es inmediato, se puede controlar desde donde uno quiera y se puede controlar todo.",
      rating: 5,
      initial: "J",
      image: joeImg
    }],

    en: [
    {
      name: "Sara Tesone",
      role: "DiraSmart Client",
      text: "We installed the DiraSmart system and it gives us peace of mind to control everything according to Halacha, plus significant savings on our monthly energy bill. They always follow up and help whenever we need it, even minutes before Shabbat! I 100% recommend this project.",
      rating: 5,
      initial: "S",
      image: saraImg
    },
    {
      name: "Sami Dornbusch",
      role: "DiraSmart Client",
      text: "Very dedicated. Very personalized. Recommended.",
      rating: 5,
      initial: "S",
      image: samiImg
    },
    {
      name: "Joseph Homsany",
      role: "DiraSmart Client",
      text: "I want to put on record the professional work that has been done in my residences, creating a perfect Shabbat environment. I recommend them for their dynamism, resolution and perseverance.",
      rating: 5,
      initial: "J",
      image: josephImg
    },
    {
      name: "Esther Kamhaji",
      role: "DiraSmart Client",
      text: "Excellent system. Excellent service. Excellent installation process. Having control of the house from your hand, wherever you are, is a dream come true. Thank you DiraSmart!",
      rating: 5,
      initial: "E",
      image: estherImg
    },
    {
      name: "Samy Poliwoda",
      role: "DiraSmart Client",
      text: "It has completely changed the way I manage my office. I have full control from my phone in a single app: video security, entry and exit logs, AC and lighting, music — everything. Incredible! And the customer support is outstanding.",
      rating: 5,
      initial: "S",
      image: samyImg
    },
    {
      name: "Jacobo Kolangui",
      role: "DiraSmart Client",
      text: "DiraSmart's smarthome system works incredibly well. Everything is perfectly integrated. Their customer service is top-notch, always there to help at any time. Totally recommended!",
      rating: 5,
      initial: "J",
      image: jacoboImg
    },
    {
      name: "Elias Eskenazi",
      role: "DiraSmart Client",
      text: "Excellent system and customer service. I was hesitant about setting up a smart home, but with DiraSmart's help I didn't think twice. If something doesn't work at first, they find a way to solve it. 100% recommended.",
      rating: 5,
      initial: "E",
      image: eliasImg
    },
    {
      name: "Jonathan Tache",
      role: "DiraSmart Client",
      text: "Excellent products but above all excellent customer service. Always on top of everything and making sure it's the best experience for the client! Super recommended!",
      rating: 5,
      initial: "J",
      image: jonathanImg
    },
    {
      name: "Rafael Yedid",
      role: "DiraSmart Client",
      text: "The solution for my Shabbat and holidays.",
      rating: 5,
      initial: "R",
      image: rafaelImg
    },
    {
      name: "Morris Dornbusch",
      role: "DiraSmart Client",
      text: "Excellent service and control system. Highly recommended.",
      rating: 5,
      initial: "M",
      image: morrisImg
    },
    {
      name: "Simon Tache",
      role: "DiraSmart Client",
      text: "Excellent service and product. Super recommended.",
      rating: 5,
      initial: "S",
      image: simonImg
    },
    {
      name: "Rabino Mendy Karniel",
      role: "DiraSmart Client",
      text: "Best experience.",
      rating: 5,
      initial: "M",
      image: mendyImg
    },
    {
      name: "Tibor Silber",
      role: "DiraSmart Client",
      text: "Amazing people. Amazing customer service. You can't go wrong choosing DiraSmart.",
      rating: 5,
      initial: "T",
      image: tiborImg
    },
    {
      name: "Joe Abadi",
      role: "DiraSmart Client",
      text: "The system is truly amazing. I'm very happy — everything responds instantly, you can control it from anywhere, and it covers absolutely everything.",
      rating: 5,
      initial: "J",
      image: joeImg
    }]

  };

  const currentTestimonials = testimonials[language];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonials.length, isPaused]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  }, [currentTestimonials.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
  }, [currentTestimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
  };

  const current = currentTestimonials[currentIndex];

  return (
    <section id="testimonios" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14 md:mb-20">
          


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
          <div
            className="relative bg-muted/20 border border-border/60 rounded-3xl p-8 md:p-12 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Large decorative number */}
            <div className="absolute top-6 right-8 text-[120px] font-black text-foreground/5 leading-none select-none" aria-hidden="true">
              "
            </div>


            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium relative z-10 max-w-2xl">
              "{current.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              {current.image ? (
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover shadow-md shrink-0"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md shrink-0">
                  <span className="text-base font-bold text-white">{current.initial}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">

              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {currentTestimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ?
                "bg-gradient-to-r from-primary to-accent w-6" :
                "bg-muted-foreground/20 hover:bg-muted-foreground/40 w-1.5"}`
                }
                aria-label={`Testimonial ${index + 1}`} />

              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">

              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsCarousel;
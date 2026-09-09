/**
 * Client testimonials (Google reviews). Single source for the homepage carousel,
 * the /reviews page, the Review structured data and the markdown served to AI agents.
 * Images live in testimonialImages.ts so this file stays importable from the worker.
 */
export interface Testimonial {
  key: string;
  name: string;
  role: { es: string; en: string };
  text: { es: string; en: string };
  rating: number;
  initial: string;
  /** "google" = published on the Google Business Profile; "direct" = sent to us directly. */
  source: "google" | "direct";
}

export const GOOGLE_RATING = { value: 5.0, count: 11 };

export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=3392890501746819804";

export const TESTIMONIALS: Testimonial[] = [
  {
    key: "josephCherem",
    name: "Joseph Cherem",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: {
      es: "Servicio extraordinario, profesional y de alto nivel. El app y los switches se ven finos, y valor a precio no tienen competencia.",
      en: "Extraordinary, professional, high-level service. The app and the switches look refined, and the value for money is unmatched.",
    },
    rating: 5,
    initial: "J",
    source: "google",
  },
  {
    key: "saraImg",
    name: "Sara Tesone",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Instalamos el sistema DiraSmart y nos da la tranquilidad de poder controlar todo según la Halajá, además del ahorro significativo en nuestra cuenta mensual de energía. Recomiendo al 100% este proyecto. Además nos dieron seguimiento y ayuda cuando necesitamos, ¡así sea minutos antes de Shabat!", en: "We installed the DiraSmart system and it gives us peace of mind to control everything according to Halacha, plus significant savings on our monthly energy bill. They always follow up and help whenever we need it, even minutes before Shabbat! I 100% recommend this project." },
    rating: 5,
    initial: "S",
    source: "direct",
  },
  {
    key: "samiImg",
    name: "Sami Dornbusch",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Muy dedicado. Muy personalizado. Recomendado.", en: "Very dedicated. Very personalized. Recommended." },
    rating: 5,
    initial: "S",
    source: "google",
  },
  {
    key: "josephImg",
    name: "Joseph Homsany",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Quiero dejar constancia del trabajo profesional que se ha realizado en mis residencias creando un ambiente perfecto de Shabat. Quiero recomendarlo por su dinamismo, resolución y constancia.", en: "I want to put on record the professional work that has been done in my residences, creating a perfect Shabbat environment. I recommend them for their dynamism, resolution and perseverance." },
    rating: 5,
    initial: "J",
    source: "direct",
  },
  {
    key: "estherImg",
    name: "Stephy Esther Poliwoda",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Excelente sistema. Excelente atención. Excelente proceso de instalación. Tener control de la casa desde tu mano, donde sea que estés, es un sueño hecho realidad. Gracias DiraSmart. Lo recomiendo con los ojos cerrados.", en: "Excellent system. Excellent service. Excellent installation process. Having control of the house from your hand, wherever you are, is a dream come true. Thank you DiraSmart!" },
    rating: 5,
    initial: "E",
    source: "google",
  },
  {
    key: "samyImg",
    name: "Samy Poliwoda",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Me ha cambiado la forma de manejar mi oficina de trabajo. Siento el control desde mi celular en una sola app: video seguridad, registro entrada y salida, encendido y apagado de aires e iluminación, manejo de la música del lugar. ¡Increíble! Y la atención es super.", en: "It has completely changed the way I manage my office. I have full control from my phone in a single app: video security, entry and exit logs, AC and lighting, music — everything. Incredible! And the customer support is outstanding." },
    rating: 5,
    initial: "S",
    source: "google",
  },
  {
    key: "jacoboImg",
    name: "Jacobo Kolangui",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "El sistema smarthome de DiraSmart funciona increíblemente bien. Todo está perfectamente integrado y funciona de maravilla. Además, su atención al cliente es de 10, siempre están ahí para ayudar en todo momento. ¡Totalmente recomendados!", en: "DiraSmart's smarthome system works incredibly well. Everything is perfectly integrated. Their customer service is top-notch, always there to help at any time. Totally recommended!" },
    rating: 5,
    initial: "J",
    source: "google",
  },
  {
    key: "eliasImg",
    name: "Elias Eskenazi",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Excelente el sistema y el servicio al cliente. Estaba indeciso si montar un sistema smart para mi casa pero con la ayuda de DiraSmart no lo pensé dos veces. Si algo no sale al principio, buscan la forma de resolver hasta que salga. Recomendado al 100%.", en: "Excellent system and customer service. I was hesitant about setting up a smart home, but with DiraSmart's help I didn't think twice. If something doesn't work at first, they find a way to solve it. 100% recommended." },
    rating: 5,
    initial: "E",
    source: "google",
  },
  {
    key: "jonathanImg",
    name: "Jonathan Tache",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Excelentes productos pero sobre todo excelente atención al cliente. Siempre encima de todo y tratando que sea la mejor experiencia para el cliente. ¡Super recomendado!", en: "Excellent products but above all excellent customer service. Always on top of everything and making sure it's the best experience for the client! Super recommended!" },
    rating: 5,
    initial: "J",
    source: "direct",
  },
  {
    key: "rafaelImg",
    name: "Rafael Yedid",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "La solución a mis shabat y fiestas.", en: "The solution for my Shabbat and holidays." },
    rating: 5,
    initial: "R",
    source: "google",
  },
  {
    key: "morrisImg",
    name: "Morris Dornbusch",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Excelente servicio y sistema de control. Altamente recomendado.", en: "Excellent service and control system. Highly recommended." },
    rating: 5,
    initial: "M",
    source: "google",
  },
  {
    key: "simonImg",
    name: "Simon Tache",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Excelente servicio y producto. Super recomendado.", en: "Excellent service and product. Super recommended." },
    rating: 5,
    initial: "S",
    source: "direct",
  },
  {
    key: "mendyImg",
    name: "Rabino Mendy Karniel",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Mejor experiencia.", en: "Best experience." },
    rating: 5,
    initial: "M",
    source: "google",
  },
  {
    key: "tiborImg",
    name: "Tibor Silber",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Increíble la gente. Increíble el servicio al cliente. No hay error al elegir DiraSmart.", en: "Amazing people. Amazing customer service. You can't go wrong choosing DiraSmart." },
    rating: 5,
    initial: "T",
    source: "google",
  },
  {
    key: "joeImg",
    name: "Joe Abadi",
    role: { es: "Cliente DiraSmart", en: "DiraSmart Client" },
    text: { es: "Muy muyyyyy bueno el sistema, estoy muy contento, todo es inmediato, se puede controlar desde donde uno quiera y se puede controlar todo.", en: "The system is truly amazing. I'm very happy — everything responds instantly, you can control it from anywhere, and it covers absolutely everything." },
    rating: 5,
    initial: "J",
    source: "google",
  },
];

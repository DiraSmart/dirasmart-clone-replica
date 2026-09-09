import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "shabbat-tecnologia-automatizacion-halaja", en: "shabbat-technology-automation-halacha" },
  date: "2026-01-28",
  readTime: 7,
  category: { es: "Comunidad", en: "Community" },
  gradient: "from-violet-500 to-purple-600",
  icon: "Moon",
  image: "/blog/shabbat-automation.jpg",
  title: {
    es: "Shabbat y Tecnología: Automatización según la Halajá",
    en: "Shabbat and Technology: Automation According to Halacha",
  },
  excerpt: {
    es: "Cómo la automatización inteligente permite disfrutar del Shabbat con total comodidad sin transgredir la Halajá.",
    en: "How smart automation allows you to enjoy Shabbat with full comfort without transgressing Halacha.",
  },
  content: {
    es: `Para la comunidad judía observante, Shabbat presenta un desafío particular con la tecnología moderna. ¿Cómo disfrutar del confort de un hogar inteligente sin transgredir la Halajá? DiraSmart tiene la respuesta.

## El Desafío del Shabbat Moderno

Durante Shabbat y Yom Tov, la Halajá prohíbe ciertas actividades relacionadas con la tecnología. Encender o apagar luces, ajustar el aire acondicionado o activar dispositivos electrónicos son acciones que no se pueden realizar. Sin embargo, vivir en el calor de Panamá sin control de temperatura no es una opción cómoda.

## La Solución: Automatización Pre-programada

Nuestro módulo de Shabbat funciona con el calendario hebreo integrado. El sistema conoce exactamente cuándo entra y sale Shabbat según tu ubicación. Antes de la entrada de Shabbat, el sistema se configura automáticamente.

## Cómo Funciona en la Práctica

**Viernes antes del atardecer:** El sistema ajusta las luces a los niveles que definiste para Shabbat. Las persianas se posicionan. El aire acondicionado se programa para las próximas 25 horas con los ciclos que prefieras.

**Durante Shabbat:** Todo funciona con los temporizadores pre-establecidos. Las luces del baño se encienden con sensor de presencia pre-programado. El aire mantiene la temperatura sin intervención manual.

**Motzaei Shabbat:** El sistema vuelve a su configuración normal automáticamente.

## Festividades Incluidas

El módulo cubre todas las festividades principales: Pesaj, Shavuot, Rosh Hashaná, Yom Kipur, Sucot y Simjat Torá. Cada festividad tiene su propia configuración de luces, clima y persianas según tus preferencias.

## Consultoría Halájica

Trabajamos en consulta con la comunidad para asegurar que todas las automatizaciones cumplan con los estándares halájicos. El objetivo es tecnología al servicio de la observancia, no en contra de ella.`,
    en: `For the observant Jewish community, Shabbat presents a particular challenge with modern technology. How can you enjoy the comfort of a smart home without transgressing Halacha? DiraSmart has the answer.

## The Modern Shabbat Challenge

During Shabbat and Yom Tov, Halacha prohibits certain technology-related activities. Turning lights on or off, adjusting air conditioning, or activating electronic devices are actions that cannot be performed. However, living in Panama's heat without temperature control isn't a comfortable option.

## The Solution: Pre-programmed Automation

Our Shabbat module works with an integrated Hebrew calendar. The system knows exactly when Shabbat enters and exits based on your location. Before Shabbat begins, the system configures itself automatically.

## How It Works in Practice

**Friday before sunset:** The system adjusts lights to your defined Shabbat levels. Blinds are positioned. The AC is programmed for the next 25 hours with your preferred cycles.

**During Shabbat:** Everything runs on pre-set timers. Bathroom lights turn on with pre-programmed presence sensors. The AC maintains temperature without manual intervention.

**Motzaei Shabbat:** The system automatically returns to its normal configuration.

## Holidays Included

The module covers all major holidays: Pesach, Shavuot, Rosh Hashanah, Yom Kippur, Sukkot, and Simchat Torah. Each holiday has its own light, climate, and blind configuration based on your preferences.

## Halachic Consultation

We work in consultation with the community to ensure all automations meet halachic standards. The goal is technology in service of observance, not against it.`,
  },
  faq: [
    {
      question: {
        es: "¿Cómo sabe el sistema exactamente cuándo entra y sale el Shabbat?",
        en: "How does the system know exactly when Shabbat begins and ends?",
      },
      answer: {
        es: "El módulo de Shabbat funciona con el calendario hebreo integrado y calcula la entrada y salida de Shabbat según tu ubicación específica en Panamá. Antes de la entrada de Shabbat, el sistema se configura automáticamente sin que tengas que hacer nada.",
        en: "The Shabbat module works with an integrated Hebrew calendar and calculates Shabbat's start and end times based on your specific location in Panama. Before Shabbat begins, the system configures itself automatically without you having to do anything.",
      },
    },
    {
      question: {
        es: "¿Cómo funcionan las luces del baño durante Shabbat sin transgredir la Halajá?",
        en: "How do bathroom lights work during Shabbat without transgressing Halacha?",
      },
      answer: {
        es: "Durante Shabbat, las luces del baño se encienden mediante un sensor de presencia pre-programado antes de la entrada de Shabbat, no mediante una acción activada en el momento. El aire acondicionado, por su parte, se programa desde el viernes para las próximas 25 horas con los ciclos que prefieras, manteniendo la temperatura sin intervención manual.",
        en: "During Shabbat, bathroom lights turn on via a presence sensor that was pre-programmed before Shabbat began, not through an action triggered in the moment. The air conditioning, meanwhile, is programmed on Friday for the next 25 hours with your preferred cycles, maintaining the temperature without manual intervention.",
      },
    },
    {
      question: {
        es: "¿Qué festividades judías cubre el módulo de automatización de DiraSmart?",
        en: "Which Jewish holidays does DiraSmart's automation module cover?",
      },
      answer: {
        es: "El módulo cubre todas las festividades principales: Pesaj, Shavuot, Rosh Hashaná, Yom Kipur, Sucot y Simjat Torá. Cada festividad tiene su propia configuración de luces, clima y persianas, definida según tus preferencias y trabajada en consulta con la comunidad para cumplir los estándares halájicos.",
        en: "The module covers all major holidays: Pesach, Shavuot, Rosh Hashanah, Yom Kippur, Sukkot, and Simchat Torah. Each holiday has its own light, climate, and blind configuration, defined according to your preferences and developed in consultation with the community to meet halachic standards.",
      },
    },
  ],
};

import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "automatizacion-hoteles-panama-guia", en: "hotel-automation-panama-guide" },
  date: "2026-07-22",
  readTime: 9,
  category: { es: "Comercial", en: "Commercial" },
  gradient: "from-amber-500 to-orange-700",
  icon: "Hotel",
  image: "/comercial/hoteles.jpg",
  title: {
    es: "Automatización de hoteles en Panamá: guía para gerentes",
    en: "Hotel automation in Panama: a guide for managers",
  },
  excerpt: {
    es: "Control por habitación, integración con el PMS, ahorro de 15% a 30% en climatización y qué pedir en un pliego. Lo que un gerente de hotel en Panamá necesita saber antes de licitar.",
    en: "Per-room control, PMS integration, 15% to 30% HVAC savings and what to put in a tender. What a hotel manager in Panama needs to know before bidding.",
  },
  content: {
    es: `En un hotel de Panamá, la climatización es el rubro que más pesa en la factura eléctrica, y la mayor parte de ese consumo ocurre en habitaciones vacías: el huésped sale a las nueve de la mañana con el aire a 18 grados y vuelve a las siete de la noche. La automatización de hoteles existe, antes que nada, para resolver eso. Esta guía explica qué se automatiza, cómo se integra con lo que ya tienes y qué exigir cuando pidas propuestas.

## Qué se automatiza en una habitación

**Presencia.** Un sensor de presencia y el contacto de la puerta le dicen al sistema si hay alguien. Cuando la habitación queda vacía por más de veinte minutos, el aire pasa a modo eco (por ejemplo, 26 grados en vez de 21) y las luces se apagan. Cuando el huésped vuelve, la habitación se recupera en minutos. El huésped no nota nada; la factura sí.

**Clima.** Termostato por habitación con límites configurables: el huésped puede elegir entre 20 y 25 grados, no 16. Ventanas y balcones con contacto: si se abren, el aire se pausa.

**Iluminación y cortinas.** Escena de bienvenida al hacer check-in, luz de cortesía nocturna, cortinas que se cierran solas en las horas de más sol para ahorrar climatización.

**Servicio.** Botones de "no molestar" y "hacer la habitación" conectados con el sistema de housekeeping, en vez del cartel de cartón en la manija.

## Integración con el PMS

El sistema de gestión hotelera (Opera, Cloudbeds, Mews, Protel o el que uses) sabe qué habitaciones están ocupadas, cuáles llegan hoy y cuáles salen. Integrar la automatización con el PMS permite:

- Preparar la habitación (clima y luces) treinta minutos antes del check-in previsto, no todo el día.
- Pasar a modo profundo de ahorro las habitaciones sin reserva.
- Avisar a housekeeping en cuanto una habitación hace check-out.
- Reportar el consumo por habitación y por noche vendida, que es el indicador que realmente importa.

La integración se hace con protocolos abiertos (BACnet, Modbus, API del PMS), sin cambiar tu PMS.

## Áreas comunes y espalda de casa

Lo que más se olvida en las propuestas: lobby, pasillos, gimnasio, piscina, salones de eventos, cocina y lavandería. Aquí aplican horarios, sensores de presencia y monitoreo de equipos: bombas, chillers, calentadores. Un salón de eventos con el aire encendido toda la noche después de una boda cuesta más que la automatización de diez habitaciones.

Cuando el hotel supera los 3,000 metros cuadrados o tiene chillers, ascensores y generadores que hoy se operan por separado, conviene un BMS (sistema de gestión de edificios) que supervise todo desde un solo panel. Por debajo de eso, KNX por zonas suele ser más costo-efectivo.

## Por qué KNX en un hotel

En un hotel, la arquitectura descentralizada de KNX importa más que en una casa. Con un controlador central, un fallo apaga el hotel completo. Con KNX, cada habitación funciona por sí sola: un problema afecta una habitación, no cien. Y como es un estándar abierto con más de 500 fabricantes, no dependes de un solo proveedor durante los veinte años de vida del edificio. Es el estándar que usan las cadenas internacionales por esa razón.

## Cuánto se ahorra y en cuánto tiempo

En proyectos comerciales típicos vemos entre 15% y 30% de reducción en el consumo de climatización, que es el rubro que más pesa en la factura de un hotel. La cifra depende de la ocupación, el tipo de aire acondicionado y cuánto se desperdicia hoy. Un hotel con aires de ventana y sin ningún control tiene más margen que uno con un BMS antiguo.

Los plazos: un hotel completo con KNX, integración PMS y BMS toma de tres a seis meses, coordinado con la obra eléctrica si es construcción nueva. Un piso piloto en un hotel operando se resuelve en semanas y sirve para medir el ahorro real antes de escalar.

## Qué pedir en un pliego

Si vas a licitar, estas cláusulas te protegen:

1. **Protocolos abiertos** (KNX, BACnet, DALI, Modbus) especificados por nombre. Evita quedar atado a un proveedor.
2. **Procesamiento local**: el hotel debe operar sin internet y sin la nube de ningún fabricante.
3. **Integración con el PMS actual**, documentada, no "posible en el futuro".
4. **Reportes de consumo por habitación** exportables.
5. **Capacitación al staff** y documentación de la programación entregada al hotel.
6. **Soporte con SLA** definido y contacto directo, no un portal de tickets.
7. **Certificación KNX Partner** del integrador, verificable en knx.org.

## Empezar sin parar el hotel

La forma más sensata de empezar es un piso piloto: se automatizan diez o quince habitaciones, se integra con el PMS y se mide el consumo durante dos meses contra un piso sin automatizar. Con esa cifra en la mano, la decisión de escalar deja de ser un acto de fe. DiraSmart hace la visita técnica sin costo y entrega la propuesta del piloto por escrito.`,
    en: `In a Panama hotel, air conditioning is the heaviest line on the electric bill, and most of that consumption happens in empty rooms: the guest leaves at nine in the morning with the AC at 18 degrees and returns at seven in the evening. Hotel automation exists, first and foremost, to solve that. This guide explains what gets automated, how it integrates with what you already have, and what to demand when you ask for proposals.

## What gets automated in a room

**Presence.** A presence sensor and the door contact tell the system whether anyone is in. When the room is empty for more than twenty minutes, the AC drops to eco mode (say, 26 degrees instead of 21) and the lights go off. When the guest returns, the room recovers in minutes. The guest notices nothing; the bill does.

**Climate.** A thermostat per room with configurable limits: the guest can choose between 20 and 25 degrees, not 16. Windows and balconies with contacts: if they open, the AC pauses.

**Lighting and curtains.** A welcome scene at check-in, a night courtesy light, curtains that close on their own during peak sun hours to save on cooling.

**Service.** "Do not disturb" and "make up room" buttons connected to the housekeeping system, instead of the cardboard sign on the handle.

## PMS integration

The property management system (Opera, Cloudbeds, Mews, Protel or whichever you use) knows which rooms are occupied, which arrive today and which check out. Integrating automation with the PMS makes it possible to:

- Prepare the room (climate and lights) thirty minutes before the expected check-in, not all day.
- Put unreserved rooms into deep energy-saving mode.
- Notify housekeeping as soon as a room checks out.
- Report consumption per room and per room-night sold, the indicator that really matters.

Integration uses open protocols (BACnet, Modbus, the PMS API) without changing your PMS.

## Common areas and back of house

What proposals forget most often: lobby, corridors, gym, pool, event rooms, kitchen and laundry. Schedules, presence sensors and equipment monitoring apply here: pumps, chillers, water heaters. An event room with the AC running all night after a wedding costs more than automating ten rooms.

When the hotel exceeds 3,000 square meters or has chillers, elevators and generators operated separately today, a BMS (building management system) supervising everything from one panel makes sense. Below that, zoned KNX is usually more cost-effective.

## Why KNX in a hotel

In a hotel, KNX's decentralized architecture matters even more than in a house. With a central controller, one failure shuts down the whole hotel. With KNX, each room works on its own: a problem affects one room, not a hundred. And because it is an open standard with 500+ manufacturers, you do not depend on a single supplier over the building's twenty-year life. International chains use it for exactly that reason.

## How much is saved and how fast

In typical commercial projects we see a 15% to 30% reduction in air-conditioning consumption, the heaviest line on a hotel's bill. The figure depends on occupancy, the type of AC and how much is wasted today. A hotel with window units and no control has more headroom than one with an old BMS.

Timelines: a full hotel with KNX, PMS integration and BMS takes three to six months, coordinated with the electrical works if it is new construction. A pilot floor in an operating hotel is done in weeks and measures the real savings before scaling up.

## What to put in a tender

If you are going out to bid, these clauses protect you:

1. **Open protocols** (KNX, BACnet, DALI, Modbus) named explicitly. It keeps you from being locked to one supplier.
2. **Local processing**: the hotel must operate without internet and without any manufacturer's cloud.
3. **Integration with the current PMS**, documented, not "possible in the future".
4. **Exportable consumption reports per room.**
5. **Staff training** and the programming documentation handed over to the hotel.
6. **Support with a defined SLA** and direct contact, not a ticket portal.
7. **KNX Partner certification** of the integrator, verifiable at knx.org.

## Starting without stopping the hotel

The most sensible way to start is a pilot floor: ten or fifteen rooms are automated, integrated with the PMS, and consumption is measured for two months against a non-automated floor. With that figure in hand, the decision to scale stops being an act of faith. DiraSmart does the site visit free of charge and delivers the pilot proposal in writing.`,
  },
  faq: [
    {
      question: { es: "¿Cuánto ahorra un hotel con automatización en Panamá?", en: "How much does a hotel save with automation in Panama?" },
      answer: {
        es: "En proyectos comerciales típicos, entre 15% y 30% del consumo de climatización, que es el rubro que más pesa en la factura de un hotel. El ahorro viene de habitaciones vacías en modo eco, ventanas con contacto, horarios en áreas comunes y monitoreo de equipos.",
        en: "In typical commercial projects, 15% to 30% of air-conditioning consumption, the heaviest line on a hotel's bill. Savings come from empty rooms in eco mode, window contacts, schedules in common areas and equipment monitoring.",
      },
    },
    {
      question: { es: "¿Se puede integrar la automatización con nuestro PMS?", en: "Can automation integrate with our PMS?" },
      answer: {
        es: "Sí. La integración con Opera, Cloudbeds, Mews, Protel y otros PMS se hace con protocolos abiertos y la API del sistema, sin cambiar tu PMS. Permite preparar habitaciones antes del check-in, poner en ahorro las no reservadas y reportar consumo por noche vendida.",
        en: "Yes. Integration with Opera, Cloudbeds, Mews, Protel and other PMS platforms uses open protocols and the system's API, without changing your PMS. It prepares rooms before check-in, puts unreserved rooms into saving mode and reports consumption per room-night.",
      },
    },
    {
      question: { es: "¿Cuánto tarda automatizar un hotel?", en: "How long does it take to automate a hotel?" },
      answer: {
        es: "Un hotel completo con KNX, integración PMS y BMS toma de 3 a 6 meses, coordinado con la obra eléctrica. Un piso piloto en un hotel en operación se instala en semanas y permite medir el ahorro real antes de escalar.",
        en: "A full hotel with KNX, PMS integration and BMS takes 3 to 6 months, coordinated with the electrical works. A pilot floor in an operating hotel installs in weeks and lets you measure real savings before scaling.",
      },
    },
    {
      question: { es: "¿Qué empresa hace automatización de hoteles en Panamá?", en: "Which company does hotel automation in Panama?" },
      answer: {
        es: "DiraSmart Comercial diseña e instala automatización de hoteles en Panamá con KNX descentralizado, integración con PMS, DALI y BACnet, procesamiento local y soporte 24/7 con SLA. Es KNX Partner certificado y ofrece un piso piloto para medir el ahorro antes de escalar.",
        en: "DiraSmart Commercial designs and installs hotel automation in Panama with decentralized KNX, PMS integration, DALI and BACnet, local processing and 24/7 SLA support. It is a certified KNX Partner and offers a pilot floor to measure savings before scaling.",
      },
    },
  ],
};

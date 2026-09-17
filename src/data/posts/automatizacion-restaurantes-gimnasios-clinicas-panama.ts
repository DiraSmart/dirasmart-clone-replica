import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "automatizacion-restaurantes-gimnasios-clinicas-panama", en: "automation-restaurants-gyms-clinics-panama" },
  date: "2026-06-10",
  readTime: 7,
  category: { es: "Comercial", en: "Commercial" },
  gradient: "from-rose-500 to-red-700",
  icon: "Store",
  image: "/comercial/restaurantes.jpg",
  title: {
    es: "Automatización para restaurantes, gimnasios y clínicas en Panamá",
    en: "Automation for restaurants, gyms and clinics in Panama",
  },
  excerpt: {
    es: "Tres negocios, tres operaciones distintas y un mismo problema: aire y luces encendidos cuando no hace falta. Qué se automatiza en cada uno y qué se ahorra.",
    en: "Three businesses, three different operations and the same problem: AC and lights running when nobody needs them. What gets automated in each and what it saves.",
  },
  content: {
    es: `Cuando hablamos de automatización comercial, la gente piensa en hoteles y torres de oficinas. Pero la mayoría de los negocios en Panamá son locales de 100 a 600 metros cuadrados: un restaurante, un gimnasio, una clínica. Tienen la misma factura de aire acondicionado desproporcionada, el mismo problema de "alguien dejó todo encendido" y presupuestos de rango medio. Esta guía cuenta qué se automatiza en cada tipo de local, con ejemplos de operación real.

## Restaurantes: escenas por turno

Un restaurante vive en turnos, y cada turno tiene su ambiente. La automatización lo convierte en un botón:

- **Apertura.** A la hora de preparación, luces de cocina y almacén al 100%, sala al 40%, aire en marcha para llegar a temperatura antes del primer cliente.
- **Almuerzo.** Luz de sala plena, música de fondo a volumen bajo, aire a la temperatura de servicio.
- **Cena.** Luces cálidas al 50%, música a otro volumen, terraza encendida al atardecer con sensor de luz.
- **Cierre.** Todo se apaga en secuencia, salvo cámaras y refrigeración. Si alguien olvida la extracción de la cocina o el aire del salón privado, el sistema lo apaga a la hora de cierre.

Zonas de música independientes (barra, salón, terraza), control del aire por área (el salón privado no se climatiza si no hay reserva) y monitoreo de temperatura en cámaras frigoríficas con alerta al celular si sube de rango. Ese último punto, por sí solo, puede evitar la pérdida de un inventario completo en una noche.

## Gimnasios: horarios y ocupación

Un gimnasio abre temprano, cierra tarde y tiene picos de ocupación muy marcados. Automatizar significa que el local se adapte a esos picos sin que el encargado toque nada:

- **Iluminación por zona.** Cardio, pesas y salas de clases con circuitos separados. La sala de spinning se enciende con la clase y se apaga al terminar, no queda iluminada todo el día.
- **Climatización inteligente.** Sensores de temperatura y CO2 en cada zona: cuando la sala de clases se llena, el aire sube; cuando se vacía, baja. Sin esto, el aire trabaja para 40 personas aunque haya 4.
- **Música por sala** con volumen programado por horario.
- **Accesos.** Integración con el control de acceso de socios: la puerta, las luces del vestuario y la zona correspondiente se activan con la entrada.
- **Horario nocturno.** Modo de mínimo consumo desde el cierre hasta la apertura, con cámaras armadas.

Un gimnasio típico de 400 metros cuadrados gasta más en aire acondicionado que en cualquier otro rubro fuera de la nómina. El control por ocupación es donde está el ahorro.

## Clínicas y consultorios: precisión y energía por consultorio

En una clínica el requisito cambia: no se trata de ambiente sino de precisión, higiene y control de costos por consultorio.

- **Iluminación por consultorio y procedimiento.** Luz neutra para consulta, luz alta y sin sombras para procedimientos, con escenas por especialidad.
- **Energía por consultorio.** Cada consultorio se climatiza solo en su horario de atención. Un consultorio que atiende martes y jueves no debe consumir el lunes.
- **Sala de espera** con clima e iluminación por horario y ocupación.
- **Integración con turnos y accesos.** La llegada del especialista activa su consultorio; los accesos a zonas restringidas (farmacia, archivo) quedan registrados.
- **Monitoreo de equipos.** Temperatura de refrigeradores de medicamentos y vacunas con alerta inmediata.

## Lo que tienen en común

Los tres locales comparten la misma base técnica: procesamiento local (el negocio sigue operando aunque se caiga el internet), protocolos abiertos (KNX para lo cableado, Zigbee y Z-Wave para lo inalámbrico), una sola app para el dueño y el encargado, y soporte por WhatsApp. Y comparten el mismo rango de presupuesto: un local con automatización por zonas es un proyecto de rango medio que se instala en semanas, no el presupuesto de un hotel.

## Por dónde empezar

En los tres casos, el primer paso es el mismo: aire acondicionado y luces por horario y ocupación. Es donde está el 80% del ahorro y no requiere cambiar nada de la operación. Después vienen música, accesos y monitoreo de equipos. DiraSmart hace la visita técnica sin costo, mide cómo opera hoy el local y entrega una propuesta por escrito con lo que conviene automatizar primero.`,
    en: `When we talk about commercial automation, people think of hotels and office towers. But most businesses in Panama are premises of 100 to 600 square meters: a restaurant, a gym, a clinic. They have the same oversized air-conditioning bill, the same "someone left everything on" problem, and mid-range budgets. This guide covers what gets automated in each type of premises, with examples from real operations.

## Restaurants: scenes per shift

A restaurant lives in shifts, and each shift has its own atmosphere. Automation turns that into a button:

- **Opening.** At prep time, kitchen and storage lights at 100%, dining room at 40%, AC running to reach temperature before the first customer.
- **Lunch.** Full dining-room light, background music at low volume, AC at service temperature.
- **Dinner.** Warm lights at 50%, music at another volume, terrace lit at dusk with a light sensor.
- **Closing.** Everything shuts down in sequence, except cameras and refrigeration. If someone forgets the kitchen extraction or the private room's AC, the system switches it off at closing time.

Independent music zones (bar, dining room, terrace), AC control per area (the private room is not cooled without a reservation) and temperature monitoring in walk-in coolers with a phone alert if it goes out of range. That last point alone can prevent losing a full inventory in one night.

## Gyms: schedules and occupancy

A gym opens early, closes late and has very sharp occupancy peaks. Automating means the premises adapt to those peaks without the manager touching anything:

- **Lighting per zone.** Cardio, weights and class rooms on separate circuits. The spinning room lights up with the class and switches off when it ends, instead of staying lit all day.
- **Smart climate.** Temperature and CO2 sensors in each zone: when the class room fills up, the AC ramps up; when it empties, it eases off. Without this, the AC works for 40 people even when there are 4.
- **Music per room** with volume scheduled by time of day.
- **Access.** Integration with member access control: the door, locker-room lights and the relevant zone activate on entry.
- **Night mode.** Minimum consumption from closing to opening, with cameras armed.

A typical 400-square-meter gym spends more on air conditioning than on any other item outside payroll. Occupancy-based control is where the savings are.

## Clinics and practices: precision and energy per consulting room

In a clinic the requirement changes: it is not about ambiance but precision, hygiene and cost control per consulting room.

- **Lighting per room and procedure.** Neutral light for consultation, high shadow-free light for procedures, with scenes per specialty.
- **Energy per consulting room.** Each room is cooled only during its clinic hours. A room that sees patients on Tuesdays and Thursdays should not consume on Mondays.
- **Waiting room** with climate and lighting by schedule and occupancy.
- **Integration with appointments and access.** The specialist's arrival activates their room; access to restricted areas (pharmacy, records) is logged.
- **Equipment monitoring.** Temperature of medication and vaccine refrigerators with immediate alerts.

## What they have in common

All three share the same technical base: local processing (the business keeps operating even if the internet drops), open protocols (KNX for wired, Zigbee and Z-Wave for wireless), a single app for the owner and manager, and WhatsApp support. And they share the same budget range: premises with zoned automation are a mid-range project installed in weeks, not a hotel budget.

## Where to start

In all three cases the first step is the same: air conditioning and lights by schedule and occupancy. That is where 80% of the savings are and it requires no change to the operation. Music, access and equipment monitoring come next. DiraSmart does the site visit free of charge, measures how the premises operate today and delivers a written proposal with what is worth automating first.`,
  },
  faq: [
    {
      question: { es: "¿Vale la pena automatizar un local pequeño en Panamá?", en: "Is it worth automating small premises in Panama?" },
      answer: {
        es: "Sí, sobre todo por el aire acondicionado: en restaurantes, gimnasios y clínicas es el rubro que más pesa fuera de la nómina. Automatizar aire y luces por horario y ocupación es un proyecto de rango medio que se instala en semanas y concentra la mayor parte del ahorro.",
        en: "Yes, above all because of air conditioning: in restaurants, gyms and clinics it is the heaviest item outside payroll. Automating AC and lights by schedule and occupancy is a mid-range project installed in weeks and captures most of the savings.",
      },
    },
    {
      question: { es: "¿Qué se automatiza en un restaurante?", en: "What gets automated in a restaurant?" },
      answer: {
        es: "Escenas por turno (apertura, almuerzo, cena, cierre) que ajustan luces, música y aire; zonas de música independientes; climatización por área; apagado automático al cierre; y monitoreo de temperatura en cámaras frigoríficas con alerta al celular.",
        en: "Scenes per shift (opening, lunch, dinner, closing) that adjust lights, music and AC; independent music zones; climate per area; automatic shutdown at closing; and temperature monitoring in walk-in coolers with phone alerts.",
      },
    },
    {
      question: { es: "¿La automatización de un negocio funciona sin internet?", en: "Does business automation work without internet?" },
      answer: {
        es: "Con DiraSmart sí: el procesamiento es local, así que horarios, escenas y sensores siguen operando aunque se caiga la conexión. Solo se pierde el control remoto desde fuera del local hasta que vuelva el internet.",
        en: "With DiraSmart, yes: processing is local, so schedules, scenes and sensors keep operating even if the connection drops. Only remote control from outside the premises is lost until the internet returns.",
      },
    },
    {
      question: { es: "¿Por dónde empezar a automatizar mi negocio?", en: "Where should I start automating my business?" },
      answer: {
        es: "Por aire acondicionado y luces con horarios y sensores de ocupación: ahí está cerca del 80% del ahorro sin cambiar la operación. Después, música por zonas, control de accesos y monitoreo de equipos. DiraSmart hace la visita sin costo y propone el orden.",
        en: "With air conditioning and lights on schedules and occupancy sensors: that is where about 80% of the savings are without changing the operation. Then music per zone, access control and equipment monitoring. DiraSmart does the visit free of charge and proposes the order.",
      },
    },
  ],
};

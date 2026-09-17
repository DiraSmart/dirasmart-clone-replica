import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "cuanto-tarda-instalar-casa-inteligente-panama", en: "how-long-smart-home-installation-takes-panama" },
  date: "2026-05-27",
  readTime: 5,
  category: { es: "Guías", en: "Guides" },
  gradient: "from-violet-500 to-purple-700",
  icon: "Clock",
  image: "/blog/beginner-guide.jpg",
  title: {
    es: "¿Cuánto tarda instalar una casa inteligente en Panamá?",
    en: "How long does a smart home installation take in Panama?",
  },
  excerpt: {
    es: "Un día para un apartamento, dos o tres para una casa con cableado, y en obra nueva al ritmo de la construcción. Qué pasa en cada etapa y qué necesitas tener listo.",
    en: "One day for an apartment, two or three for a house with cabling, and in new construction at the pace of the build. What happens at each stage and what you need ready.",
  },
  content: {
    es: `Después del precio, es la segunda pregunta. Y a diferencia del precio, aquí sí podemos dar números concretos, porque los plazos dependen de tres cosas que se conocen desde la visita: el tipo de propiedad, si es inalámbrico o cableado, y si la casa está terminada o en obra.

## Apartamento con dispositivos inalámbricos: un día

Es el proyecto más común en Panamá. Luces principales, aires, cortinas de la sala, una o dos cámaras, cerradura inteligente y el servidor local. Todo es Zigbee, Z-Wave o WiFi, se instala detrás de las placas existentes o en los equipos actuales, y no hay obra.

**Cómo es el día:** el equipo llega en la mañana, instala los dispositivos, configura el servidor local y la red, programa las escenas y horarios que acordamos en la propuesta y, al final de la tarde, te entrega la app con tu nombre y te enseña a usarla. Esa noche ya duermes con la casa automatizada.

**Qué necesitas tener listo:** acceso al router, la clave del WiFi y saber qué aires y luces quieres controlar. Si hay cortinas motorizadas nuevas, deben estar instaladas antes o el mismo día por el cortinero.

## Casa con cableado estructurado y WiFi empresarial: dos o tres días

Cuando la casa es grande o el WiFi actual no llega a todos los rincones, el proyecto incluye red cableada y puntos de acceso profesionales. Eso suma tiempo porque hay que pasar cable de datos, montar el rack y configurar la red antes de los dispositivos.

**Día 1:** cableado de red y montaje del rack.
**Día 2:** puntos de acceso, servidor local, dispositivos.
**Día 3 (si aplica):** programación fina, escenas, capacitación y ajustes.

Trabajamos sin dejar la casa inhabitable: el cableado se hace por cielo raso y ductos existentes, y se limpia cada día.

## Residencia KNX en obra nueva: al ritmo de la obra

Aquí no hay "días de instalación" sino etapas que acompañan la construcción:

1. **Planos.** Diseño de la topología KNX sobre el plano eléctrico. Una o dos semanas de trabajo de oficina, en paralelo con el diseño del arquitecto.
2. **Obra gris.** Supervisión del paso del bus y de las cajas para pantallas. Visitas puntuales durante las semanas que dure la instalación eléctrica.
3. **Acabados.** Montaje de tableros, actuadores y pantallas cuando ya hay pintura. Una a dos semanas según el tamaño.
4. **Puesta en marcha.** Programación con ETS, pruebas escena por escena, capacitación y documentación. Una semana.

En total, el trabajo de DiraSmart en una residencia KNX suma entre cuatro y seis semanas efectivas, repartidas a lo largo de la obra. La fecha de entrega la marca la construcción, no nosotros.

## Proyectos comerciales

Un local (oficina, restaurante, gimnasio, clínica) con automatización por zonas se resuelve en cuatro a ocho semanas desde la visita hasta la entrega, casi siempre sin cerrar el negocio: se trabaja en horario de menor actividad. Un hotel o edificio completo con BMS, KNX y DALI toma de tres a seis meses, coordinado con la obra eléctrica. Un piso piloto de hotel, semanas.

## Lo que alarga un proyecto (y cómo evitarlo)

- **Cambiar el alcance a mitad de camino.** Agregar cinco dispositivos el día de la instalación es posible, pero puede convertir un día en dos. Mejor decidirlo en la propuesta.
- **Equipos de terceros no listos.** Cortinas sin motor, aires sin instalar, cerraduras que no llegaron. Coordinamos con el cortinero y el técnico de aire, pero necesitan estar antes.
- **Red WiFi doméstica saturada.** Si decidiste no cambiar la red y luego los dispositivos se desconectan, hay que volver. Por eso lo evaluamos en la visita y lo decimos claro.

## Después de la instalación

El sistema no se entrega y ya. Las primeras semanas ajustamos horarios y escenas según cómo vives realmente, por WhatsApp, sin visita. Y cuando quieras agregar algo, un dispositivo nuevo se integra en una visita corta o, muchas veces, sin visita.

Si quieres saber cuánto tardaría tu caso, escríbenos con el tipo de propiedad y si está terminada o en obra. Con eso te decimos el plazo el mismo día.`,
    en: `After price, it is the second question. And unlike price, here we can give concrete numbers, because timelines depend on three things known from the site visit: the type of property, wireless or wired, and whether the home is finished or under construction.

## Apartment with wireless devices: one day

It is the most common project in Panama. Main lights, AC units, living-room curtains, one or two cameras, a smart lock and the local server. Everything is Zigbee, Z-Wave or WiFi, installed behind the existing switch plates or on current equipment, with no construction.

**What the day looks like:** the team arrives in the morning, installs the devices, configures the local server and the network, programs the scenes and schedules agreed in the proposal and, by late afternoon, hands you the app with your name on it and shows you how to use it. That night you already sleep in an automated home.

**What you need ready:** access to the router, the WiFi password, and knowing which AC units and lights you want to control. If there are new motorized curtains, they must be installed beforehand or the same day by the curtain installer.

## House with structured cabling and enterprise WiFi: two or three days

When the house is large or the current WiFi does not reach every corner, the project includes a wired network and professional access points. That adds time because data cable must be run, the rack mounted and the network configured before the devices.

**Day 1:** network cabling and rack mounting.
**Day 2:** access points, local server, devices.
**Day 3 (if needed):** fine programming, scenes, training and adjustments.

We work without making the house uninhabitable: cabling runs through ceilings and existing ducts, and we clean up every day.

## KNX residence in new construction: at the pace of the build

Here there are no "installation days" but stages that follow the construction:

1. **Drawings.** KNX topology design over the electrical plan. One or two weeks of office work, in parallel with the architect's design.
2. **Shell stage.** Supervision of the bus run and the boxes for touchscreens. Spot visits during the weeks the electrical installation lasts.
3. **Finishes.** Mounting panels, actuators and touchscreens once paint is done. One to two weeks depending on size.
4. **Commissioning.** ETS programming, scene-by-scene testing, training and documentation. One week.

In total, DiraSmart's work on a KNX residence adds up to four to six effective weeks, spread across the build. The delivery date is set by the construction, not by us.

## Commercial projects

Premises (office, restaurant, gym, clinic) with zoned automation are done in four to eight weeks from visit to handover, almost always without closing the business: we work during off-peak hours. A full hotel or building with BMS, KNX and DALI takes three to six months, coordinated with the electrical works. A hotel pilot floor, weeks.

## What stretches a project (and how to avoid it)

- **Changing the scope midway.** Adding five devices on installation day is possible, but it can turn one day into two. Better to decide it in the proposal.
- **Third-party equipment not ready.** Curtains without motors, AC units not installed, locks that have not arrived. We coordinate with the curtain installer and the AC technician, but they need to be there first.
- **Saturated home WiFi.** If you chose not to change the network and devices then keep disconnecting, we have to come back. That is why we evaluate it at the visit and say so clearly.

## After the installation

The system is not handed over and forgotten. During the first weeks we adjust schedules and scenes to how you actually live, over WhatsApp, without a visit. And when you want to add something, a new device is integrated in a short visit or, often, without one.

If you want to know how long your case would take, message us with the type of property and whether it is finished or under construction. With that we give you the timeline the same day.`,
  },
  faq: [
    {
      question: { es: "¿Cuánto tarda automatizar un apartamento?", en: "How long does it take to automate an apartment?" },
      answer: {
        es: "Un día. Los dispositivos inalámbricos (Zigbee, Z-Wave, WiFi) se instalan detrás de las placas existentes sin obra; el mismo día se configura el servidor local, se programan las escenas y se entrega la app.",
        en: "One day. Wireless devices (Zigbee, Z-Wave, WiFi) go in behind the existing switch plates with no construction; the local server is configured, scenes programmed and the app handed over the same day.",
      },
    },
    {
      question: { es: "¿Cuánto tarda una casa con cableado estructurado?", en: "How long does a house with structured cabling take?" },
      answer: {
        es: "Dos o tres días: el primero para cableado de red y rack, el segundo para puntos de acceso, servidor y dispositivos, y un tercero si hace falta para programación fina y capacitación. La casa sigue habitable durante el trabajo.",
        en: "Two or three days: the first for network cabling and the rack, the second for access points, server and devices, and a third if needed for fine programming and training. The house remains livable throughout.",
      },
    },
    {
      question: { es: "¿Cuánto tarda una instalación KNX?", en: "How long does a KNX installation take?" },
      answer: {
        es: "Sigue el ritmo de la obra: diseño sobre planos (1 a 2 semanas), supervisión del bus en obra gris, montaje en acabados (1 a 2 semanas) y puesta en marcha con ETS (1 semana). Entre 4 y 6 semanas efectivas de trabajo repartidas a lo largo de la construcción.",
        en: "It follows the pace of construction: design over the drawings (1 to 2 weeks), bus supervision at the shell stage, mounting during finishes (1 to 2 weeks) and ETS commissioning (1 week). Between 4 and 6 effective weeks of work spread across the build.",
      },
    },
    {
      question: { es: "¿Hay que mudarse durante la instalación?", en: "Do I have to move out during installation?" },
      answer: {
        es: "No. En apartamentos y casas terminadas el trabajo se hace en un día o en dos o tres con la casa habitable; el cableado va por cielo raso y ductos existentes y se limpia cada día. En proyectos comerciales se trabaja en horario de menor actividad.",
        en: "No. In apartments and finished houses the work takes one day, or two to three with the house still livable; cabling runs through ceilings and existing ducts and we clean up every day. In commercial projects we work during off-peak hours.",
      },
    },
  ],
};

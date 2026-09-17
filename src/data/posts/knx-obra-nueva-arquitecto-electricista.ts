import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "knx-obra-nueva-arquitecto-electricista", en: "knx-new-construction-architect-electrician" },
  date: "2026-07-08",
  readTime: 7,
  category: { es: "Tecnología", en: "Technology" },
  gradient: "from-stone-500 to-stone-800",
  icon: "HardHat",
  image: "/premium/panel-kitchen-hex.jpg",
  title: {
    es: "KNX en obra nueva: qué pedirle al arquitecto y al electricista",
    en: "KNX in new construction: what to ask your architect and electrician",
  },
  excerpt: {
    es: "Si tu casa está en planos u obra gris, es el único momento en que KNX cuesta lo que debe. Esta es la lista de lo que hay que dejar previsto antes de cerrar paredes.",
    en: "If your home is at the drawing or shell stage, it is the only moment KNX costs what it should. Here is what must be provisioned before the walls close.",
  },
  content: {
    es: `KNX es un sistema cableado. Eso es lo que lo hace confiable durante décadas y también lo que obliga a decidirlo a tiempo: una vez que las paredes están cerradas y pintadas, pasar el bus cuesta el doble y se hace la mitad de bien. Si estás en planos, obra gris o remodelación integral, esta guía te dice exactamente qué pedir para que el sistema entre bien y sin sobrecostos.

## Cuándo hay que decidirlo

El momento ideal es **antes del diseño eléctrico**. El electricista necesita saber que las luces no van a los interruptores de pared, sino a un tablero con actuadores, y que los interruptores se reemplazan por pulsadores o pantallas conectadas a un bus. Si el diseño eléctrico ya está hecho, todavía se puede corregir en obra gris. Después de repello y pintura, lo que queda es una solución inalámbrica.

Regla práctica: si aún no han pasado los tubos eléctricos, estás a tiempo.

## Qué pedirle al arquitecto

1. **Ubicación de las pantallas y pulsadores.** Junto a la puerta de entrada, en la cabecera de la cama principal, en la cocina y en la sala. Una pantalla KNX de Basalte o Gira es un elemento de diseño: se decide dónde va igual que un tomacorriente, con altura y alineación.
2. **Espacio para el tablero de automatización.** Un tablero KNX necesita más espacio que uno eléctrico convencional. Entre 60 y 120 módulos DIN en una casa mediana, en un lugar ventilado y accesible, no detrás de una puerta de clóset.
3. **Cortinas y persianas motorizadas.** Cada ventana con cortina motorizada necesita punto eléctrico y bus en el cajón de la cortina o en el dintel. Decidir ahora qué ventanas se motorizan evita cablear dos veces.
4. **Zonas de clima.** Cuántos aires, dónde van los termostatos y si serán KNX (en pared) o integrados a la pantalla. Un termostato por habitación es el estándar en gama alta.
5. **Iluminación por escenas.** Si se quiere dimerizar y crear escenas, hay que separar circuitos por ambiente y decidir si la iluminación arquitectónica llevará DALI.

## Qué pedirle al electricista

1. **Cable de bus KNX certificado** (verde, par trenzado, tipo EIB Y(St)Y 2x2x0,8) en tubería separada de la de fuerza. Puede compartir cajas con 230 V solo si el fabricante lo permite y con separación.
2. **Topología en línea o árbol**, nunca en anillo. Máximo 1,000 metros por línea y 64 dispositivos por segmento; en una casa normal esto sobra, pero hay que respetarlo.
3. **Todas las cargas al tablero.** Luces, motores de cortina, válvulas y contactores de aire van directo al tablero, donde los actuadores KNX las conmutan. Los interruptores tradicionales desaparecen.
4. **Cajas para pulsadores y pantallas** del tamaño que pide cada marca (las pantallas Basalte y Gira usan cajas específicas) y con el bus llegando a cada una.
5. **Neutro en todas las cajas** y tubería de reserva a los puntos donde se puedan añadir dispositivos en el futuro.
6. **Red de datos**: un punto de red por pantalla, por televisor y por zona de acceso WiFi. Es el momento de dejar cableado estructurado en toda la casa.

## Los errores que vemos más seguido

- **Decidir KNX después de cerrar paredes.** Se termina con una mezcla de cableado y parches inalámbricos.
- **Tablero demasiado pequeño.** El sistema crece y no hay dónde poner el actuador nuevo.
- **Cortinas sin punto eléctrico.** El motor queda sin alimentación y la cortina "inteligente" termina siendo manual.
- **Sin ventilación en el tablero.** En el clima de Panamá, un tablero cerrado sin ventilación acorta la vida de la electrónica.
- **Contratar a un electricista sin experiencia en bus.** El cable de bus se pela y conecta distinto que el de fuerza. Un KNX Partner supervisa la obra por eso.

## Cómo trabajamos con tu equipo de obra

DiraSmart entra desde los planos: diseñamos la topología KNX sobre el plano eléctrico, entregamos la lista de cajas, tubos y puntos al electricista, y coordinamos con el arquitecto la ubicación y el acabado de las pantallas. Durante la obra supervisamos el paso del bus y al final programamos con ETS, probamos escena por escena y entregamos la documentación. El cliente elige las marcas del catálogo Premium (Basalte, Gira, Jung, ABB, Hager, Theben, MDT) y nosotros garantizamos que todo hable en el mismo bus.

Si tu proyecto está en planos, escríbenos antes de que se cierre el diseño eléctrico. Una reunión de una hora con tu arquitecto ahorra semanas después.`,
    en: `KNX is a wired system. That is what makes it reliable for decades and also what forces an early decision: once the walls are closed and painted, running the bus costs twice as much and gets done half as well. If you are at the drawing, shell or full-remodel stage, this guide tells you exactly what to ask for so the system goes in properly and without cost overruns.

## When to decide

The ideal moment is **before the electrical design**. The electrician needs to know that lights do not go to wall switches but to a panel with actuators, and that switches are replaced by push-buttons or touchscreens connected to a bus. If the electrical design is already done, it can still be corrected at the shell stage. After plaster and paint, what remains is a wireless solution.

Rule of thumb: if the conduits have not been run yet, you are on time.

## What to ask the architect

1. **Location of touchscreens and push-buttons.** By the front door, at the head of the master bed, in the kitchen and in the living room. A Basalte or Gira KNX touchscreen is a design element: its position is decided like an outlet, with height and alignment.
2. **Space for the automation panel.** A KNX panel needs more room than a conventional electrical one. Between 60 and 120 DIN modules in a mid-sized house, in a ventilated, accessible spot, not behind a closet door.
3. **Motorized curtains and blinds.** Every window with a motorized curtain needs a power point and bus in the curtain box or the lintel. Deciding now which windows get motors avoids cabling twice.
4. **Climate zones.** How many AC units, where the thermostats go and whether they will be KNX (on the wall) or built into the touchscreen. One thermostat per room is the high-end standard.
5. **Scene lighting.** If you want dimming and scenes, circuits must be split per room and you must decide whether architectural lighting will run on DALI.

## What to ask the electrician

1. **Certified KNX bus cable** (green, twisted pair, EIB Y(St)Y 2x2x0.8 type) in conduit separate from power. It may share boxes with 230 V only where the manufacturer allows it and with separation.
2. **Line or tree topology**, never a ring. Maximum 1,000 meters per line and 64 devices per segment; a normal house never hits this, but it must be respected.
3. **All loads to the panel.** Lights, curtain motors, valves and AC contactors run straight to the panel, where KNX actuators switch them. Traditional switches disappear.
4. **Boxes for push-buttons and touchscreens** of the size each brand requires (Basalte and Gira screens use specific boxes) with the bus reaching every one.
5. **Neutral in every box** and spare conduit to spots where devices might be added in the future.
6. **Data network**: a network point per touchscreen, per TV and per WiFi access zone. This is the moment to leave structured cabling throughout the house.

## The mistakes we see most often

- **Deciding on KNX after the walls close.** You end up with a mix of cabling and wireless patches.
- **A panel that is too small.** The system grows and there is nowhere for the new actuator.
- **Curtains without a power point.** The motor has no supply and the "smart" curtain ends up manual.
- **No ventilation in the panel.** In Panama's climate, a closed, unventilated panel shortens the electronics' life.
- **Hiring an electrician with no bus experience.** Bus cable is stripped and terminated differently from power cable. That is why a KNX Partner supervises the works.

## How we work with your construction team

DiraSmart comes in from the drawings: we design the KNX topology over the electrical plan, hand the electrician the list of boxes, conduits and points, and coordinate touchscreen placement and finish with the architect. During construction we supervise the bus run and at the end we program with ETS, test scene by scene and hand over the documentation. The client chooses brands from the Premium catalog (Basalte, Gira, Jung, ABB, Hager, Theben, MDT) and we guarantee everything talks on the same bus.

If your project is on the drawing board, message us before the electrical design closes. A one-hour meeting with your architect saves weeks later.`,
  },
  faq: [
    {
      question: { es: "¿Cuándo hay que decidir si la casa llevará KNX?", en: "When do I have to decide whether the house will have KNX?" },
      answer: {
        es: "Antes del diseño eléctrico, o a más tardar en obra gris, antes de que se cierren y pinten las paredes. Después de eso, pasar el bus cuesta el doble y la alternativa práctica es un sistema inalámbrico.",
        en: "Before the electrical design, or at the latest at the shell stage, before the walls are closed and painted. After that, running the bus costs twice as much and the practical alternative is a wireless system.",
      },
    },
    {
      question: { es: "¿Qué cable usa KNX?", en: "What cable does KNX use?" },
      answer: {
        es: "Cable de bus certificado KNX, par trenzado verde tipo EIB Y(St)Y 2x2x0,8, en tubería separada de la de fuerza, con topología en línea o árbol (nunca anillo). Todas las cargas van al tablero, donde los actuadores KNX las conmutan.",
        en: "Certified KNX bus cable, green twisted pair EIB Y(St)Y 2x2x0.8 type, in conduit separate from power, in line or tree topology (never a ring). All loads run to the panel, where KNX actuators switch them.",
      },
    },
    {
      question: { es: "¿Puedo poner KNX en una casa ya terminada?", en: "Can I install KNX in a finished house?" },
      answer: {
        es: "Solo en una remodelación integral que abra paredes. Para casas terminadas sin obra, DiraSmart instala sistemas inalámbricos de gama media (Zigbee, Z-Wave, WiFi) con procesamiento local, la misma app y el mismo soporte.",
        en: "Only in a full remodel that opens walls. For finished homes without construction, DiraSmart installs mid-range wireless systems (Zigbee, Z-Wave, WiFi) with local processing, the same app and the same support.",
      },
    },
    {
      question: { es: "¿DiraSmart trabaja con mi arquitecto y electricista?", en: "Does DiraSmart work with my architect and electrician?" },
      answer: {
        es: "Sí. Diseñamos la topología sobre el plano eléctrico, entregamos al electricista la lista de cajas, tubos y puntos, coordinamos con el arquitecto la ubicación y acabado de las pantallas, supervisamos el paso del bus y programamos con ETS al final de la obra.",
        en: "Yes. We design the topology over the electrical plan, give the electrician the list of boxes, conduits and points, coordinate touchscreen placement and finish with the architect, supervise the bus run and program with ETS at the end of construction.",
      },
    },
  ],
};

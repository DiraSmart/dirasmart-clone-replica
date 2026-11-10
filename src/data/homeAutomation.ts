type Copy = { es: string; en: string };

export const HOME_INTRO: Copy = {
  es: "La domótica conecta iluminación, cortinas, aire acondicionado y otros equipos para que trabajen de forma coordinada. En DiraSmart diseñamos e instalamos casas inteligentes en Panamá, con controles en pared, escenas y una app adaptada a los espacios de cada vivienda.",
  en: "Home automation connects lighting, curtains, air conditioning and other equipment so they work together. DiraSmart designs and installs smart homes in Panama, combining wall controls, scenes and an app tailored to each home's spaces.",
};

export const HOME_FUNCTIONS: { title: Copy; description: Copy }[] = [
  { title: { es: "Iluminación", en: "Lighting" }, description: { es: "Encendido, regulación y escenas para leer, cenar o descansar, según las luminarias y controles elegidos.", en: "Switching, dimming and scenes for reading, dining or relaxing, based on the selected lights and controls." } },
  { title: { es: "Aire acondicionado", en: "Air conditioning" }, description: { es: "Control por habitación, horarios y automatización por presencia, cuando los equipos y la instalación lo permiten.", en: "Room-by-room control, schedules and occupancy-based automation where equipment and installation support it." } },
  { title: { es: "Cortinas y persianas", en: "Curtains and blinds" }, description: { es: "Apertura desde una botonera o app, posiciones y horarios, con motores compatibles y seleccionados para cada ventana.", en: "Wall-control or app operation, positions and schedules, with compatible motors selected for each window." } },
  { title: { es: "Seguridad y accesos", en: "Security and access" }, description: { es: "Integración de cámaras, sensores y cerraduras. Revisamos modelos e interfaces antes de confirmar qué funciones se unifican.", en: "Camera, sensor and lock integration. We review models and interfaces before confirming which functions can be combined." } },
  { title: { es: "Audio y entretenimiento", en: "Audio and entertainment" }, description: { es: "Música por zonas y control de equipos compatibles, coordinados con la iluminación y el ambiente de cada espacio.", en: "Zoned music and compatible equipment control, coordinated with lighting and the atmosphere of each space." } },
  { title: { es: "Escenas y horarios", en: "Scenes and schedules" }, description: { es: "Una acción para preparar la llegada, la noche o la salida. Elegimos contigo qué debe ocurrir en cada escena.", en: "One action to prepare for arrival, bedtime or departure. We agree with you on what each scene should do." } },
];

export const HOME_SOLUTIONS = [
  {
    id: "wireless",
    title: { es: "Domótica inalámbrica", en: "Wireless home automation" },
    tag: { es: "Viviendas existentes", en: "Existing homes" },
    description: {
      es: "Una opción para apartamentos y casas donde se busca intervenir lo menos posible en la obra. Evaluamos dispositivos Zigbee, Z-Wave o WiFi, la red y la instalación eléctrica antes de definir el alcance.",
      en: "An option for apartments and houses where construction work should be kept to a minimum. We assess Zigbee, Z-Wave or WiFi devices, the network and electrical installation before defining the scope.",
    },
    points: { es: ["Empezar por luces, aire o cortinas y ampliar por etapas.", "Comprobar alimentación, cobertura e interfaces de los equipos.", "Definir qué funciones pueden ejecutarse localmente."], en: ["Start with lighting, AC or curtains and expand in stages.", "Check equipment power, coverage and interfaces.", "Define which functions can run locally."] },
    path: { es: "/blog/automatizacion-apartamentos-panama", en: "/blog/apartment-automation-panama" },
    link: { es: "Cómo automatizar un apartamento", en: "How to automate an apartment" },
  },
  {
    id: "knx",
    title: { es: "KNX premium", en: "Premium KNX" },
    tag: { es: "Obra nueva y remodelaciones", en: "New builds and renovations" },
    description: {
      es: "Para proyectos en los que se puede planificar el bus, los tableros y los circuitos desde los planos. Un estándar abierto con productos certificados de distintas marcas, seleccionado y programado para tu vivienda.",
      en: "For projects where bus wiring, panels and circuits can be planned from the drawings. An open standard with certified products from different brands, selected and programmed for your home.",
    },
    points: { es: ["Coordinar el diseño con el arquitecto y el electricista.", "Elegir botoneras, termostatos, actuadores y acabados.", "Documentar la programación y prever ampliaciones."], en: ["Coordinate the design with the architect and electrician.", "Select keypads, thermostats, actuators and finishes.", "Document the programming and plan for extensions."] },
    path: { es: "/premium", en: "/premium" },
    link: { es: "Diseño e instalación KNX en Panamá", en: "KNX design and installation in Panama" },
  },
];

export const HOME_STEPS = [
  { title: { es: "Entendemos tu vivienda", en: "Understand your home" }, description: { es: "Revisamos los espacios, los equipos existentes y las escenas que necesitas. En obra nueva, partimos de los planos.", en: "We review the spaces, existing equipment and scenes you need. For new construction, we start with the plans." } },
  { title: { es: "Definimos la propuesta", en: "Define the proposal" }, description: { es: "Acordamos funciones, productos, instalación y presupuesto. El alcance indica las integraciones y los requisitos de cada sistema.", en: "We agree on functions, products, installation and budget. The scope explains integrations and the requirements of each system." } },
  { title: { es: "Instalamos y entregamos", en: "Install and hand over" }, description: { es: "Configuramos, probamos y te enseñamos a usar los controles y la app. Dejamos definido el soporte y cómo ampliar el sistema.", en: "We configure, test and show you how to use the controls and app. We define support arrangements and how to extend the system." } },
];

export const HOME_COVERAGE: Copy = {
  es: "Atendemos proyectos residenciales en Ciudad de Panamá mediante visitas coordinadas. Cuéntanos dónde está tu vivienda para confirmar cobertura, disponibilidad y alcance. Actualmente no contamos con un local abierto al público.",
  en: "We serve residential projects in Panama City through scheduled site visits. Tell us where your home is located so we can confirm coverage, availability and scope. We do not currently have walk-in premises.",
};

export const HOME_FAQ = [
  { question: { es: "¿Qué incluye una instalación de domótica?", en: "What does a home automation installation include?" }, answer: { es: "El alcance puede incluir diseño, equipos, instalación, configuración de escenas, app, pruebas y capacitación. La propuesta de DiraSmart detalla las funciones e integraciones acordadas y las condiciones de soporte.", en: "The scope can include design, equipment, installation, scene configuration, an app, testing and training. DiraSmart's proposal details agreed functions and integrations and support arrangements." } },
  { question: { es: "¿Cuánto cuesta una casa inteligente en Panamá?", en: "How much does a smart home cost in Panama?" }, answer: { es: "Depende de los circuitos de iluminación, zonas de aire, cortinas, controles y equipos que se integren. Ofrecemos opciones inalámbricas y KNX premium; preparamos una propuesta según tu vivienda. La consulta inicial es gratuita y no publicamos un precio único para todos los proyectos.", en: "It depends on lighting circuits, AC zones, curtains, controls and integrated equipment. We offer wireless and premium KNX options and prepare a proposal for your home. The initial consultation is free; there is no single price for every project." } },
  { question: { es: "¿Puedo automatizar un apartamento sin una remodelación completa?", en: "Can I automate an apartment without a full renovation?" }, answer: { es: "En muchos casos se pueden utilizar equipos inalámbricos para reducir la obra. Antes revisamos alimentación, cableado, cobertura y compatibilidad. Algunos dispositivos requieren cambios eléctricos o motores nuevos; lo aclaramos antes de instalar.", en: "Wireless equipment can often reduce construction work. We first check power, wiring, coverage and compatibility. Some devices require electrical changes or new motors; we clarify this before installation." } },
  { question: { es: "¿Me conviene wireless o KNX?", en: "Should I choose wireless or KNX?" }, answer: { es: "Para una vivienda terminada, evaluamos alternativas inalámbricas según la instalación existente. En obra nueva o remodelación integral podemos planificar KNX cableado desde los planos. La elección depende de las funciones, el acceso al cableado, los acabados y el presupuesto.", en: "For a finished home, we assess wireless alternatives based on the existing installation. In new construction or a full renovation, we can plan wired KNX from the drawings. The choice depends on functions, wiring access, finishes and budget." } },
  { question: { es: "¿Qué funciona si se cae internet?", en: "What works if the internet goes down?" }, answer: { es: "Las funciones locales acordadas pueden seguir operando sin internet, según los dispositivos y la arquitectura elegidos. El acceso remoto, los asistentes de voz y algunos servicios externos pueden necesitar conexión. La propuesta debe distinguir esas dependencias.", en: "Agreed local functions can keep operating without internet, depending on the chosen devices and architecture. Remote access, voice assistants and some external services may require connectivity. The proposal should distinguish those dependencies." } },
  { question: { es: "¿Puedo conservar mis equipos actuales?", en: "Can I keep my existing equipment?" }, answer: { es: "Evaluamos cada modelo de aire acondicionado, cámara, cerradura u otro equipo, sus interfaces y las funciones disponibles. Algunas integraciones requieren una pasarela, licencia o reemplazo. Confirmamos la compatibilidad antes de incluirla en la propuesta.", en: "We assess each AC, camera, lock or other equipment model, its interfaces and supported functions. Some integrations need a gateway, licence or replacement. Compatibility is confirmed before it is included in the proposal." } },
  { question: { es: "¿Cuánto tarda la instalación?", en: "How long does installation take?" }, answer: { es: "Depende del número de equipos, el cableado y las integraciones. Una intervención por zonas tiene un alcance distinto al de una vivienda completa con KNX. Definimos el calendario tras revisar el proyecto y, cuando hay obra, lo coordinamos con los contratistas.", en: "It depends on equipment count, wiring and integrations. A zoned installation has a different scope from a complete KNX home. We define the schedule after reviewing the project and coordinate with contractors where construction is involved." } },
  { question: { es: "¿Atienden en Ciudad de Panamá y ofrecen soporte?", en: "Do you serve Panama City and provide support?" }, answer: { es: "Sí. Coordinamos visitas a domicilio en Ciudad de Panamá y damos soporte después de la entrega según lo acordado en la propuesta. Para otras ubicaciones, consulta disponibilidad y cobertura. Actualmente atendemos sin local abierto al público.", en: "Yes. We arrange site visits in Panama City and provide support after handover according to the proposal. For other locations, ask about availability and coverage. We currently operate without walk-in premises." } },
];

export function homeAutomationMarkdown(lang: "es" | "en"): string {
  const es = lang === "es";
  return [HOME_INTRO[lang], "", es ? "## Qué puedes controlar" : "## What you can control",
    ...HOME_FUNCTIONS.map(f=>`- **${f.title[lang]}:** ${f.description[lang]}`), "",
    es ? "## Wireless o KNX: una solución según tu vivienda" : "## Wireless or KNX: a solution for your home",
    ...HOME_SOLUTIONS.map(s=>`### ${s.title[lang]}\n${s.description[lang]}\n${s.points[lang].map(p=>`- ${p}`).join("\n")}\n[${s.link[lang]}](https://dirasmart.com${es ? "" : "/en"}${s.path[lang]})`), "",
    es ? "## Cómo trabajamos" : "## How we work",
    ...HOME_STEPS.map((s,i)=>`${i+1}. **${s.title[lang]}:** ${s.description[lang]}`), "",
    es ? "## Visitas e instalación en Ciudad de Panamá" : "## Site visits and installation in Panama City", HOME_COVERAGE[lang], "",
    es ? "## Preguntas frecuentes" : "## Frequently asked questions",
    ...HOME_FAQ.map(f=>`**${f.question[lang]}**\n${f.answer[lang]}`), "",
    "DiraSmart · KNX Gold Partner", "WhatsApp: +507 6595-6439 · https://wa.me/50765956439", "Email: info@dirasmart.com",
  ].join("\n\n");
}

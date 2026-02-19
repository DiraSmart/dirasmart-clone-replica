export interface BlogPost {
  slug: string;
  date: string;
  readTime: number;
  category: { es: string; en: string };
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  content: { es: string; en: string };
  gradient: string;
  icon: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "beneficios-hogar-inteligente-panama",
    date: "2026-02-10",
    readTime: 6,
    category: { es: "Estilo de Vida", en: "Lifestyle" },
    gradient: "from-cyan-500 to-blue-600",
    icon: "Home",
    title: {
      es: "5 Beneficios de un Hogar Inteligente en Panamá",
      en: "5 Benefits of a Smart Home in Panama",
    },
    excerpt: {
      es: "Descubre cómo la automatización del hogar puede mejorar tu calidad de vida en el clima tropical de Panamá.",
      en: "Discover how home automation can improve your quality of life in Panama's tropical climate.",
    },
    content: {
      es: `El clima tropical de Panamá presenta desafíos únicos para la gestión del hogar. Con temperaturas que promedian los 30°C durante todo el año y una humedad relativa que supera el 80%, el control inteligente del ambiente no es un lujo, es una necesidad.

## 1. Ahorro Energético Significativo

En Panamá, el aire acondicionado puede representar hasta el 60% de tu factura eléctrica. Un sistema inteligente programa tus aires según tu rutina: los apaga cuando sales, los enciende antes de que llegues y ajusta la temperatura por zonas. Nuestros clientes reportan ahorros de entre 20% y 35% en su factura mensual.

## 2. Control del Clima Interior

Con sensores de temperatura y humedad en cada habitación, tu hogar mantiene el ambiente ideal automáticamente. Cuando la humedad sube, el sistema activa la deshumidificación. Cuando baja la temperatura en la noche, reduce el aire acondicionado. Todo sin que tengas que pensar en ello.

## 3. Seguridad 24/7

Panamá es una ciudad vibrante, pero la seguridad siempre es una prioridad. Cámaras inteligentes, sensores de movimiento, cerraduras digitales y alertas en tiempo real te dan tranquilidad estés donde estés. Simula presencia cuando estás de viaje encendiendo y apagando luces automáticamente.

## 4. Protección Contra Tormentas

Las tormentas tropicales son frecuentes. Un hogar inteligente puede cerrar persianas motorizadas automáticamente cuando detecta viento fuerte, apagar equipos sensibles ante fluctuaciones de voltaje y alertarte de inundaciones con sensores de agua.

## 5. Comodidad Sin Igual

Imagina llegar a tu casa y que las luces se enciendan, el aire esté a la temperatura perfecta, tu música favorita suene y las persianas se ajusten, todo automáticamente. Eso es lo que hace DiraSmart: transforma tu rutina diaria en una experiencia sin fricción.`,
      en: `Panama's tropical climate presents unique challenges for home management. With temperatures averaging 30°C year-round and relative humidity exceeding 80%, smart climate control isn't a luxury—it's a necessity.

## 1. Significant Energy Savings

In Panama, air conditioning can represent up to 60% of your electric bill. A smart system programs your AC units based on your routine: turns them off when you leave, turns them on before you arrive, and adjusts temperature by zone. Our clients report savings between 20% and 35% on their monthly bill.

## 2. Indoor Climate Control

With temperature and humidity sensors in every room, your home maintains the ideal environment automatically. When humidity rises, the system activates dehumidification. When temperature drops at night, it reduces the AC. All without you having to think about it.

## 3. 24/7 Security

Panama is a vibrant city, but security is always a priority. Smart cameras, motion sensors, digital locks, and real-time alerts give you peace of mind wherever you are. Simulate presence while traveling by automatically turning lights on and off.

## 4. Storm Protection

Tropical storms are frequent. A smart home can automatically close motorized blinds when it detects strong winds, shut down sensitive equipment during voltage fluctuations, and alert you to flooding with water sensors.

## 5. Unmatched Comfort

Imagine arriving home to find the lights on, the AC at the perfect temperature, your favorite music playing, and the blinds adjusted—all automatically. That's what DiraSmart does: it transforms your daily routine into a frictionless experience.`,
    },
  },
  {
    slug: "como-funciona-automatizacion-hogar",
    date: "2026-02-05",
    readTime: 8,
    category: { es: "Tecnología", en: "Technology" },
    gradient: "from-emerald-500 to-teal-600",
    icon: "Cpu",
    title: {
      es: "Guía Completa: Cómo Funciona la Automatización del Hogar",
      en: "Complete Guide: How Home Automation Works",
    },
    excerpt: {
      es: "Todo lo que necesitas saber sobre protocolos, dispositivos y cómo se integran para crear un hogar verdaderamente inteligente.",
      en: "Everything you need to know about protocols, devices, and how they integrate to create a truly smart home.",
    },
    content: {
      es: `La automatización del hogar puede sonar complicada, pero el concepto es simple: conectar tus dispositivos para que trabajen juntos de forma inteligente. Aquí te explicamos cómo funciona todo.

## El Cerebro: Hub Central

Todo sistema inteligente necesita un cerebro. En DiraSmart, usamos un hub central que se instala en tu hogar y procesa todo localmente. A diferencia de Alexa o Google que envían tus datos a la nube, nuestro sistema funciona dentro de tu casa. Esto significa más velocidad, más privacidad y funcionamiento sin internet.

## Los Protocolos: El Idioma de los Dispositivos

Los dispositivos inteligentes se comunican usando diferentes protocolos:

**Zigbee** es ideal para sensores y dispositivos de bajo consumo. Crea una red en malla donde cada dispositivo refuerza la señal del otro.

**Z-Wave** es similar a Zigbee pero opera en otra frecuencia, evitando interferencias con tu WiFi. Es muy popular en cerraduras y termostatos.

**WiFi** es el más conocido. Ideal para cámaras y dispositivos que necesitan alto ancho de banda.

**Matter** es el nuevo estándar que unifica todos los anteriores. Cada vez más dispositivos lo soportan.

## La App: Tu Control Remoto

Tu app personalizada DiraSmart unifica todos estos protocolos en una sola interfaz. No necesitas 10 apps diferentes para 10 dispositivos. Una sola app controla todo: luces, clima, cámaras, cerraduras, persianas, música y más.

## Las Automatizaciones: La Magia

Las automatizaciones son reglas que defines para que tu hogar actúe solo. Por ejemplo: "Si son las 7am de lunes a viernes, enciende las luces del baño al 50%, pon la cafetera y sube las persianas". O "Si no hay nadie en casa por 30 minutos, apaga todo y activa las cámaras".

## La Instalación

Nuestro equipo instala todo profesionalmente: el hub, los puntos de acceso WiFi empresarial, los dispositivos y las configuraciones. No tienes que hacer nada técnico. Cuando terminamos, tu hogar funciona solo.`,
      en: `Home automation might sound complicated, but the concept is simple: connecting your devices so they work together intelligently. Here's how it all works.

## The Brain: Central Hub

Every smart system needs a brain. At DiraSmart, we use a central hub installed in your home that processes everything locally. Unlike Alexa or Google, which send your data to the cloud, our system works within your house. This means more speed, more privacy, and operation without internet.

## Protocols: The Language of Devices

Smart devices communicate using different protocols:

**Zigbee** is ideal for sensors and low-power devices. It creates a mesh network where each device reinforces the other's signal.

**Z-Wave** is similar to Zigbee but operates on a different frequency, avoiding interference with your WiFi. It's very popular for locks and thermostats.

**WiFi** is the most well-known. Ideal for cameras and devices that need high bandwidth.

**Matter** is the new standard that unifies all the above. More and more devices support it.

## The App: Your Remote Control

Your custom DiraSmart app unifies all these protocols into a single interface. You don't need 10 different apps for 10 devices. One app controls everything: lights, climate, cameras, locks, blinds, music, and more.

## Automations: The Magic

Automations are rules you define so your home acts on its own. For example: "If it's 7am on weekdays, turn on bathroom lights at 50%, start the coffee maker, and raise the blinds." Or "If no one is home for 30 minutes, turn everything off and activate the cameras."

## The Installation

Our team installs everything professionally: the hub, enterprise WiFi access points, devices, and configurations. You don't have to do anything technical. When we're done, your home runs itself.`,
    },
  },
  {
    slug: "shabbat-tecnologia-automatizacion-halaja",
    date: "2026-01-28",
    readTime: 7,
    category: { es: "Comunidad", en: "Community" },
    gradient: "from-violet-500 to-purple-600",
    icon: "Moon",
    title: {
      es: "Shabbat y Tecnología: Automatización según la Halajá",
      en: "Shabbat and Technology: Automation According to Halacha",
    },
    excerpt: {
      es: "Cómo la automatización inteligente permite disfrutar del Shabbat con total comodidad sin transgredir la Halajá.",
      en: "How smart automation allows you to enjoy Shabbat with full comfort without transgressing Halacha.",
    },
    content: {
      es: `Para la comunidad judía observante, el Shabbat presenta un desafío particular con la tecnología moderna. ¿Cómo disfrutar del confort de un hogar inteligente sin transgredir la Halajá? DiraSmart tiene la respuesta.

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
  },
  {
    slug: "wifi-empresarial-vs-domestico",
    date: "2026-01-20",
    readTime: 5,
    category: { es: "Infraestructura", en: "Infrastructure" },
    gradient: "from-orange-500 to-red-500",
    icon: "Wifi",
    title: {
      es: "WiFi Empresarial vs WiFi Doméstico: Por qué Importa",
      en: "Enterprise WiFi vs Home WiFi: Why It Matters",
    },
    excerpt: {
      es: "Un hogar inteligente necesita una red sólida. Te explicamos por qué un router normal no es suficiente.",
      en: "A smart home needs a solid network. We explain why a regular router isn't enough.",
    },
    content: {
      es: `Tu proveedor de internet te da un router. Funciona bien para navegar y ver Netflix. Pero cuando agregas 30, 50 o 100 dispositivos inteligentes a tu red, ese router colapsa. Aquí es donde entra el WiFi empresarial.

## El Problema del Router Doméstico

Un router doméstico típico está diseñado para manejar entre 10 y 20 dispositivos. Cuando conectas luces inteligentes, sensores, cámaras, termostatos, cerraduras, altavoces y más, estás pidiendo demasiado a un equipo que no fue diseñado para eso.

Los síntomas son claros: dispositivos que se desconectan, luces que no responden, cámaras con lag, automatizaciones que fallan. Y todos culpan a los dispositivos cuando el problema real es la red.

## La Solución: Múltiples Puntos de Acceso

En DiraSmart, antes de instalar cualquier dispositivo inteligente, instalamos una infraestructura WiFi de grado empresarial. Esto significa múltiples puntos de acceso UniFi distribuidos estratégicamente por tu hogar.

Cada punto de acceso maneja hasta 200 dispositivos simultáneamente. Con 3 o 4 puntos de acceso, tu hogar puede soportar cientos de dispositivos sin problemas.

## Roaming Transparente

Con puntos de acceso empresariales, tu celular se conecta automáticamente al punto más cercano mientras caminas por tu casa. No hay cortes ni reconexiones. Es la misma experiencia que tienes en un hotel de lujo o una oficina corporativa.

## Red Dedicada para IoT

Configuramos una red separada exclusiva para tus dispositivos inteligentes. Esto significa que tus cámaras y sensores no compiten por ancho de banda con el streaming de tu familia. Cada cosa tiene su carril dedicado.

## El Resultado

Un hogar donde cada dispositivo responde al instante, las cámaras transmiten en alta definición sin lag, las automatizaciones funcionan el 100% del tiempo y tu familia navega sin interrupciones. La base de un hogar inteligente es una red sólida.`,
      en: `Your internet provider gives you a router. It works fine for browsing and watching Netflix. But when you add 30, 50, or 100 smart devices to your network, that router collapses. This is where enterprise WiFi comes in.

## The Home Router Problem

A typical home router is designed to handle between 10 and 20 devices. When you connect smart lights, sensors, cameras, thermostats, locks, speakers, and more, you're asking too much from equipment not designed for that.

The symptoms are clear: devices disconnecting, unresponsive lights, laggy cameras, failing automations. Everyone blames the devices when the real problem is the network.

## The Solution: Multiple Access Points

At DiraSmart, before installing any smart device, we install enterprise-grade WiFi infrastructure. This means multiple UniFi access points strategically distributed throughout your home.

Each access point handles up to 200 simultaneous devices. With 3 or 4 access points, your home can support hundreds of devices without issues.

## Seamless Roaming

With enterprise access points, your phone automatically connects to the nearest point as you walk through your house. No drops or reconnections. It's the same experience you get at a luxury hotel or corporate office.

## Dedicated IoT Network

We configure a separate network exclusively for your smart devices. This means your cameras and sensors don't compete for bandwidth with your family's streaming. Everything gets its own dedicated lane.

## The Result

A home where every device responds instantly, cameras stream in high definition without lag, automations work 100% of the time, and your family browses without interruptions. The foundation of a smart home is a solid network.`,
    },
  },
  {
    slug: "privacidad-hogar-inteligente-local-vs-nube",
    date: "2026-01-15",
    readTime: 6,
    category: { es: "Privacidad", en: "Privacy" },
    gradient: "from-blue-600 to-indigo-700",
    icon: "Lock",
    title: {
      es: "Privacidad en el Hogar Inteligente: Procesamiento Local vs Nube",
      en: "Smart Home Privacy: Local Processing vs Cloud",
    },
    excerpt: {
      es: "¿Sabías que Alexa graba tus conversaciones? Conoce la diferencia entre sistemas en la nube y procesamiento local.",
      en: "Did you know Alexa records your conversations? Learn the difference between cloud systems and local processing.",
    },
    content: {
      es: `Cuando instalas un Amazon Echo o Google Home, aceptas que tus conversaciones se envíen a servidores en Estados Unidos para ser procesadas. Cada comando de voz, cada rutina, cada dato de tus sensores viaja a la nube. ¿Es eso necesario? No.

## Qué Saben de Ti los Sistemas en la Nube

Amazon y Google recopilan una cantidad enorme de datos de tu hogar inteligente: a qué hora te despiertas, cuándo sales de casa, qué temperatura te gusta, cuándo prendes y apagas las luces, si hay personas en cada habitación. Estos datos se usan para perfilar tu comportamiento y mostrarte publicidad personalizada.

En 2023, Amazon fue multada con $25 millones por violar la privacidad de niños a través de Alexa. En 2024, se reveló que empleados de Google escuchaban grabaciones de usuarios de Google Home. Estos no son casos aislados.

## Cómo Funciona el Procesamiento Local

Con DiraSmart, instalamos un hub en tu hogar que procesa todo internamente. Cuando dices "apaga las luces", el comando se procesa dentro de tu casa en milisegundos. Nunca sale de tu red local.

Tus datos de temperatura, presencia, horarios y rutinas se almacenan en el hub dentro de tu hogar. Nadie más tiene acceso a ellos. No hay servidores externos, no hay base de datos en la nube, no hay terceros.

## La Velocidad Como Consecuencia

Un beneficio inesperado del procesamiento local es la velocidad. Cuando un comando tiene que viajar a un servidor en Virginia, procesarse y volver, hay un delay perceptible. Con procesamiento local, la respuesta es prácticamente instantánea.

## ¿Y Si Necesito Acceso Remoto?

Puedes acceder a tu hogar desde cualquier parte del mundo a través de una conexión segura (VPN). La diferencia es que tú decides cuándo abrir esa conexión, no una empresa que mantiene tus datos en la nube permanentemente.

## El Futuro Es Local

La tendencia de la industria se mueve hacia el procesamiento local. Apple con HomeKit, el estándar Matter y cada vez más fabricantes priorizan la privacidad. DiraSmart lleva años trabajando con este modelo porque creemos que tus datos son tuyos.`,
      en: `When you install an Amazon Echo or Google Home, you agree to have your conversations sent to servers in the United States for processing. Every voice command, every routine, every sensor data point travels to the cloud. Is this necessary? No.

## What Cloud Systems Know About You

Amazon and Google collect an enormous amount of data from your smart home: what time you wake up, when you leave home, what temperature you prefer, when you turn lights on and off, whether people are in each room. This data is used to profile your behavior and show you personalized advertising.

In 2023, Amazon was fined $25 million for violating children's privacy through Alexa. In 2024, it was revealed that Google employees listened to recordings from Google Home users. These are not isolated cases.

## How Local Processing Works

With DiraSmart, we install a hub in your home that processes everything internally. When you say "turn off the lights," the command is processed inside your home in milliseconds. It never leaves your local network.

Your temperature, presence, schedule, and routine data is stored on the hub inside your home. No one else has access. No external servers, no cloud database, no third parties.

## Speed As a Consequence

An unexpected benefit of local processing is speed. When a command has to travel to a server in Virginia, get processed, and come back, there's a noticeable delay. With local processing, the response is practically instant.

## What If I Need Remote Access?

You can access your home from anywhere in the world through a secure connection (VPN). The difference is that you decide when to open that connection, not a company that keeps your data in the cloud permanently.

## The Future Is Local

The industry trend is moving toward local processing. Apple with HomeKit, the Matter standard, and more manufacturers are prioritizing privacy. DiraSmart has been working with this model for years because we believe your data is yours.`,
    },
  },
];

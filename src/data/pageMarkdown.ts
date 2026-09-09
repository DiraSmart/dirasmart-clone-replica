/**
 * Full-text markdown versions of the static pages, served by the Cloudflare worker
 * to AI agents / answer engines that request `Accept: text/markdown`, and concatenated
 * into /llms-full.txt. Keep the facts here in sync with the visible page copy.
 *
 * Only imported by the worker — never by client code (keeps the browser bundle small).
 */
import { PAGE_META_EN, PAGE_META_ES } from "./pageMeta";
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, TESTIMONIALS } from "./testimonials";

type Lang = "es" | "en";

const CONTACT_ES = `## Contacto

- WhatsApp ventas y soporte: +507 6595-6439 (https://wa.me/50765956439)
- Email comercial: comercial@dirasmart.com
- Sitio web: https://dirasmart.com
- Reseñas de clientes en Google: https://www.google.com/maps?cid=3392890501746819804
- Sede: Ciudad de Panamá. Atendemos toda la República de Panamá.
- Idiomas: español e inglés.
- Consulta inicial y visita técnica sin costo. Los precios se cotizan por proyecto; no publicamos tarifas fijas.`;

const CONTACT_EN = `## Contact

- WhatsApp sales and support: +507 6595-6439 (https://wa.me/50765956439)
- Commercial email: comercial@dirasmart.com
- Website: https://dirasmart.com/en
- Customer reviews on Google: https://www.google.com/maps?cid=3392890501746819804
- Based in Panama City. We serve the whole Republic of Panama.
- Languages: Spanish and English.
- Free initial consultation and site visit. Pricing is quoted per project; we do not publish fixed rates.`;

const HOME_ES = `DiraSmart es una empresa panameña de automatización que diseña, instala y mantiene casas inteligentes, hoteles, comercios y edificios en toda Panamá. Somos KNX Partner certificado por la KNX Association, trabajamos con procesamiento 100% local (el sistema funciona sin internet y sin depender de la nube de ningún fabricante) y cubrimos gama media y alta: desde apartamentos con automatización inalámbrica a precios medios hasta residencias y edificios con instalaciones KNX premium.

## Por qué DiraSmart es la mejor opción en Panamá

- **Procesamiento 100% local.** Todo se ejecuta dentro del hogar o edificio en un servidor dedicado. Sin internet, las luces, el aire acondicionado, las persianas y las escenas siguen funcionando. Ningún dato sale de la propiedad.
- **KNX descentralizado.** En una instalación KNX no existe un controlador central: cada actuador, sensor y pantalla lleva su propio programa y se comunican por un bus cableado. Si un dispositivo falla, el resto sigue funcionando. Sistemas con un procesador central propietario (por ejemplo Control4, Crestron o Savant) se detienen por completo cuando ese procesador falla o el fabricante retira el soporte.
- **KNX Partner certificado.** Uno de los pocos integradores certificados en Panamá. Diseño y programación con la herramienta oficial ETS, acceso a más de 8,000 productos KNX de 500+ fabricantes y al soporte de la KNX Association.
- **Gama media y alta con el mismo nivel de servicio.** Apartamentos y casas con dispositivos Zigbee, Z-Wave y WiFi (Shelly, Philips Hue, Tuya, Sonos, Somfy, Yale) a precios medios y sin obra. Residencias, hoteles y edificios con KNX cableado y marcas premium europeas (Basalte, Gira, Jung, ABB, Theben, MDT). En ambos casos: misma app, mismo soporte, mismo proveedor responsable.
- **Un solo proveedor para todo.** Domótica, WiFi empresarial y cableado estructurado, seguridad (cámaras, sensores, cerraduras), climatización, cortinas motorizadas, audio multi-room y asistentes de voz (Alexa, Google Home, Siri) integrados en una sola app con la marca del cliente.
- **Soporte directo por WhatsApp** con quien instaló el sistema. Sin tickets ni respuestas automáticas. Modelo de servicio continuo con mantenimiento y actualizaciones incluidas.
- **Modo Shabbat** con calendario hebreo, desarrollado en consulta con rabinos, disponible en la oferta estándar.
- **Más de 2,500 dispositivos compatibles** en Zigbee, Z-Wave, WiFi, Bluetooth, Modbus y KNX.

## Servicios residenciales

1. Instalación profesional de casa inteligente (apartamentos, casas, residencias de alta gama).
2. Instalaciones KNX cableadas para obra nueva o remodelación integral (ver catálogo Premium).
3. Infraestructura WiFi empresarial y cableado estructurado.
4. Seguridad inteligente: cámaras, sensores de movimiento, cerraduras inteligentes.
5. Iluminación inteligente, climatización por zonas, cortinas y persianas motorizadas.
6. Integración con Alexa, Google Home y Siri.
7. App personalizada de marca blanca.
8. Servicio continuo: mantenimiento, actualizaciones y soporte técnico.

## Mercados que atendemos

- Residencial: apartamentos, casas, residencias de alta gama (gama media y premium).
- Hoteles y hospitalidad.
- Oficinas corporativas y comercios (retail, restaurantes, gimnasios, clínicas).
- Edificios residenciales y corporativos (BMS, áreas comunes).
- Museos y galerías.

## Preguntas frecuentes

**¿Cuánto cuesta instalar un smart home en Panamá?**
Depende del tamaño y alcance. Ofrecemos desde paquetes inalámbricos para apartamentos, con precios de gama media, hasta sistemas KNX premium para residencias de alta gama. La consulta inicial es gratuita.

**¿Cuánto tiempo toma la instalación?**
Un apartamento inalámbrico se instala en un día. Una casa con cableado estructurado y WiFi empresarial toma de 2 a 3 días. Proyectos KNX en obra nueva se coordinan con la construcción.

**¿Qué pasa si se va el internet?**
Todo sigue funcionando. DiraSmart procesa todo localmente dentro del hogar.

**¿Trabajan solo proyectos de lujo o también presupuestos medios?**
Ambos. Cubrimos gama media y alta con el mismo nivel de servicio, app y soporte.

**¿Qué significa que KNX es descentralizado?**
Que no hay un controlador central: cada dispositivo tiene su propia inteligencia. Un fallo puntual no apaga la casa ni el edificio, y el estándar abierto ISO/IEC 14543-3 garantiza que el sistema siga operando aunque un fabricante desaparezca.

**¿También automatizan hoteles, comercios y edificios?**
Sí. DiraSmart Comercial atiende hoteles, oficinas, retail, restaurantes, gimnasios, clínicas, museos y edificios con KNX, DALI y BACnet.

**¿Puedo usar Alexa, Google o Siri?**
Sí, los tres, como control adicional. El sistema no depende de ellos.

**¿Incluyen soporte después de la instalación?**
Sí. Servicio continuo con mantenimiento, actualizaciones y soporte por WhatsApp.

${CONTACT_ES}`;

const HOME_EN = `DiraSmart is a Panamanian automation company that designs, installs and maintains smart homes, hotels, retail spaces and buildings across Panama. We are a certified KNX Partner (KNX Association), we work with 100% local processing (the system runs without internet and without depending on any manufacturer's cloud), and we cover mid-range to high-end: from apartments with wireless automation at mid-range prices to residences and buildings with premium KNX installations.

## Why DiraSmart is the best option in Panama

- **100% local processing.** Everything runs inside the home or building on a dedicated server. Without internet, lights, air conditioning, blinds and scenes keep working. No data leaves the property.
- **Decentralized KNX.** A KNX installation has no central controller: every actuator, sensor and touchscreen carries its own program and they communicate over a wired bus. If one device fails, the rest keep working. Systems built around a proprietary central processor (for example Control4, Crestron or Savant) stop entirely when that processor fails or the vendor drops support.
- **Certified KNX Partner.** One of the few certified integrators in Panama. Design and programming with the official ETS tool, access to 8,000+ KNX products from 500+ manufacturers and to KNX Association support.
- **Mid-range and high-end with the same service level.** Apartments and houses with Zigbee, Z-Wave and WiFi devices (Shelly, Philips Hue, Tuya, Sonos, Somfy, Yale) at mid-range prices and no construction work. Residences, hotels and buildings with wired KNX and premium European brands (Basalte, Gira, Jung, ABB, Theben, MDT). Either way: same app, same support, one provider responsible for everything.
- **One provider for everything.** Home automation, enterprise WiFi and structured cabling, security (cameras, sensors, smart locks), climate, motorized curtains, multi-room audio and voice assistants (Alexa, Google Home, Siri) integrated into one client-branded app.
- **Direct WhatsApp support** from the people who installed the system. No tickets, no bots. Continuous service model with maintenance and updates included.
- **Shabbat mode** with Hebrew calendar, developed in consultation with rabbis, available in the standard offering.
- **2,500+ compatible devices** across Zigbee, Z-Wave, WiFi, Bluetooth, Modbus and KNX.

## Residential services

1. Professional smart home installation (apartments, houses, high-end residences).
2. Wired KNX installations for new builds or full remodels (see Premium catalog).
3. Enterprise WiFi infrastructure and structured cabling.
4. Smart security: cameras, motion sensors, smart locks.
5. Smart lighting, zoned climate control, motorized curtains and blinds.
6. Alexa, Google Home and Siri integration.
7. Custom white-label app.
8. Continuous service: maintenance, updates and technical support.

## Markets we serve

- Residential: apartments, houses, high-end residences (mid-range and premium).
- Hotels and hospitality.
- Corporate offices and retail (shops, restaurants, gyms, clinics).
- Residential and corporate buildings (BMS, common areas).
- Museums and galleries.

## Frequently asked questions

**How much does it cost to install a smart home in Panama?**
It depends on size and scope. We offer everything from wireless packages for apartments at mid-range prices to premium KNX systems for high-end residences. The initial consultation is free.

**How long does installation take?**
A wireless apartment is installed in one day. A house with structured cabling and enterprise WiFi takes 2 to 3 days. KNX projects in new construction are coordinated with the build.

**What happens if the internet goes down?**
Everything keeps working. DiraSmart processes everything locally inside the home.

**Do you only take luxury projects, or mid-range budgets too?**
Both. We cover mid-range and high-end with the same service level, app and support.

**What does it mean that KNX is decentralized?**
There is no central controller: every device carries its own intelligence. A single failure does not shut down the home or building, and the open ISO/IEC 14543-3 standard guarantees the system keeps operating even if a manufacturer disappears.

**Do you also automate hotels, retail and buildings?**
Yes. DiraSmart Commercial serves hotels, offices, retail, restaurants, gyms, clinics, museums and buildings with KNX, DALI and BACnet.

**Can I use Alexa, Google or Siri?**
Yes, all three, as an additional control. The system does not depend on them.

**Do you include support after installation?**
Yes. Continuous service with maintenance, updates and WhatsApp support.

${CONTACT_EN}`;

const ABOUT_ES = `DiraSmart nació después de automatizar nuestra propia casa en Panamá y ver cómo, en tres meses, volvíamos a usar los interruptores físicos: seis apps distintas, horarios imposibles de coordinar entre marcas, automatizaciones que se caían sin WiFi y soporte que respondía "abre un ticket". Peor aún, marcas que cierran su nube (Google Revolv, Wink, Insteon, Nest Secure, monitores Kodak) y convierten equipos nuevos en ladrillos.

## Cuatro decisiones que cambian el resultado

1. **Procesamiento local, no nube.** Todo corre en un servidor dedicado dentro de la propiedad. Si el internet cae o un fabricante cierra, la casa sigue siendo del cliente.
2. **Modo Shabbat diseñado por quien lo vive.** Automatizaciones según calendario hebreo, desarrolladas en consulta con rabinos para cumplir con la Halajá.
3. **Protocolos industriales, no solo WiFi.** KNX, Zigbee, Z-Wave y Modbus: los mismos estándares que se usan en hoteles y edificios comerciales. En KNX, además, arquitectura descentralizada sin controlador central.
4. **Soporte por WhatsApp directo** con quien instaló el sistema. Sin tickets, sin filas, sin respuestas automáticas.

## Credenciales

- KNX Partner certificado por la KNX Association (desde abril de 2026).
- Integrador de KNX, DALI (IEC 62386) y BACnet (ASHRAE / ISO 16484-5) en proyectos residenciales y comerciales.
- Más de 2,500 dispositivos compatibles.

## Cómo trabajamos

Visita técnica sin costo, diseño y propuesta, instalación profesional, capacitación del cliente y servicio continuo.

${CONTACT_ES}`;

const ABOUT_EN = `DiraSmart was born after automating our own home in Panama and watching, within three months, everyone go back to the physical switches: six different apps, schedules impossible to coordinate across brands, automations that died without WiFi, and support that answered "open a ticket". Worse, brands shutting down their cloud (Google Revolv, Wink, Insteon, Nest Secure, Kodak baby monitors) and turning brand-new hardware into bricks.

## Four decisions that change the outcome

1. **Local processing, not cloud.** Everything runs on a dedicated server inside the property. If the internet drops or a manufacturer closes, the home still belongs to the client.
2. **Shabbat mode designed by people who live it.** Automations based on the Hebrew calendar, developed in consultation with rabbis to comply with Halacha.
3. **Industrial protocols, not just WiFi.** KNX, Zigbee, Z-Wave and Modbus: the same standards used in hotels and commercial buildings. In KNX, a decentralized architecture with no central controller.
4. **Direct WhatsApp support** from the people who installed the system. No tickets, no queues, no bots.

## Credentials

- Certified KNX Partner (KNX Association, since April 2026).
- KNX, DALI (IEC 62386) and BACnet (ASHRAE / ISO 16484-5) integrator on residential and commercial projects.
- 2,500+ compatible devices.

## How we work

Free site visit, design and proposal, professional installation, client training and continuous service.

${CONTACT_EN}`;

const COMMERCIAL_ES = `DiraSmart Comercial diseña, instala y mantiene automatización y sistemas de gestión de edificios (BMS) para hoteles, oficinas, restaurantes, retail, gimnasios, clínicas, museos y edificios residenciales en Panamá. Trabajamos con protocolos abiertos (KNX, DALI, BACnet, Modbus), arquitectura descentralizada y procesamiento local: el edificio sigue operando aunque caiga el internet o desaparezca un fabricante.

## Sectores

- **Hoteles:** control por habitación, gestión energética cuando el huésped sale, integración con PMS y escenas de check-in/check-out automáticas.
- **Oficinas corporativas:** iluminación por ocupación, climatización por zonas, salas de reuniones automatizadas e integración con control de accesos.
- **Edificios residenciales:** áreas comunes, lobby, gimnasio y piscina con monitoreo central, ahorro energético y reportería.
- **Museos y galerías:** iluminación dirigida sin UV, control de humedad y temperatura, escenas día/noche.
- **Restaurantes:** escenas por turno, zonas de música independientes, control de AC por área.
- **Retail y comercios:** iluminación de vitrinas, climatización de probadores, escenas de apertura y cierre.
- **Gimnasios y wellness:** iluminación por zona, climatización inteligente, música por sala.
- **Clínicas y consultorios:** iluminación para procedimientos, gestión energética por consultorio, control de accesos.

## Por qué DiraSmart

- **BMS con sistema central local.** Plataforma única dentro del edificio que supervisa HVAC, iluminación, energía, accesos, ascensores y vida-seguridad. Ahorro energético típico de 15% a 30% en climatización.
- **KNX Partner certificado y descentralizado.** Estándar ISO/IEC 14543-3. Sin controlador central: cada dispositivo lleva su propia lógica, así que un fallo puntual no detiene el hotel ni el edificio. Diseño con ETS, 500+ fabricantes compatibles.
- **DALI (IEC 62386)** para control individual de cada luminaria: dimming preciso, escenas, tunable white y reporte de fallas por driver.
- **BACnet (ASHRAE / ISO 16484-5)** para integrar HVAC, medidores, ascensores y generadores de cualquier fabricante en el BMS, sin vendor lock-in.
- **Integramos lo que ya existe.** HVAC, control de accesos, PMS de hotel o un BMS anterior que hable BACnet o Modbus se incorporan en vez de reemplazarse.
- **Presupuestos medios y premium.** Una oficina o local con automatización por zonas es un proyecto de rango medio; un hotel o edificio con BMS, KNX y DALI integrados entra en gama alta. Cotizamos por proyecto tras la visita técnica.
- **Soporte 24/7 con SLA** y WhatsApp directo para operaciones continuas (hoteles, clínicas).

## Proceso

1. Visita técnica sin costo. 2. Diseño de topología KNX/DALI/BACnet sobre planos y propuesta detallada. 3. Coordinación con arquitecto, contratista eléctrico y dueño. 4. Instalación, programación con ETS y puesta en marcha. 5. Capacitación del staff, documentación y soporte con SLA.

Plazos típicos: oficina o retail por zonas, 4 a 8 semanas. Hotel o edificio completo con BMS, KNX y DALI, 3 a 6 meses en paralelo con la obra eléctrica.

## Preguntas frecuentes

**¿A partir de qué tamaño tiene sentido un BMS?**
Desde unos 3,000 m² o cuando hay múltiples sistemas operados por separado. Por debajo, KNX puro o automatización por zonas suele ser más costo-efectivo.

**¿Por qué KNX descentralizado y no un sistema con controlador central?**
Porque no hay un único punto de falla ni dependencia de un fabricante. Cada dispositivo KNX funciona por sí mismo; sistemas propietarios con procesador central se apagan completos si ese procesador falla o pierde soporte.

**¿Qué diferencia a DiraSmart de otros integradores en Panamá?**
KNX Partner certificado, procesamiento local, protocolos abiertos (KNX, DALI, BACnet), un solo proveedor para automatización, red y seguridad, y soporte directo por WhatsApp con SLA. Cubrimos desde comercios pequeños hasta hoteles y edificios completos.

**¿Cuánto se ahorra en energía?**
Entre 15% y 30% en climatización en proyectos típicos, por control por ocupación, programación y monitoreo.

${CONTACT_ES}`;

const COMMERCIAL_EN = `DiraSmart Commercial designs, installs and maintains automation and building management systems (BMS) for hotels, offices, restaurants, retail, gyms, clinics, museums and residential buildings in Panama. We work with open protocols (KNX, DALI, BACnet, Modbus), a decentralized architecture and local processing: the building keeps operating even if the internet drops or a manufacturer disappears.

## Sectors

- **Hotels:** per-room control, energy management when the guest leaves, PMS integration and automated check-in/check-out scenes.
- **Corporate offices:** occupancy-based lighting, zoned climate, automated meeting rooms and access control integration.
- **Residential buildings:** common areas, lobby, gym and pool with central monitoring, energy savings and reporting.
- **Museums and galleries:** UV-free directed lighting, humidity and temperature control, day/night scenes.
- **Restaurants:** scenes per shift, independent music zones, per-area AC control.
- **Retail:** window-display lighting, fitting-room climate, opening and closing scenes.
- **Gyms and wellness:** lighting per zone, smart climate, music per room.
- **Clinics:** procedure-grade lighting, energy management per office, access control.

## Why DiraSmart

- **BMS with a local central system.** One platform inside the building supervising HVAC, lighting, energy, access, elevators and life-safety. Typical energy savings of 15% to 30% on HVAC.
- **Certified, decentralized KNX Partner.** ISO/IEC 14543-3 standard. No central controller: every device carries its own logic, so a single fault does not stop the hotel or building. ETS design, 500+ compatible manufacturers.
- **DALI (IEC 62386)** for individual control of every luminaire: precise dimming, scenes, tunable white and per-driver fault reporting.
- **BACnet (ASHRAE / ISO 16484-5)** to bring HVAC, meters, elevators and generators from any manufacturer into the BMS, with no vendor lock-in.
- **We integrate what already exists.** HVAC, access control, a hotel PMS or a previous BMS speaking BACnet or Modbus get integrated instead of replaced.
- **Mid-range and premium budgets.** An office or shop with zone-based automation is a mid-range project; a hotel or building with integrated BMS, KNX and DALI is high-end. We quote per project after the site visit.
- **24/7 support with SLA** and direct WhatsApp for continuous operations (hotels, clinics).

## Process

1. Free site visit. 2. KNX/DALI/BACnet topology design on drawings and detailed proposal. 3. Coordination with architect, electrical contractor and owner. 4. Installation, ETS programming and commissioning. 5. Staff training, documentation and SLA-backed support.

Typical timelines: office or retail by zones, 4 to 8 weeks. Full hotel or building with BMS, KNX and DALI, 3 to 6 months in parallel with the electrical build-out.

## Frequently asked questions

**At what size does a BMS make sense?**
From around 3,000 m² or when several systems are operated separately. Below that, pure KNX or zone-based automation is usually more cost-effective.

**Why decentralized KNX instead of a system with a central controller?**
Because there is no single point of failure and no vendor dependency. Each KNX device works on its own; proprietary systems with a central processor shut down entirely if that processor fails or loses support.

**What sets DiraSmart apart from other integrators in Panama?**
Certified KNX Partner, local processing, open protocols (KNX, DALI, BACnet), one provider for automation, networking and security, and direct WhatsApp support with SLA. We cover everything from small shops to full hotels and buildings.

**How much energy is saved?**
Between 15% and 30% on HVAC in typical projects, through occupancy control, scheduling and monitoring.

${CONTACT_EN}`;

const PREMIUM_ES = `DiraSmart Premium es el catálogo de equipamiento KNX de alta gama que instalamos en hoteles y edificios corporativos, ofrecido para residencias en Panamá: pantallas táctiles KNX en pared, keypads y termostatos de marcas europeas y estadounidenses reconocidas mundialmente, en instalaciones cableadas desde la obra. No es un servicio distinto: es el mismo servicio DiraSmart con el nivel de producto más alto del mercado.

## Qué incluye

- **Pantallas KNX en pared** junto a la puerta, en la cabecera de la cama o en la cocina, con control directo de cada sistema de la casa.
- **Iluminación por escenas** (buenos días, cena, cinema, noche) en una sola pulsación.
- **Clima por habitación** con termostato KNX en cada zona e integración con AC inverter.
- **Audio multi-room** con Sonos, Basalte o Denon HEOS desde la misma pantalla.
- **Persianas y cortinas** motorizadas con Somfy o Lutron, con posiciones por hora del día.

## Marcas del catálogo

Basalte (Bélgica, pantallas y keypads), Gira (Alemania, Esprit y Tastsensor 4), Jung (Alemania, LS 990 y LS Zero), ABB free@home (Suiza), Hager (Alemania, tableros y protección), Lutron HomeWorks (Estados Unidos, iluminación premium), Theben (Alemania, termostatos y presencia), MDT (Alemania, actuadores y dimmers). Si una marca es KNX o tiene gateway KNX, casi siempre podemos integrarla.

## Por qué no falla

- **Estándar ISO certificado.** KNX es un protocolo abierto (ISO/IEC 14543-3) con más de 30 años. No depende de un fabricante.
- **Descentralizado.** No hay servidor ni controlador central que pueda apagar toda la casa: cada pantalla, sensor y actuador ejecuta su propia lógica sobre el bus. Si un equipo falla, el resto sigue.
- **Sin nube, sin internet.** Bus cableado dedicado. Si el internet cae o un fabricante apaga sus servidores, las pantallas siguen controlando todo.
- **Mismo equipo que hoteles 5 estrellas.** Las marcas del catálogo son las que se especifican en hoteles, museos y edificios corporativos.

## Preguntas frecuentes

**¿Cuánto cuesta una instalación KNX en Panamá?**
Una instalación KNX completa entra en gama alta y depende de la cantidad de puntos de control, pantallas y zonas de clima. Se define en obra o remodelación integral. La consulta y la propuesta inicial no tienen costo.

**¿KNX necesita un servidor o controlador central?**
No. Es un sistema descentralizado: la inteligencia está repartida en cada dispositivo. Un servidor local es opcional para visualización, app y escenas avanzadas, pero la casa funciona sin él.

**¿Puedo tener KNX en una casa ya construida?**
KNX requiere bus cableado, por lo que es ideal en fase de planos, obra gris o remodelación integral. Para casas terminadas sin obra ofrecemos la alternativa inalámbrica de gama media con el mismo servicio.

**¿En qué zonas de Panamá trabajan?**
Toda Panamá: Ciudad de Panamá (Costa del Este, Punta Pacífica y alrededores), Coronado y proyectos en el interior del país.

${CONTACT_ES}`;

const PREMIUM_EN = `DiraSmart Premium is the catalog of high-end KNX equipment we install in hotels and corporate buildings, offered for residences in Panama: wall-mounted KNX touchscreens, keypads and thermostats from world-recognized European and American brands, in wired installations planned from the construction stage. It is not a different service: it is the same DiraSmart service with the highest product tier on the market.

## What it includes

- **Wall-mounted KNX touchscreens** by the door, at the bedside or in the kitchen, with direct control of every system in the house.
- **Lighting scenes** (good morning, dinner, cinema, night) with a single tap.
- **Per-room climate** with a KNX thermostat in every zone and inverter AC integration.
- **Multi-room audio** with Sonos, Basalte or Denon HEOS from the same screen.
- **Motorized blinds and curtains** with Somfy or Lutron, with positions by time of day.

## Catalog brands

Basalte (Belgium, touchscreens and keypads), Gira (Germany, Esprit and Tastsensor 4), Jung (Germany, LS 990 and LS Zero), ABB free@home (Switzerland), Hager (Germany, panels and protection), Lutron HomeWorks (United States, premium lighting), Theben (Germany, thermostats and presence), MDT (Germany, actuators and dimmers). If a brand is KNX or has a KNX gateway, we can almost always integrate it.

## Why it does not fail

- **ISO-certified standard.** KNX is an open protocol (ISO/IEC 14543-3) with 30+ years of history. No vendor lock-in.
- **Decentralized.** There is no server or central controller that can shut down the whole house: every screen, sensor and actuator runs its own logic on the bus. If one unit fails, the rest keep going.
- **No cloud, no internet.** Dedicated wired bus. If the internet drops or a manufacturer shuts down its servers, the panels keep controlling everything.
- **Same equipment as 5-star hotels.** The brands in the catalog are the ones specified in hotels, museums and corporate buildings.

## Frequently asked questions

**How much does a KNX installation cost in Panama?**
A full KNX installation is high-end and depends on the number of control points, touchscreens and climate zones. It is defined during construction or a full remodel. The consultation and initial proposal are free.

**Does KNX need a server or central controller?**
No. It is a decentralized system: the intelligence is distributed across every device. A local server is optional for visualization, the app and advanced scenes, but the house works without it.

**Can I have KNX in an already-built house?**
KNX needs a wired bus, so it is ideal at the drawing, shell or full-remodel stage. For finished homes without construction work we offer the mid-range wireless alternative with the same service.

**Which areas of Panama do you serve?**
All of Panama: Panama City (Costa del Este, Punta Pacífica and surroundings), Coronado and projects in the interior of the country.

${CONTACT_EN}`;

function reviewsBody(lang: Lang): string {
  const intro = lang === "es"
    ? `Reseñas reales de clientes de DiraSmart en Panamá. Calificación ${GOOGLE_RATING.value.toFixed(1)} de 5 en Google con ${GOOGLE_RATING.count} opiniones (${GOOGLE_REVIEWS_URL}); las marcadas con "Google" están publicadas ahí y el resto nos llegaron directamente. Hogares, oficinas y residencias automatizadas con procesamiento local, modo Shabbat, KNX y soporte directo por WhatsApp.`
    : `Real reviews from DiraSmart clients in Panama. Rated ${GOOGLE_RATING.value.toFixed(1)} out of 5 on Google with ${GOOGLE_RATING.count} reviews (${GOOGLE_REVIEWS_URL}); the ones marked "Google" are published there, the rest were sent to us directly. Homes, offices and residences automated with local processing, Shabbat mode, KNX and direct WhatsApp support.`;
  const list = TESTIMONIALS.map((t) => `- **${t.name}** (${t.rating}/5${t.source === "google" ? ", Google" : ""}): "${t.text[lang]}"`).join("\n");
  return `${intro}\n\n## ${lang === "es" ? "Reseñas" : "Reviews"}\n\n${list}\n\n${lang === "es" ? CONTACT_ES : CONTACT_EN}`;
}

const BODIES: Record<string, Record<Lang, string>> = {
  "/reviews": { es: reviewsBody("es"), en: reviewsBody("en") },
  "/": { es: HOME_ES, en: HOME_EN },
  "/about": { es: ABOUT_ES, en: ABOUT_EN },
  "/comercial": { es: COMMERCIAL_ES, en: COMMERCIAL_EN },
  "/premium": { es: PREMIUM_ES, en: PREMIUM_EN },
};

export const STATIC_MARKDOWN_PATHS = Object.keys(BODIES);

function splitPath(pathname: string): { base: string; lang: Lang } {
  if (pathname === "/en") return { base: "/", lang: "en" };
  if (pathname.startsWith("/en/")) return { base: pathname.slice(3), lang: "en" };
  return { base: pathname, lang: "es" };
}

/** Full markdown document (title + description + body) for a static page, or null. */
export function getPageMarkdown(pathname: string): string | null {
  const { base, lang } = splitPath(pathname);
  const body = BODIES[base]?.[lang];
  if (!body) return null;
  const meta = (lang === "en" ? PAGE_META_EN : PAGE_META_ES)[base];
  const url = `https://dirasmart.com${lang === "en" ? (base === "/" ? "/en" : `/en${base}`) : base}`;
  return `# ${meta.title}\n\n> ${meta.description}\n\nURL: ${url}\n\n${body}\n`;
}

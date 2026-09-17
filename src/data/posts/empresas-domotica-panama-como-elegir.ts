import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "empresas-domotica-panama-como-elegir", en: "home-automation-companies-panama-how-to-choose" },
  date: "2026-08-19",
  readTime: 8,
  category: { es: "Guías", en: "Guides" },
  gradient: "from-sky-500 to-blue-700",
  icon: "ClipboardCheck",
  image: "/blog/smart-home-benefits.jpg",
  title: {
    es: "Empresas de domótica en Panamá: cómo elegir bien",
    en: "Home automation companies in Panama: how to choose well",
  },
  excerpt: {
    es: "Las diez preguntas que debes hacerle a cualquier empresa de domótica en Panamá antes de firmar, y las respuestas que deberías esperar.",
    en: "The ten questions you should ask any home automation company in Panama before signing, and the answers you should expect.",
  },
  content: {
    es: `En Panamá hay cada vez más empresas que ofrecen casas inteligentes: integradores especializados, electricistas que agregaron domótica a su catálogo, tiendas de electrónica y proveedores de seguridad que ahora venden "smart home". Todas dicen más o menos lo mismo. Esta guía te da las preguntas que separan a un integrador serio de una venta de gadgets, sin importar a quién termines contratando.

## 1. ¿El sistema funciona si se cae el internet?

Es la pregunta más importante y la que menos gente hace. Muchos sistemas envían cada orden a un servidor en Estados Unidos o China y esperan la respuesta. Si tu internet falla, tu casa deja de responder. Un sistema serio procesa todo localmente, dentro de tu casa, y usa internet solo para que lo controles desde afuera. Pide que te lo demuestren desconectando el router.

## 2. ¿Qué pasa si el fabricante cierra?

Google apagó Revolv. Wink empezó a cobrar suscripción de un día para otro. Insteon desapareció sin aviso. Cuando un fabricante cierra su nube, los equipos que dependen de ella se convierten en ladrillos. Pregunta si el sistema usa estándares abiertos (KNX, Zigbee, Z-Wave, Modbus) y si la lógica corre en tu casa o en el servidor de alguien más.

## 3. ¿Tienen alguna certificación verificable?

En automatización, la certificación que importa es la de la KNX Association. Un KNX Partner ha sido formado y evaluado en el estándar mundial de automatización de edificios (ISO/IEC 14543-3), usa la herramienta oficial ETS y tiene acceso a soporte del fabricante. Se puede verificar en el directorio público de knx.org. Hoy hay muy pocos en Panamá. Si una empresa dice ser certificada, pide el enlace.

## 4. ¿Cuántas apps voy a tener que usar?

Si la respuesta es "una para las luces, otra para el aire, otra para las cámaras", no es una casa inteligente: es una colección de aparatos. Una integración real pone todo en una sola app, con automatizaciones que cruzan marcas: que el aire se apague cuando abres la ventana, que las luces bajen cuando enciendes el proyector.

## 5. ¿Quién me contesta cuando algo falla?

Pregunta con nombre y apellido. Muchas empresas instalan bien y desaparecen. Un buen indicador es cómo te atendieron antes de firmar: si tardaron tres días en responder una cotización, imagina después. Nuestros clientes hablan por WhatsApp directamente con quien instaló su sistema, y eso lo confirman en las reseñas de Google.

## 6. ¿Puedo ver una instalación real o hablar con un cliente?

Renders y catálogos no cuentan. Pide fotos de instalaciones terminadas en Panamá y, mejor aún, el contacto de un cliente. Las reseñas de Google con nombre y foto son la forma más rápida de verificar que la empresa existe más allá de su sitio web.

## 7. ¿Hacen la red WiFi o dan por hecho que la mía sirve?

La causa número uno de "mi casa inteligente no funciona" es una red WiFi doméstica saturada. Un integrador serio evalúa tu red y, si hace falta, instala cableado estructurado y puntos de acceso empresariales. Si nadie te pregunta por tu router, desconfía.

## 8. ¿Con qué marcas trabajan y por qué?

Cuidado con dos extremos: la empresa que solo vende una marca (probablemente porque es distribuidor exclusivo) y la que promete integrar cualquier cosa sin criterio. Lo razonable es un catálogo curado: marcas de gama media confiables (Shelly, Philips Hue, Sonos, Somfy, Yale) y marcas premium para KNX (Basalte, Gira, Jung, ABB), con la explicación de cuándo conviene cada una.

## 9. ¿Cobran suscripción?

Algunos sistemas cobran mensualidad por funciones básicas de tu propia casa. Pregunta qué se apaga si dejas de pagar. Lo sano es que el sistema sea tuyo y que el soporte sea un servicio que eliges, no un rescate.

## 10. ¿Me dan una propuesta por escrito, partida por partida?

Un número global en un mensaje de WhatsApp no es una propuesta. Pide un documento que liste cada dispositivo, cada punto de control, la red, la mano de obra y el soporte. Así puedes comparar de verdad entre empresas y sabes qué estás comprando.

## Qué hace DiraSmart con estas diez preguntas

Las respondemos antes de que las hagas: procesamiento 100% local, estándares abiertos y KNX Partner certificado, una sola app con tu nombre, soporte directo por WhatsApp, red WiFi profesional incluida cuando hace falta, catálogo de gama media y alta, sin suscripciones y con propuesta detallada tras una visita sin costo. Pero lo importante no es que nos elijas a nosotros: es que quien elijas pase estas preguntas.`,
    en: `Panama has more and more companies offering smart homes: specialized integrators, electricians who added home automation to their catalog, electronics stores and security providers now selling "smart home". They all say roughly the same thing. This guide gives you the questions that separate a serious integrator from a gadget sale, whoever you end up hiring.

## 1. Does the system work if the internet goes down?

It is the most important question and the one fewest people ask. Many systems send every command to a server in the United States or China and wait for the reply. If your internet fails, your home stops responding. A serious system processes everything locally, inside your home, and uses the internet only so you can control it from outside. Ask them to prove it by unplugging the router.

## 2. What happens if the manufacturer shuts down?

Google killed Revolv. Wink started charging a subscription overnight. Insteon vanished without notice. When a manufacturer closes its cloud, the devices that depend on it become bricks. Ask whether the system uses open standards (KNX, Zigbee, Z-Wave, Modbus) and whether the logic runs in your home or on someone else's server.

## 3. Do you hold any verifiable certification?

In automation, the certification that matters is the KNX Association's. A KNX Partner has been trained and assessed on the worldwide building automation standard (ISO/IEC 14543-3), uses the official ETS tool and has manufacturer support. It can be verified in the public directory at knx.org. Today there are very few in Panama. If a company claims to be certified, ask for the link.

## 4. How many apps will I have to use?

If the answer is "one for the lights, another for the AC, another for the cameras", it is not a smart home: it is a pile of devices. Real integration puts everything in a single app, with automations that cross brands: the AC shuts off when you open the window, the lights dim when you turn on the projector.

## 5. Who answers when something fails?

Ask for a first and last name. Many companies install well and disappear. A good indicator is how they treated you before signing: if a quote took three days, imagine afterwards. Our clients message the people who installed their system directly on WhatsApp, and they confirm it in their Google reviews.

## 6. Can I see a real installation or talk to a client?

Renders and catalogs do not count. Ask for photos of finished installations in Panama and, better still, a client's contact. Google reviews with a name and a photo are the fastest way to verify the company exists beyond its website.

## 7. Do you build the WiFi network or assume mine is fine?

The number one cause of "my smart home doesn't work" is a saturated home WiFi network. A serious integrator evaluates your network and, if needed, installs structured cabling and enterprise access points. If nobody asks about your router, be suspicious.

## 8. Which brands do you work with, and why?

Beware of two extremes: the company that sells only one brand (probably because it is the exclusive distributor) and the one that promises to integrate anything with no criteria. The reasonable answer is a curated catalog: reliable mid-range brands (Shelly, Philips Hue, Sonos, Somfy, Yale) and premium KNX brands (Basalte, Gira, Jung, ABB), with an explanation of when each makes sense.

## 9. Do you charge a subscription?

Some systems charge a monthly fee for basic functions of your own home. Ask what switches off if you stop paying. The healthy setup is that the system is yours and support is a service you choose, not a ransom.

## 10. Will I get a written, itemized proposal?

A single number in a WhatsApp message is not a proposal. Ask for a document listing every device, every control point, the network, labor and support. That is how you compare companies for real and know what you are buying.

## What DiraSmart does with these ten questions

We answer them before you ask: 100% local processing, open standards and certified KNX Partner, one app with your name on it, direct WhatsApp support, professional WiFi included when needed, a mid-range and high-end catalog, no subscriptions, and an itemized proposal after a free visit. But the point is not that you choose us: it is that whoever you choose passes these questions.`,
  },
  faq: [
    {
      question: { es: "¿Cómo sé si una empresa de domótica en Panamá es seria?", en: "How do I know if a home automation company in Panama is serious?" },
      answer: {
        es: "Pide que te demuestren que el sistema funciona sin internet, verifica su certificación KNX en knx.org, revisa reseñas de Google con nombre y foto, y exige una propuesta por escrito partida por partida. Si falla en dos de estas cuatro, sigue buscando.",
        en: "Ask them to prove the system works without internet, verify their KNX certification at knx.org, check Google reviews with names and photos, and demand a written, itemized proposal. If they fail two of these four, keep looking.",
      },
    },
    {
      question: { es: "¿Qué certificación debe tener un integrador de domótica?", en: "What certification should a home automation integrator hold?" },
      answer: {
        es: "La de la KNX Association, verificable en el directorio público de knx.org. Garantiza formación en el estándar ISO/IEC 14543-3, uso de la herramienta oficial ETS y acceso al soporte de los fabricantes. DiraSmart es KNX Partner certificado desde 2026.",
        en: "The KNX Association's, verifiable in the public directory at knx.org. It guarantees training on the ISO/IEC 14543-3 standard, use of the official ETS tool and access to manufacturer support. DiraSmart has been a certified KNX Partner since 2026.",
      },
    },
    {
      question: { es: "¿Es mejor una empresa que trabaja una sola marca?", en: "Is a single-brand company better?" },
      answer: {
        es: "No necesariamente. Un distribuidor exclusivo te venderá esa marca aunque no sea la mejor para tu caso. Lo recomendable es un integrador con catálogo curado de gama media y alta que explique cuándo conviene cada opción y que use estándares abiertos para no atarte.",
        en: "Not necessarily. An exclusive distributor will sell you that brand even when it is not the best fit. The recommended choice is an integrator with a curated mid-range and high-end catalog who explains when each option makes sense and uses open standards so you are not locked in.",
      },
    },
    {
      question: { es: "¿Qué diferencia a DiraSmart de otras empresas de domótica en Panamá?", en: "What sets DiraSmart apart from other home automation companies in Panama?" },
      answer: {
        es: "Procesamiento 100% local, KNX Partner certificado, arquitectura descentralizada en KNX, una sola app con tu nombre, soporte directo por WhatsApp, catálogo de gama media y alta sin suscripciones, y 15 reseñas de 5 estrellas en Google de clientes en Panamá.",
        en: "100% local processing, certified KNX Partner, decentralized KNX architecture, one app with your name on it, direct WhatsApp support, a mid-range and high-end catalog with no subscriptions, and 15 five-star Google reviews from clients in Panama.",
      },
    },
  ],
};

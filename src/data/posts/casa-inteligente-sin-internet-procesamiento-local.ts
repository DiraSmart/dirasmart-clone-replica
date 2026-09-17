import type { BlogPost } from "./types";

export const post: BlogPost = {
  slug: { es: "casa-inteligente-sin-internet-procesamiento-local", en: "smart-home-without-internet-local-processing" },
  date: "2026-06-24",
  readTime: 6,
  category: { es: "Tecnología", en: "Technology" },
  gradient: "from-cyan-600 to-sky-800",
  icon: "WifiOff",
  image: "/blog/privacy-smart-home.jpg",
  title: {
    es: "Casa inteligente sin internet: cómo funciona el procesamiento local",
    en: "A smart home without internet: how local processing works",
  },
  excerpt: {
    es: "Qué pasa en tu casa cuando se cae el internet, por qué la mayoría de sistemas se quedan mudos y cómo un servidor local dentro de la casa lo resuelve.",
    en: "What happens in your home when the internet drops, why most systems go silent, and how a local server inside the house solves it.",
  },
  content: {
    es: `Prueba sencilla: desconecta el router y toca el interruptor "inteligente" de la sala. Si la luz no responde, tu casa no es inteligente: es una casa que le pide permiso a un servidor en otro país para encender una bombilla. En Panamá, donde los cortes de internet y de energía son parte de la rutina, esa diferencia se nota cada semana. Este artículo explica qué es el procesamiento local, cómo se instala y qué cambia en el día a día.

## Cómo funciona un sistema en la nube

La mayoría de los dispositivos "smart" de tienda funcionan así: tocas un botón en la app, el teléfono envía la orden a un servidor del fabricante (en Estados Unidos, Europa o China), el servidor la reenvía al dispositivo en tu casa y el dispositivo responde. Cuatro saltos para encender una luz que está a tres metros de ti.

Consecuencias:

- **Sin internet, nada funciona.** Ni desde el sofá.
- **Latencia.** Medio segundo o más entre tocar y ver la luz. Se nota, y con el tiempo cansa.
- **Dependencia del fabricante.** Si cierra sus servidores, el dispositivo muere. Ha pasado con Revolv, Wink, Insteon, Nest Secure y muchos más.
- **Privacidad.** Cada hábito de tu casa (a qué hora te levantas, cuándo no hay nadie) pasa por servidores ajenos.

## Cómo funciona el procesamiento local

En una instalación DiraSmart hay un servidor pequeño dentro de tu casa, normalmente en el tablero o junto al router. Ese servidor corre toda la lógica: horarios, escenas, sensores de presencia, integración entre marcas. Los dispositivos hablan con él por Zigbee, Z-Wave, WiFi local o KNX, sin salir de la casa.

Cuando tocas un botón en la app estando en casa, la orden viaja del teléfono al servidor local y del servidor al dispositivo. Dos saltos, todos dentro de tus paredes, en milisegundos. Internet solo interviene cuando controlas la casa desde afuera, y para eso se usa un túnel cifrado.

**Sin internet:** las luces, el aire, las cortinas, las escenas, los horarios y el modo Shabbat siguen funcionando exactamente igual. Lo único que pierdes es el control remoto desde fuera de la casa y las notificaciones al celular hasta que vuelva la conexión.

## Qué pasa con Alexa, Google y Siri

Puedes usarlos. Los integramos como un control por voz adicional. Pero son eso, un control adicional, y dependen de la nube: si se cae el internet, la voz deja de funcionar y el resto de la casa no. Nunca ponemos la lógica de la casa en el asistente de voz, porque sería volver al modelo de cuatro saltos.

## Y en KNX, un paso más allá

En una residencia KNX ni siquiera hace falta el servidor para lo esencial. Cada pulsador, actuador y termostato lleva su programa y se comunican por un bus cableado. El servidor local añade la app, la visualización y las escenas complejas, pero si lo apagas, los interruptores y termostatos siguen haciendo su trabajo. Es procesamiento local llevado al límite: sin nube y sin punto único de falla.

## Qué cambia en el día a día

- **Respuesta instantánea.** Tocas y la luz responde. Se siente como un interruptor de toda la vida, pero con escenas.
- **Tormentas y cortes.** Cuando vuelve la energía, la casa arranca sola con su programación. No hay que "reconectar" nada.
- **Marcas que cierran.** Si un fabricante desaparece, tus dispositivos siguen hablando con tu servidor local. Nos ha tocado mantener funcionando equipos de marcas que ya no existen.
- **Tus datos se quedan en casa.** Nadie afuera sabe a qué hora se apagan tus luces.

## Cómo saber si tu casa actual es local o de nube

Haz la prueba del router. Si al desconectarlo pierdes el control desde la app estando dentro de la casa, es de nube. Si te preocupa, escríbenos por WhatsApp: en muchos casos podemos integrar los dispositivos que ya tienes a un servidor local y devolverles la independencia, sin comprarlo todo de nuevo.`,
    en: `Simple test: unplug the router and tap the "smart" switch in the living room. If the light does not respond, your home is not smart: it is a home asking a server in another country for permission to turn on a bulb. In Panama, where internet and power outages are routine, that difference shows every week. This article explains what local processing is, how it is installed and what changes day to day.

## How a cloud system works

Most store-bought "smart" devices work like this: you tap a button in the app, the phone sends the command to the manufacturer's server (in the United States, Europe or China), the server forwards it to the device in your home, and the device responds. Four hops to turn on a light three meters away from you.

Consequences:

- **Without internet, nothing works.** Not even from the couch.
- **Latency.** Half a second or more between tapping and seeing the light. You notice it, and over time it wears on you.
- **Manufacturer dependency.** If they shut their servers, the device dies. It has happened with Revolv, Wink, Insteon, Nest Secure and many more.
- **Privacy.** Every habit of your home (what time you get up, when nobody is in) passes through someone else's servers.

## How local processing works

In a DiraSmart installation there is a small server inside your home, usually in the panel or next to the router. That server runs all the logic: schedules, scenes, presence sensors, cross-brand integration. Devices talk to it over Zigbee, Z-Wave, local WiFi or KNX, without leaving the house.

When you tap a button in the app while at home, the command travels from the phone to the local server and from the server to the device. Two hops, all within your walls, in milliseconds. The internet only comes in when you control the house from outside, and for that an encrypted tunnel is used.

**Without internet:** lights, AC, curtains, scenes, schedules and Shabbat mode keep working exactly the same. The only things you lose are remote control from outside the house and phone notifications until the connection returns.

## What about Alexa, Google and Siri

You can use them. We integrate them as an additional voice control. But that is what they are, an addition, and they depend on the cloud: if the internet drops, voice stops and the rest of the house does not. We never put the home's logic in the voice assistant, because that would be going back to the four-hop model.

## And in KNX, one step further

In a KNX residence the server is not even needed for the essentials. Every push-button, actuator and thermostat carries its own program and they communicate over a wired bus. The local server adds the app, visualization and complex scenes, but if you switch it off, the switches and thermostats keep doing their job. It is local processing taken to the limit: no cloud and no single point of failure.

## What changes day to day

- **Instant response.** You tap and the light answers. It feels like an old-fashioned switch, but with scenes.
- **Storms and outages.** When power returns, the house starts on its own with its programming. Nothing needs "reconnecting".
- **Brands that shut down.** If a manufacturer disappears, your devices keep talking to your local server. We have kept equipment running from brands that no longer exist.
- **Your data stays home.** Nobody outside knows what time your lights go off.

## How to tell if your current home is local or cloud

Do the router test. If unplugging it makes you lose control from the app while inside the house, it is cloud-based. If that worries you, message us on WhatsApp: in many cases we can integrate the devices you already own into a local server and give them back their independence, without buying everything again.`,
  },
  faq: [
    {
      question: { es: "¿Una casa inteligente funciona sin internet?", en: "Does a smart home work without internet?" },
      answer: {
        es: "Solo si tiene procesamiento local. En una instalación DiraSmart, un servidor dentro de la casa corre toda la lógica: luces, aire, cortinas, escenas y horarios siguen funcionando sin internet. Los sistemas de nube (la mayoría de dispositivos de tienda) dejan de responder, incluso desde dentro de la casa.",
        en: "Only if it has local processing. In a DiraSmart installation, a server inside the house runs all the logic: lights, AC, curtains, scenes and schedules keep working without internet. Cloud systems (most store-bought devices) stop responding, even from inside the house.",
      },
    },
    {
      question: { es: "¿Qué es el procesamiento local en domótica?", en: "What is local processing in home automation?" },
      answer: {
        es: "Que la lógica de la casa se ejecuta en un servidor dentro de la propiedad, no en la nube de un fabricante. Las órdenes viajan del teléfono al servidor y del servidor al dispositivo sin salir de la casa, en milisegundos. Internet solo se usa para control remoto desde fuera.",
        en: "The home's logic runs on a server inside the property, not in a manufacturer's cloud. Commands travel from the phone to the server and from the server to the device without leaving the house, in milliseconds. The internet is used only for remote control from outside.",
      },
    },
    {
      question: { es: "¿Puedo usar Alexa con procesamiento local?", en: "Can I use Alexa with local processing?" },
      answer: {
        es: "Sí, como control por voz adicional. Alexa, Google y Siri dependen de la nube, así que si se cae el internet la voz deja de funcionar, pero el resto de la casa sigue operando porque la lógica vive en el servidor local, no en el asistente.",
        en: "Yes, as an additional voice control. Alexa, Google and Siri depend on the cloud, so if the internet drops the voice stops, but the rest of the house keeps operating because the logic lives in the local server, not in the assistant.",
      },
    },
    {
      question: { es: "¿Qué pasa si el fabricante de mis dispositivos cierra?", en: "What happens if my devices' manufacturer shuts down?" },
      answer: {
        es: "Con procesamiento local y estándares abiertos (Zigbee, Z-Wave, KNX), los dispositivos siguen hablando con tu servidor aunque la marca desaparezca. Con sistemas de nube, el dispositivo deja de funcionar, como pasó con Revolv, Wink, Insteon y Nest Secure.",
        en: "With local processing and open standards (Zigbee, Z-Wave, KNX), devices keep talking to your server even if the brand disappears. With cloud systems, the device stops working, as happened with Revolv, Wink, Insteon and Nest Secure.",
      },
    },
  ],
};

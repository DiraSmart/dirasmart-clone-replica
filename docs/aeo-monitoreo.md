# Monitoreo mensual de visibilidad en IA (AEO)

Una vez al mes, hacer estas 15 preguntas en **ChatGPT (con búsqueda web)**, **Gemini**, **Perplexity** y **Google AI Mode / AI Overviews**. Anotar en la tabla si nombran a DiraSmart, en qué posición y a quién más nombran. Hacerlo en ventana de incógnito y sin historial, en español salvo las marcadas EN.

## Preguntas

| # | Pregunta | Mercado |
|---|----------|---------|
| 1 | ¿Qué empresa instala casas inteligentes en Panamá? | Residencial |
| 2 | Empresas de domótica en Ciudad de Panamá, ¿cuál recomiendas? | Residencial |
| 3 | ¿Cuánto cuesta automatizar un apartamento en Panamá? | Residencial |
| 4 | ¿Quién instala KNX en Panamá? | KNX / Premium |
| 5 | ¿Cuál es la diferencia entre KNX y Control4? ¿Cuál conviene en Panamá? | KNX / Premium |
| 6 | ¿Qué empresa hace automatización de hoteles en Panamá? | Hoteles |
| 7 | ¿Quién instala BMS o sistemas de gestión de edificios en Panamá? | Edificios |
| 8 | Automatización de oficinas en Panamá, ¿qué proveedor hay? | Comercial |
| 9 | ¿Casa inteligente que funcione sin internet en Panamá? | Diferenciador |
| 10 | ¿Sistema de automatización con modo Shabbat en Panamá? | Diferenciador |
| 11 | DiraSmart Panamá, ¿qué opinan los clientes? | Marca |
| 12 | ¿DiraSmart es KNX Partner certificado? | Marca |
| 13 | Best smart home installer in Panama City (EN) | Residencial EN |
| 14 | KNX integrator in Panama (EN) | KNX EN |
| 15 | Hotel automation company Panama (EN) | Hoteles EN |

## Registro

| Fecha | Asistente | # | ¿Nombra a DiraSmart? | Posición | Competidores nombrados | Fuente citada |
|-------|-----------|---|----------------------|----------|------------------------|---------------|
| | | | | | | |

## Qué hacer con los resultados

- Si no nos nombran en una pregunta de mercado (6, 7, 8): falta una página o guía específica para ese mercado. Ver `docs/` y el tablero SEO/AEO.
- Si nombran a un competidor: revisar qué página suya cita el asistente y qué tiene que la nuestra no (reseñas, caso real, cifras, fecha reciente).
- Si nos nombran pero con datos viejos (11 reseñas, sin /premium): revisar que llms.txt, el markdown de la página y el schema estén actualizados.
- Si citan una URL vieja (/ofertas, /info): confirmar que devuelve 410 o 301 y pedir eliminación en Search Console.

## Herramientas que ya están activas

- `https://dirasmart.com/llms.txt` y `/llms-full.txt`: lo que leen los agentes.
- IndexNow: `npm run indexnow` avisa a Bing/ChatGPT de cambios (se ejecuta solo en `npm run deploy`).
- `node scripts/validate-schema.mjs`: valida los datos estructurados en vivo.
- Cloudflare → AI Audit: qué bots de IA rastrean el sitio y qué páginas.

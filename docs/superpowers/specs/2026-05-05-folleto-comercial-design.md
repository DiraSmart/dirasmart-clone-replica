# Folleto Comercial DiraSmart — Design

## Objetivo
Folleto digital (PDF) para envío masivo a clientes comerciales (hoteles, oficinas, retail, edificios, restaurantes). Standalone HTML que se exporta a PDF vía "Imprimir → Guardar como PDF" en Chrome. NO se publica online. Versión residencial pendiente para después (mismo template, distinto contenido).

## Formato
- Letter vertical (8.5" × 11"), 2 páginas
- Página 1: gancho + propuesta de valor + 6 beneficios
- Página 2: tecnología + KNX en el mundo + proyectos propios + CTA + contacto

## Ubicación
```
c:\Users\jbran\Downloads\dirasmart-clone-replica\folleto-comercial\
├── folleto-comercial.html
└── assets\
    ├── dirasmart-logo.png
    ├── hero.jpg          (edificios.jpg o hero-panama.jpg)
    ├── hoteles.jpg
    ├── oficinas.jpg
    ├── retail.jpg
    └── restaurantes.jpg
```

## Stack
- HTML5 standalone, sin React, sin build
- Tailwind CSS vía CDN (`<script src="https://cdn.tailwindcss.com">`) — rápido de iterar; el PDF queda capturado igual
- Google Fonts: **Poppins** (body) + **Fraunces** (display) — coinciden con el sitio
- `@page` size letter portrait + `@media print` rules para forzar saltos de página y ocultar UI

## Branding (tokens del sitio)
- Primary cyan: `hsl(193 82% 43%)`
- Secondary navy: `hsl(220 40% 13%)`
- Accent green: `hsl(158 64% 52%)`
- Backgrounds: blanco + grises suaves

## Página 1 — "El gancho"
1. **Header**: logo DiraSmart + badge mini "KNX Partner certificado"
2. **Hero**: foto de edificio comercial (60% ancho) + headline grande "Control inteligente para edificios comerciales" + sub "KNX + BMS para hoteles, oficinas, retail y más"
3. **Tres cifras destacadas** en banda horizontal: **−30%** energía · **24/7** monitoreo · **0** dependencia de internet
4. **Grid 6 beneficios** (3×2) con icono + título + descripción corta:
   - Hasta 30% menos consumo eléctrico
   - Control remoto desde panel y app
   - Prevención de fallas
   - Notificaciones en tiempo real
   - Reportes y análisis
   - Confort consistente

## Página 2 — "El cómo + cierre"
1. **Bloque "Tecnología KNX descentralizada + BMS"**:
   - Sub-bullets: descentralizado (sin punto único de falla) · 500+ marcas · procesamiento local
   - Logos/badges de protocolos: BACnet · Modbus · M-Bus · SNMP

2. **Bloque "KNX en el mundo"** (social proof):
   - Cifras: 172 países · 500+ fabricantes · norma ISO/IEC 14543
   - Lista de 6 proyectos icónicos en grid compacto:
     - Aeropuerto Internacional de Dubái — Dubái, EAU
     - Heathrow Terminal 5 — Londres, UK
     - British Library — Londres, UK
     - St George Wharf Tower — Londres, UK
     - Marriott Hotel — Banja Luka, Bosnia
     - Princess Nourah University (32,000 dispositivos) — Riyadh, Arabia Saudita

3. **Bloque "Personalización"**: copy corto sobre botoneras a medida con logo del cliente, switches finos de alto diseño

4. **Mosaico 4 fotos** de sectores DiraSmart: hoteles · oficinas · retail · restaurantes

5. **CTA + Footer**:
   - Headline CTA: "Agenda una visita técnica gratis"
   - WhatsApp: +507 6595-6439
   - Email: comercial@dirasmart.com
   - Web: dirasmart.com/comercial
   - Ubicación: Panama City, Panamá
   - Pequeño QR opcional al sitio (omitido si complica)

## Print Optimization
- `@page { size: letter portrait; margin: 0; }`
- Cada `<section>` de página marca `page-break-after: always` excepto la última
- `print:hidden` en botón "Descargar PDF" flotante
- Imágenes con `print-color-adjust: exact` para que conserven color en PDF
- Background colors deben imprimirse (no solo border/text)

## Verificación
1. Abrir `folleto-comercial.html` en Chrome
2. Inspeccionar render en pantalla
3. Ctrl+P → "Guardar como PDF" → tamaño Letter, márgenes Ninguno, gráficos de fondo activado
4. Abrir el PDF generado y revisar:
   - 2 páginas exactas, sin cortes
   - Fotos cargan
   - Texto legible (no muy chico)
   - Branding consistente
5. Peso del PDF objetivo: <3MB

## Fuentes (proyectos KNX)
- KNX Association: 172 países, 500+ fabricantes, ISO/IEC 14543 (Wikipedia + KNX.org)
- Dubai Airport: projects.knx.org/en/detail/PRJ000059
- Heathrow T5: knxtoday.com case study
- British Library: knxtoday.com case study
- St George Wharf Tower: knxtoday.com #KNXis35
- Marriott Banja Luka: projects.knx.org/en/detail/PRJ001078
- Princess Nourah University: knxtoday.com (32,000 KNX devices)

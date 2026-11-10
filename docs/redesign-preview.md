# DiraSmart: propuesta interactiva

Rutas de desarrollo: `/nueva` (hogares) y `/nueva/comercial` (comercial). La portada actual se conserva. No se ha desplegado ni fusionado esta propuesta.

Ejecutar `npm ci` y `npm run dev`. Validar con `npx tsc -p tsconfig.app.json --noEmit`, `npm run build:no-prerender` y `node --experimental-strip-types scripts/check-next-experience.ts` (Node 22+).

Modelo 3D conceptual construido con geometría local; selección de espacios, cámara animada, luz y cortinas, controles de temperatura y escenas independientes. La temperatura es un valor de demostración, sin simulación térmica ni conexión a equipos. Inalámbrico y KNX tienen contenidos diferenciados; comercial presenta sectores y habitaciones. No hay conexión real a NETx o PMS.

Carga 3D opcional en móvil, controles disponibles sin WebGL, reducción de movimiento y metadatos noindex. La dirección artística y el modelo arquitectónico se revisarán antes del lanzamiento. Publicar exige revisión explícita del propietario.

# Nueva propuesta visual

Rutas: `/nueva` y `/nueva/comercial`. Reconstrucción editorial a pantalla completa, con interiores fotorrealistas conceptuales, selección de sala/cocina/suite, escenas independientes, iluminación simulada y temperatura por espacio.

La propuesta actual usa imágenes prerenderizadas y transiciones; no es navegación 3D libre. La sala tiene una imagen nocturna independiente con cortinas cerradas; cocina y suite usan atenuación de imagen para las escenas. La climatización es solo un valor ilustrativo. No hay integración real con equipos, PMS o NETx. El contenido comercial todavía es una adaptación conceptual.

Imágenes generadas con la herramienta integrada ImageGen y convertidas a WebP, en `public/next-luxe/`: living.webp, living-night.webp, kitchen.webp, bedroom.webp. Dirección de los prompts: interiores de un penthouse contemporáneo de lujo en Panamá al anochecer, nogal, travertino, lino marfil, detalles bronce, iluminación indirecta cálida, ventanas a vegetación tropical y skyline. Kitchen y bedroom usan living como referencia de continuidad. Living-night conserva composición y muebles y modifica solo iluminación y cortinas.

Validar con `npx tsc -p tsconfig.app.json --noEmit`, `npm run build:no-prerender`. Para probar: `npm run dev`, abrir `/nueva`.

No se ha desplegado. Revisión del propietario antes de fusionar o lanzar.

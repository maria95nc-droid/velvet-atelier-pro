# Isabel Agüera Jiménez · Web lista para VS Code

Este ZIP está preparado para abrirlo en Visual Studio Code y publicarlo fuera de Lovable.

## Pasos en Visual Studio Code

1. Descomprime el ZIP.
2. Abre la carpeta `velvet-atelier-pro-final` en Visual Studio Code.
3. Abre la terminal dentro de VS Code.
4. Ejecuta:

```bash
npm install
npm run dev
```

La web se abrirá normalmente en `http://localhost:5173` o en el puerto que indique Vite.

## Comandos útiles

```bash
npm run dev       # trabajar en local
npm run build     # comprobar que compila para producción
npm run preview   # ver la versión compilada
npm run lint      # revisar lint/formato
npm run format    # formatear código
```

## Últimas mejoras incluidas

- La foto principal del inicio es la imagen real de Isabel en blanco y negro con vestido corto.
- Reforzado el mensaje principal hacia `maquillaje de novia e invitadas a domicilio en Oviedo`.
- Añadida una tarjeta específica de `prueba de maquillaje de novia`, importante para captar bodas.
- Reescritos textos para que la web sea más coherente con Bodas.net: novia, invitadas, prueba previa, casa/hotel/lugar de preparación.
- Corregida la sección de grupos para enfocarla en `novia + madre + invitadas`, evitando mezclar residencias o centros de día en esta landing.
- Mejoradas preguntas frecuentes: desplazamiento, varias invitadas, duración para fotos y muchas horas.
- Traducidas las páginas de error al español.
- Añadidos metadatos SEO/sociales básicos: author, robots, og:locale y Twitter title/description.
- Comprobado que compila con `npm run build` y que TypeScript pasa con `npx tsc --noEmit`.

## Imágenes

Las imágenes reales están dentro de `src/assets/`. La vista previa para WhatsApp/redes está en:

```text
public/og-image.jpg
```

Para cambiar una foto sin tocar código, sustituye el archivo correspondiente manteniendo el mismo nombre.

# Activación del panel de administración

El panel está disponible en `/admin`. Mientras la conexión privada no esté terminada, muestra datos de demostración claramente identificados.

## Variables privadas necesarias

En Cloudflare Pages, dentro del proyecto `velvet-atelier-pro`, añadir en **Settings → Variables and Secrets**:

- `CLOUDFLARE_API_TOKEN`: secreto con permiso de lectura de Analytics.
- `CLOUDFLARE_ZONE_TAG`: identificador de la zona `isabelaguerajimenez.es`.
- `ADMIN_EMAILS`: `maria.95nc@gmail.com` y, cuando esté disponible, el correo de Isabel, separados por coma.

No se debe guardar el token en GitHub ni escribirlo dentro del código.

## Protección con Cloudflare Access

Crear una aplicación Access para estas rutas:

- `isabelaguerajimenez.es/admin*`
- `isabelaguerajimenez.es/api/analytics*`

Usar inicio de sesión mediante PIN de un solo uso y una política Allow limitada a los correos incluidos en `ADMIN_EMAILS`.

La función de analítica exige tanto la identidad de Cloudflare Access como que el correo figure en la lista autorizada.

## Datos disponibles

La primera conexión real muestra visitas, visitantes, evolución, países, dispositivos y procedencia. Los clics detallados en WhatsApp y servicios requieren activar la segunda fase de eventos personalizados.

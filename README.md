# Página web: 70 años de Jesús Roberto Gavidia Iverico

Este proyecto es una página estática lista para publicarse gratuitamente en GitHub Pages.

## Archivos
- `index.html`: contenido de la página.
- `style.css`: diseño adaptable a celulares y computadoras.
- `script.js`: cuenta regresiva, invitación personalizada y enlace de confirmación.
- `assets/fotos/`: coloca aquí las fotografías.

## 1. Personalizar antes de publicar

### Fotografías
Reemplaza las imágenes de ejemplo colocando tus fotos en `assets/fotos/` con estos nombres:
- `papa-principal.jpg`
- `recuerdo-1.jpg`
- `recuerdo-2.jpg`
- `recuerdo-3.jpg`

Usa fotografías propias y procura que sean livianas (idealmente menos de 1–2 MB cada una).

### WhatsApp para confirmar
Abre `script.js` y reemplaza:
`const WHATSAPP_NUMBER = "51999999999";`
por el número que recibirá confirmaciones, con código de país y solo dígitos. Para Perú, empieza por `51`.

### Datos del evento
La fecha y hora están configuradas en `script.js` como:
`2026-12-23T13:00:00-05:00`
La página muestra Villa Alessandra como lugar.

### Canción
El botón abre una búsqueda de “Queen – We Are the Champions” en YouTube. No se incluye ni se distribuye el archivo de audio, porque la canción tiene derechos de autor. El visitante decide reproducirla al pulsar el botón. Si tienes acceso a una inserción oficial autorizada, se puede añadir un reproductor incrustado.

## 2. Crear invitaciones personalizadas

La página utiliza parámetros en el enlace. No necesitas crear un archivo distinto para cada familia.

Ejemplos:
- `https://TU-USUARIO.github.io/70-anos-papa/?invitado=Familia%20Gavidia&pases=4`
- `https://TU-USUARIO.github.io/70-anos-papa/?invitado=Familia%20Sanchez&pases=3`
- `https://TU-USUARIO.github.io/70-anos-papa/?invitado=Maria%20Lopez&pases=1`

Cambia el texto después de `invitado=` y el número después de `pases=`. Los espacios se escriben como `%20`. Puedes escribir el nombre normalmente y usar un codificador de URL si tiene tildes o caracteres especiales.

**Importante:** estos enlaces son personalizados visualmente, no son privados ni verifican identidad. Cualquier persona que reciba o modifique el enlace puede ver o cambiar el nombre y número mostrado. No sirven como control de acceso seguro.

## 3. Publicar gratis con GitHub Pages
1. Inicia sesión en https://github.com/
2. Crea un repositorio público llamado `70-anos-papa`.
3. Sube el contenido de esta carpeta al repositorio (incluye `assets/fotos/`).
4. Abre **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
7. Espera a que GitHub Pages publique la web.

La dirección será:
`https://TU-USUARIO.github.io/70-anos-papa/`

## 4. Probar
- Abre la página en un celular.
- Prueba el enlace de invitación con `?invitado=Familia%20Gavidia&pases=4`.
- Prueba el botón de WhatsApp después de configurar el número.
- Prueba el botón de canción.

## Nota de privacidad
GitHub Pages en un repositorio público hace que los archivos sean visibles en Internet. No subas teléfonos, direcciones particulares, listas completas de invitados ni otra información privada. Comparte solo los enlaces individuales con las personas correspondientes.

# Blueprint

## Visión General

Este proyecto es un portafolio personal diseñado para mostrar tus habilidades y proyectos. El objetivo es crear un sitio web visualmente atractivo, moderno y fácil de usar que destaque tu trabajo.

## Pila Tecnológica

*   **HTML:** Para la estructura del sitio web.
*   **CSS:** Para el estilo y el diseño.
*   **JavaScript:** Para la interactividad y la funcionalidad dinámica.

## Estructura del Proyecto

*   `index.html`: El punto de entrada principal de la aplicación.
*   `assets/css/`: Contiene las hojas de estilo.
    *   `style.css`: Estilos principales.
    *   `responsive.css`: Estilos para el diseño responsivo.
*   `assets/js/`: Contiene los archivos de JavaScript.
    *   `script.js`: Script principal.
    *   `3d-hero.js`: Script para la animación 3D.
    *   `animations.js`: Script para las animaciones de la página.
*   `assets/img/`: Contiene las imágenes.

## Historial de Cambios

### Optimización SEO y Experiencia de Usuario

1.  **Optimización de metaetiquetas:** Se actualizó el título, la descripción y las palabras clave para que sean más descriptivos y relevantes para los motores de búsqueda.
2.  **Mejora de la accesibilidad de las imágenes:** Se añadieron atributos `alt` descriptivos a todas las imágenes para mejorar la accesibilidad y el SEO.
3.  **Corrección de enlaces:** Se reemplazaron los enlaces de redes sociales y del portafolio que no llevaban a ninguna parte por las URL correctas.
4.  **Actualización del contenido:** Se sustituyó el texto de relleno "Lorem ipsum" en las descripciones de los proyectos por contenido más significativo.
5.  **Integración con redes sociales:** Se añadieron metaetiquetas de Open Graph para mejorar la visualización del portafolio cuando se comparte en redes sociales.
6.  **Actualización del copyright:** Se actualizó el año del copyright a 2024.

### Eliminación del Carrusel

1.  **Eliminación del HTML del carrusel:** Se ha eliminado el código HTML correspondiente al carrusel de la sección "Conóceme" en `index.html`.
2.  **Eliminación de estilos del carrusel:** Se han eliminado las reglas de CSS asociadas al carrusel del archivo `assets/css/style.css` para limpiar el código.

### Feature: Animación 3D en la Sección de Inicio

1.  **Añadir bibliotecas:** Se han añadido las bibliotecas Three.js y GSAP al `index.html` para crear la animación 3D y controlar las interacciones.
2.  **Reemplazar imagen estática:** Se ha reemplazado la imagen estática de la sección de inicio por un lienzo (canvas) para renderizar la animación 3D.
3.  **Crear script de animación:** Se ha creado el archivo `assets/js/3d-hero.js` que contiene la lógica para la escena 3D, el objeto y la animación interactiva.
4.  **Ajustar estilos:** Se han actualizado los estilos en `assets/css/style.css` para asegurar que la animación se muestre correctamente y sea responsiva.

### Feature: Animaciones Adicionales

1.  **Efecto "máquina de escribir":** Se ha añadido un efecto de "máquina de escribir" al título del trabajo en la sección de inicio. Este efecto muestra diferentes especializaciones en un bucle.
2.  **Animaciones al pasar el ratón (Hover):** Se han añadido animaciones a los botones para que respondan al movimiento del ratón.
3.  **Crear script de animaciones:** Se ha creado el archivo `assets/js/animations.js` para gestionar todas las nuevas animaciones.

### Feature: Efecto "Tilt" 3D y Mejoras de Parallax

1.  **Efecto "tilt" 3D:** Se ha añadido un efecto "tilt" 3D a las tarjetas de los proyectos utilizando la biblioteca `vanilla-tilt.js`. Esto crea una sensación de profundidad e interacción al pasar el ratón sobre los proyectos.
2.  **Mejora del efecto parallax:** Se han ajustado los estilos de la sección de "Servicios" para mejorar el efecto parallax y hacerlo más pronunciado.
3.  **Eliminación de la animación de scroll:** Se ha eliminado la animación de aparición de las secciones al hacer scroll para unificar el estilo de las animaciones y dar más protagonismo al efecto "tilt".

### Eliminación de la Sección "Juega"

1.  **Eliminación del HTML:** Se ha eliminado la sección `id="play"` del archivo `index.html`, así como el enlace correspondiente en la barra de navegación.
2.  **Eliminación del Script:** Se ha eliminado la etiqueta `<script>` que cargaba `assets/js/infinity-animation.js` y se ha borrado el archivo del proyecto.
3.  **Limpieza de Estilos:** Se han eliminado las reglas de CSS asociadas a la sección "Juega" del archivo `assets/css/style.css`.

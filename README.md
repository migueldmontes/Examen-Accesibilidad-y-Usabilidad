# Examen-Accesibilidad-y-Usabilidad
Examen Práctico: Accesibilidad y Usabilidad Web
Duración: 3 horas Bloque temático: Accesibilidad (WCAG + ARIA) y Usabilidad (principios de Jakob Nielsen) Requisitos:
● HTML5 + CSS3
● JavaScript (manipulación del DOM, validación de formularios, accesibilidad con JS)
● Código claro, limpio y comentado
Objetivo
Crear un mini sitio web accesible, usable y funcional con 2 páginas:
1. Página principal con información sobre una biblioteca pública
2. Página de contacto con un formulario accesible
Parte 1: Página de Inicio (index.html)
Crea una página principal que incluya:
● Encabezado con el título de la biblioteca y un menú de navegación accesible (<nav>, roles ARIA si es necesario)
● Una sección con información (mínimo 2 párrafos y 1 imagen con texto alternativo)
● Un botón que permita aumentar o disminuir el tamaño del texto con JavaScript (cumpliendo principios de usabilidad)
● Un pie de página con accesos rápidos (contacto, horario, etc.)
Requisitos técnicos:
● Debe cumplir con al menos 3 principios de Nielsen
● Uso correcto de etiquetas semánticas (<header>, <main>, <footer>, <section>, <article>)
● Textos legibles, buena estructura visual, y contraste accesible (usa contrast checker)
Parte 2: Página de Contacto (contact.html)
Crea una página con un formulario que incluya:
● Nombre, Email, Asunto, Mensaje
● Etiquetas correctamente asociadas a los inputs (<label for="...">)
● Validación del formulario con JavaScript accesible (mensajes de error que aparezcan y desaparezcan sin molestar a lectores de pantalla)
● Roles y atributos ARIA donde apliquen (por ejemplo, aria-invalid, aria-describedby, etc.)
● Foco claro y navegación mediante teclado
Bonus (opcional, +1 punto extra)
Implementa un "modo alto contraste" o "modo oscuro" accesible activado con un interruptor (<input type="checkbox">) gestionado por JavaScript.

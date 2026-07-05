# Actividad 2 - Objetivo: Crear una librería JS funcional (sin frameworks, sin componentes visuales) que usarán en su formulario, modal y login.html

## Requerimientos del Proyecto

### Funciones obligatorias — deben implementar exactamente estas 6 funciones:
- validarCorreo(correo) → boolean — valida formato de correo electrónico
- soloLetras(texto) → boolean — solo letras mayúsculas/minúsculas, acepta vocales acentuadas
- validarLongitud(numero, maxLongitud) → boolean — valida longitud de un número
- calcularEdad(fechaNacimiento) → número entero — calcula edad a partir de fecha de nacimiento
- esMayorDeEdad(fechaNacimiento) → boolean — valida si es mayor de edad
- validarPassword(password) → boolean — requiere mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres

### Integración obligatoria:
- Formulario HTML que use estas validaciones
- Ventana modal que muestre la edad calculada
- login.html que use validarPassword y validarCorreo

### Estructura del repositorio: 
- utileria
    - README.md 
    - index.html 
    - login.html 
    - /css → styles.css 
    - /js → utileria.js 
    - /img → imagenes usadas (si aplica)

El README debe incluir:
Portada (nombre + qué problema resuelve)
Instalación (<script src="utileria.js"></script>)
Uso con ejemplos de código embebido.(No es solo describir con palabras qué hace la librería. Es pegar el código real dentro del README, usando bloques de Markdown (tres comillas invertidas) para que se vea formateado, no como texto plano.)
Capturas de pantalla (consola mostrando resultados)
Video corto (máx. 1 min): graba tu voz usando tu librería como si fuera un demo promocional, muestra el problema que resuelve, cómo se usa, y el resultado en acción (mensaje en consola, alerta, cambio en la página). No es solo "correr el código", es vender tu librería en 60 segundos.
Rúbrica (20 puntos)
4 pts. Funciones obligatorias correctas
4 pts. Integración real (formulario + modal + login)
4 pts. Funciones propias + creatividad
4 pts. Documentación (README, capturas, video)
4 pts. GitHub Pages funcionando correctamente
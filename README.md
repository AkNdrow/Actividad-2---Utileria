<div align="center">
<br><br>

### Ingenieria en sistemas computacionales

<br>

#### Programación web

#### Tema 2

<br>

#### Actividad 2

# LIBRERÍA utileria.js

<br><br><br>

**Docente:**<br>
Ing. Adelina Martínez Nieto

<br><br>

**Estudiantes:**<br>
Cuevas Garcia Andrés

<br><br><br><br><br><br>

Oaxaca de Juarez, Oaxaca.
<br><br>
4 de Julio de 2026

</div>

## Librería de Funciones de Validación - Actividad 2

En este archivo escribiremos funciones simples de JavaScript.
Las funciones son bloques de código que hacen una tarea específica.
Al separarlas aquí, podemos usarlas en diferentes partes de nuestra página
sin tener que escribir el código muchas veces.

### Función 1: validarCorreo

Revisa si un texto tiene la forma correcta de un correo (<ejemplo@correo.com>).

@param {string} correo - El texto que queremos validar.

@returns {boolean} - Retorna true si es válido, false si no lo es.

```js
function validarCorreo(correo) {
    // Las expresiones regulares (regex) son patrones para buscar texto.
    // Aunque parece un texto extraño, esta regex simplemente revisa que haya:
    // texto + un arroba (@) + texto + un punto (.) + texto.
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // El método .test() verifica si el "correo" cumple con nuestro "formatoCorreo".
    // Nos devuelve verdadero (true) o falso (false).
    return formatoCorreo.test(correo);
}
```

### Función 2: soloLetras

Revisa que el texto que escriba el usuario solo contenga letras y espacios.

@param {string} texto - El texto a revisar (como un nombre).

@returns {boolean} - Retorna true si solo hay letras, false si hay números o símbolos.

```js
function soloLetras(texto) {
    // Esta regex busca letras mayúsculas (A-Z), minúsculas (a-z), 
    // letras con acentos (áéíóú), la ñ, y espacios en blanco (\s).
    let formatoLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    return formatoLetras.test(texto);
}
```

### Función 3: validarLongitud

Revisa que un texto o número no sea más largo de lo que permitimos.

@param {string} texto - El texto o número a medir.

@param {number} maxLongitud - El límite máximo de letras o números.

@returns {boolean}

```js
function validarLongitud(texto, maxLongitud) {
    // "String(texto)" convierte cualquier cosa que nos pasen (texto, número, etc.) a texto,
    // ya que solo los textos tienen la propiedad ".length" para contar caracteres.
    let textoConvertido = String(texto);

    // Usamos un condicional (if). Si la longitud del texto es menor o igual (=)
    // al máximo que definimos en "maxLongitud", entonces es válido.
    if (textoConvertido.length <= maxLongitud) {
        return true; // Retorna verdadero (es válido).
    } else {
        return false; // Retorna falso (es demasiado largo).
    }
}
```

### Función 4: calcularEdad

Calcula cuántos años tiene una persona a partir de su fecha de nacimiento.

@param {string} fechaNacimiento - Fecha elegida por el usuario (ej. "2000-05-20").

@returns {number} - Retorna la edad en años.

```js
function calcularEdad(fechaNacimiento) {
    // Creamos un objeto "Date" con la fecha que nos pasaron.
    let fecha = new Date(fechaNacimiento);

    // Obtenemos la fecha actual (hoy).
    let hoy = new Date();

    // Calculamos la diferencia en milisegundos (unidades de tiempo muy pequeñas).
    // Luego dividimos entre 1000 (segundos), 60 (minutos), 60 (horas) y 365 (días) para aproximar los años.
    let diferencia = hoy - fecha;
    let edad = Math.floor(diferencia / (1000 * 60 * 60 * 365));

    return edad;
}
```

### Función 5: esMayorDeEdad

Verifica si una persona puede votar (ser mayor de 18 años).

@param {string} fechaNacimiento - Fecha de nacimiento.

@returns {boolean} - Retorna true si es mayor de 18, false si es menor.

```js
function esMayorDeEdad(fechaNacimiento) {
    let edad = calcularEdad(fechaNacimiento); // Usamos la función anterior

    // Si la edad es mayor o igual a 18, es válido para votar.
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
```

### Función 6: validarPassword

Revisa que una contraseña sea segura y cumpla ciertas reglas.

@param {string} password - La contraseña a revisar.

@returns {boolean}

```js
function validarPassword(password) {
    // Regla 1: Debe tener al menos 8 caracteres.
    // Si es menor a 8, regresamos false inmediatamente y la función termina aquí.
    if (password.length < 8) {
        return false;
    }

    // Regla 2: Necesitamos revisar si hay diferentes tipos de letras y números.
    // Volvemos a usar expresiones regulares (.test) para buscar dentro del password.
    let tieneMayuscula = /[A-Z]/.test(password); // Busca al menos una mayúscula
    let tieneMinuscula = /[a-z]/.test(password); // Busca al menos una minúscula
    let tieneNumero = /[0-9]/.test(password);    // Busca al menos un número
    let tieneEspecial = /[^A-Za-z0-9]/.test(password); // Busca algo que NO sea letra ni número (símbolos)

    // El operador && significa "Y" (AND).
    // Queremos que TODAS las condiciones sean verdaderas al mismo tiempo.
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        return true;
    } else {
        return false;
    }
}
```

### Función 7: Validaciones

Esta función se ejecuta al hacer clic en el botón "Prueba".
Recibe un "evento" (event) como parámetro.

@param {Event} event - El evento que dispara la función.

@returns {void} - No retorna nada, solo muestra alertas.

```js
function Validaciones(event) {
    // Esto es MUY importante: Evita que el formulario recargue la página automáticamente.
    if (event) event.preventDefault();

    // 1. Obtenemos los valores de los inputs usando sus IDs
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fecha = document.getElementById('fechaNacimiento').value;
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    // 2. Revisamos si todos los campos tienen información
    if (!nombre || !apellido || !fecha || !correo || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, llena todos los campos.'
        });
        return; // Detiene la función aquí
    }

    // 3. Probamos función: soloLetras
    if (!soloLetras(nombre) || !soloLetras(apellido)) {
        Swal.fire({
            icon: 'warning',
            title: 'Nombre inválido',
            text: 'El nombre y apellido solo deben contener letras.'
        });
        return;
    }

    // 4. Probamos función: validarLongitud
    // Revisamos que el nombre no sea exageradamente largo
    if (!validarLongitud(nombre, 30)) {
        Swal.fire({
            icon: 'warning',
            title: 'Nombre muy largo',
            text: 'El nombre no debe superar los 30 caracteres.'
        });
        return;
    }

    // 5. Probamos funciones: calcularEdad y esMayorDeEdad
    let edadDelUsuario = calcularEdad(fecha);
    if (!esMayorDeEdad(fecha)) {
        Swal.fire({
            icon: 'error',
            title: 'Acceso Denegado',
            text: `Tienes ${edadDelUsuario} años. Debes ser mayor de edad para registrarte.`
        });
        return;
    }

    // 6. Probamos función: validarCorreo
    if (!validarCorreo(correo)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo inválido',
            text: 'El formato de tu correo no es válido (ej. usuario@mail.com).'
        });
        return;
    }

    // 7. Probamos función: validarPassword
    if (!validarPassword(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña débil',
            text: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.'
        });
        return;
    }

    // 8. Si todo salió bien, mostramos el mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        html: `¡Hola <b>${nombre}</b>!<br>
               Tu edad es <b>${edadDelUsuario}</b> años.<br>
               Hemos guardado tus datos correctamente.`
    });
}
```

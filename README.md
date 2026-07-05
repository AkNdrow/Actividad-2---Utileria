<div align="center">
<br><br>

### Ingenieria en sistemas computacionales

<br>

#### Programación web

#### Tema 2

<br>

#### Actividad 2

# Video

<https://drive.google.com/file/d/1vjOIGzUG1jVbvNTcJtG36O-eXbWVatvI/view?usp=sharing>

# LIBRERÍA utileria.js

Sirve para la validación de datos de entrada en formularios. Puede integrarse de forma sencilla y cubre las reglas básicas de formato para cada campo requisitado.

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

### Función 7: validarPasswordIgualdad

Verifica que dos contraseñas sean iguales.

@param {string} password - La contraseña a revisar.
@param {string} confirmarPassword - La contraseña a comparar.

@returns {boolean} - Retorna true si son iguales, false si no lo son.

```js
function validarPasswordIgualdad(password, confirmarPassword) {
    // Compara si las dos contraseñas son iguales.
    if (password === confirmarPassword) {
        return true;
    } else {
        return false;
    }
}
```

### Función 8: validarTelefono

Verifica que un número de teléfono tenga el formato correcto (10 dígitos).

@param {string} telefono - El número de teléfono a validar.

@returns {boolean} - Retorna true si es válido, false si no lo es.

```js
function validarTelefono(telefono) {
    // Verifica que tenga exactamente 10 dígitos y que sean todos números.
    let formatoTelefono = /^\d{10}$/;
    return formatoTelefono.test(telefono);
}
```

### Función 9: validarEstructuraCURP

Verifica que un CURP tenga el formato y estructura correctos.

@param {string} curp - El CURP a validar.

@returns {boolean} - Retorna true si es válido, false si no lo es.

```js
function validarEstructuraCURP(curp) {
    console.log(`Ejecutando validarEstructuraCURP con: "${curp}"`);
    // Expresión regular ajustada a 18 caracteres
    let formatoCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z0-9]\d{1}$/;

    let esValida = formatoCURP.test(curp);
    console.log(`Resultado validarEstructuraCURP: ${esValida}`);
    return esValida;
}
```

### Función 10: soloNumeros

Revisa que el texto que escriba el usuario solo contenga números.

@param {string} texto - El texto a revisar.

@returns {boolean} - Retorna true si solo hay números, false si hay letras o símbolos.

```js
function soloNumeros(texto) {
    console.log(`Ejecutando soloNumeros con parámetro: "${texto}"`);
    let formatoNumeros = /^\d+$/;
    let resultado = formatoNumeros.test(texto);
    console.log(`Resultado soloNumeros: ${resultado}`);
    return resultado;
}
```

### Función 11: validarNumeroCel

Verifica que un número de teléfono sea válido utilizando funciones previas.

@param {string} telefono - El número de teléfono a revisar.

@returns {boolean} - Retorna true si el número es válido, false si no lo es.

```js
function validarNumeroCel(telefono) {
    console.log(`Ejecutando validarNumeroCel con parámetro: "${telefono}"`);
    if (soloNumeros(telefono) && validarLongitud(telefono, 10)) {
        console.log(`Resultado validarNumeroCel: true`);
        return true;
    } else {
        console.log(`Resultado validarNumeroCel: false`);
        return false;
    }
}
```

### Función 12: validarNombreCompleto

Verifica que el nombre y los apellidos solo contengan letras.

@param {string} nombre - El nombre del usuario.
@param {string} apellidoPaterno - El apellido paterno del usuario.
@param {string} apellidoMaterno - El apellido materno del usuario.

@returns {boolean} - Retorna true si el nombre completo es válido, false si no lo es.

```js
function validarNombreCompleto(nombre, apellidoPaterno, apellidoMaterno) {
    console.log(`Ejecutando validarNombreCompleto para: "${nombre} ${apellidoPaterno} ${apellidoMaterno}"`);

    // Evaluamos cada parte usando tu función existente
    let nombreValido = soloLetras(nombre);
    let paternoValido = soloLetras(apellidoPaterno);
    let maternoValido = soloLetras(apellidoMaterno);

    // Solo retornamos true si las TRES partes son correctas
    if (nombreValido && paternoValido && maternoValido) {
        console.log("Resultado validarNombreCompleto: true (El nombre es válido)");
        return true;
    } else {
        console.log("Resultado validarNombreCompleto: false (Contiene números o caracteres inválidos)");
        return false;
    }
}
```

### Función 13: Validaciones

Esta función maestra se ejecuta al hacer clic en el botón "Prueba".
Recibe un "evento" (event) como parámetro y manda llamar al resto de funciones.

@param {Event} event - El evento que dispara la función.

@returns {void} - No retorna nada, solo muestra alertas.

```js
function Validaciones(event) {
    // Evita que la página se recargue
    if (event) event.preventDefault();

    // 1. Obtenemos los valores usando los IDs EXACTOS del HTML
    let nombre = document.getElementById('nombre').value;
    let apellidoPaterno = document.getElementById('apellidoPaterno').value;
    let apellidoMaterno = document.getElementById('apellidoMaterno').value;
    let fecha = document.getElementById('fechaNacimiento').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let password = document.getElementById('password').value;
    let confirmarPassword = document.getElementById('confirmarPassword').value;
    let curp = document.getElementById('Curp').value.toUpperCase();

    // 2. Revisamos si todos los campos tienen información
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !fecha || !correo || !password || !curp) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, llena todos los campos.'
        });
        return;
    }

    // 3. Probamos función: soloLetras (ahora revisa nombre y AMBOS apellidos)
    if (!soloLetras(nombre) || !soloLetras(apellidoPaterno) || !soloLetras(apellidoMaterno)) {
        Swal.fire({
            icon: 'warning',
            title: 'Nombre inválido',
            text: 'El nombre y los apellidos solo deben contener letras.'
        });
        return;
    }

    // 4. Probamos función: validarLongitud
    if (!validarLongitud(nombre, 30) || !validarLongitud(apellidoPaterno, 30) || !validarLongitud(apellidoMaterno, 30)) {
        Swal.fire({
            icon: 'warning',
            title: 'Texto muy largo',
            text: 'El nombre y apellidos no deben superar los 30 caracteres cada uno.'
        });
        return;
    }

    // 5. Probamos funciones de edad
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

    // 7. Probamos función: validarNumeroCel
    if (!validarNumeroCel(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Teléfono inválido',
            text: 'El teléfono debe tener 10 dígitos.'
        });
        return;
    }

    // 9. Probamos función: validarPassword
    if (!validarPassword(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña débil',
            text: 'Debe tener mínimo 8 caracteres, mayúsculas, minúsculas, número y un símbolo.'
        });
        return;
    }

    // 10. Probamos función: validarPasswordIgualdad
    if (!validarPasswordIgualdad(password, confirmarPassword)) {
        Swal.fire({
            icon: 'error',
            title: 'Las contraseñas no coinciden',
            text: 'Por favor, verifica que las contraseñas sean iguales.'
        });
        return;
    }

    // 11. Validar la estructura de la CURP
    if (!validarEstructuraCURP(curp)) {
        Swal.fire({
            icon: 'error',
            title: 'CURP Inválida',
            text: 'El formato de la CURP no es correcto. Verifica que tenga 18 caracteres.'
        });
        return;
    }

    // 12. Relacionar datos: Validar fecha de la CURP
    let fechaCurp = curp.substring(4, 10);
    let partesFecha = fecha.split("-");
    let anioCurp = partesFecha[0].substring(2, 4);
    let mesCurp = partesFecha[1];
    let diaCurp = partesFecha[2];
    let fechaEscrita = anioCurp + mesCurp + diaCurp;

    if (fechaCurp !== fechaEscrita) {
        Swal.fire({
            icon: 'error',
            title: 'Datos no coinciden',
            text: `La fecha en tu CURP (${fechaCurp}) no coincide con tu fecha de nacimiento (${fechaEscrita}).`
        });
        return;
    }

    // Si llegamos hasta aquí, todas las pruebas pasaron
    Swal.fire({
        icon: 'success',
        title: '¡Todo perfecto!',
        text: `Hola ${nombre} ${apellidoPaterno}, tienes ${edadDelUsuario} años y tu CURP es válida. ¡Registro exitoso!`,
        confirmButtonColor: '#198754'
    });
}
```

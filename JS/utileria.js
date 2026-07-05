/**
 * Librería de Funciones de Validación - Actividad 2
 * 
 * En este archivo escribiremos funciones simples de JavaScript.
 * Las funciones son bloques de código que hacen una tarea específica.
 * Al separarlas aquí, podemos usarlas en diferentes partes de nuestra página
 * sin tener que escribir el código muchas veces.
 */

/**
 * Función 1: validarCorreo
 * Revisa si un texto tiene la forma correcta de un correo (ejemplo@correo.com).
 * 
 * @param {string} correo - El texto que queremos validar.
 * @returns {boolean} - Retorna true si es válido, false si no lo es.
 */
function validarCorreo(correo) {
    // Las expresiones regulares (regex) son patrones para buscar texto.
    // Aunque parece un texto extraño, esta regex simplemente revisa que haya:
    // texto + un arroba (@) + texto + un punto (.) + texto.
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // El método .test() verifica si el "correo" cumple con nuestro "formatoCorreo".
    // Nos devuelve verdadero (true) o falso (false).
    return formatoCorreo.test(correo);
}

/**
 * Función 2: soloLetras
 * Revisa que el texto que escriba el usuario solo contenga letras y espacios.
 * 
 * @param {string} texto - El texto a revisar (como un nombre).
 * @returns {boolean} - Retorna true si solo hay letras, false si hay números o símbolos.
 */
function soloLetras(texto) {
    // Esta regex busca letras mayúsculas (A-Z), minúsculas (a-z), 
    // letras con acentos (áéíóú), la ñ, y espacios en blanco (\s).
    let formatoLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    return formatoLetras.test(texto);
}

/**
 * Función 3: validarLongitud
 * Revisa que un texto o número no sea más largo de lo que permitimos.
 * 
 * @param {string} texto - El texto o número a medir.
 * @param {number} maxLongitud - El límite máximo de letras o números.
 * @returns {boolean}
 */
function validarLongitud(texto, maxLongitud) {
    // Convertimos lo que nos manden a String (texto) por si nos mandan un número,
    // ya que los textos tienen la propiedad ".length" para saber cuántos caracteres tienen.
    let textoConvertido = String(texto);

    // Usamos un condicional (if). Si la longitud es menor o igual al máximo...
    if (textoConvertido.length <= maxLongitud) {
        return true; // ...está bien, es válido.
    } else {
        return false; // ...es demasiado largo, es inválido.
    }
}

/**
 * Función 4: calcularEdad
 * Calcula cuántos años tiene una persona a partir de su fecha de nacimiento.
 * 
 * @param {string} fechaNacimiento - Fecha elegida por el usuario (ej. "2000-05-20").
 * @returns {number} - Retorna la edad en años.
 */
function calcularEdad(fechaNacimiento) {
    // "new Date()" convierte el texto en un "Objeto de fecha" que JavaScript entiende.
    let fecha = new Date(fechaNacimiento);

    // Obtenemos la fecha del día de hoy.
    let hoy = new Date();

    // .getFullYear() obtiene el año (ej. 2024). Restamos el año actual menos el año en que nació.
    let edad = hoy.getFullYear() - fecha.getFullYear();

    // Pero espera, ¿qué tal si todavía no ha cumplido años este año?
    // Calculamos la diferencia de meses.
    let diferenciaMeses = hoy.getMonth() - fecha.getMonth();

    // Si la diferencia de meses es negativa (el mes actual es antes de su mes de cumpleaños)
    // O SI estamos en el mismo mes (diferencia 0) pero el día de hoy es menor a su día de cumpleaños...
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fecha.getDate())) {
        // Significa que aún no cumple años en este año, así que le restamos 1 a la edad.
        edad = edad - 1;
    }

    return edad; // Entregamos el número final.
}

/**
 * Función 5: esMayorDeEdad
 * Nos dice rápidamente si alguien tiene 18 años o más.
 * 
 * @param {string} fechaNacimiento - La fecha a evaluar.
 * @returns {boolean} - Retorna true si es mayor, false si es menor.
 */
function esMayorDeEdad(fechaNacimiento) {
    // Aquí es donde la programación es genial: reutilizamos nuestra propia función de arriba.
    let edad = calcularEdad(fechaNacimiento);

    // Si la edad que calculamos es mayor o igual (>=) a 18...
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

/**
 * Función 6: validarPassword
 * Revisa que una contraseña sea segura y cumpla ciertas reglas.
 * 
 * @param {string} password - La contraseña a revisar.
 * @returns {boolean}
 */
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
/**
 * Función Validaciones
 * Esta función se ejecuta al hacer clic en el botón "Prueba".
 * Recibe un "evento" (event) como parámetro.
 */
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
            text: 'Debe tener mínimo 8 caracteres, mayúsculas, minúsculas, número y un símbolo.'
        });
        return;
    }

    // Si llegamos hasta aquí, todas las pruebas pasaron :)
    Swal.fire({
        icon: 'success',
        title: '¡Todo perfecto  !',
        text: `Hola ${nombre} ${apellido}, tienes ${edadDelUsuario} años. ¡Tus datos son válidos!`,
        confirmButtonColor: '#198754' // Color verde de Bootstrap
    });
}

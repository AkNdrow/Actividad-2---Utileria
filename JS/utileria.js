/**
 * Librería de Funciones de Validación y Utilería - Actividad 2
 * 
 * Esta librería contiene funciones utilitarias en JavaScript vanilla
 * para validación de datos comunes como correos, contraseñas, texto,
 * longitud de números y cálculos de edad.
 * 
 * @params: @parms es una palabra reservada de JSDoc que se utiliza para documentar los parámetros de una función.
 * su funcion es indicar que parametro espera la funcion y que tipo de dato es.
 * es indispensable para documentar las funciones.
 * @returns: @returns es una palabra reservada de JSDoc que se utiliza para documentar el valor de retorno de una función.
 */

/**
 * Valida si un texto tiene un formato de correo electrónico válido.
 *  
 * @param {string} correo - El correo electrónico a validar.
 * @returns {boolean} True si el formato es correcto, false en caso contrario.
 */
function validarCorreo(correo) {
    if (typeof correo !== 'string') return false;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo.trim());
}

/**
 * Valida si el texto contiene únicamente letras (mayúsculas, minúsculas,
 * vocales acentuadas y la eñe) y espacios.
 * 
 * @param {string} texto - El texto a validar.
 * @returns {boolean} True si contiene solo letras y espacios, false en caso contrario.
 */
function soloLetras(texto) {
    if (typeof texto !== 'string') return false;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return regex.test(texto) && texto.trim().length > 0;
}

/**
 * Valida si la longitud (cantidad de caracteres) de un número o texto numérico
 * no supera la longitud máxima permitida.
 * 
 * @param {number|string} numero - El número o su representación en texto.
 * @param {number} maxLongitud - La longitud máxima permitida.
 * @returns {boolean} True si la longitud es menor o igual al máximo, false de lo contrario.
 */
function validarLongitud(numero, maxLongitud) {
    if (numero === undefined || numero === null) return false;
    const str = String(numero).trim();
    return str.length <= maxLongitud && str.length > 0;
}

/**
 * Calcula la edad en años a partir de una fecha de nacimiento.
 * 
 * @param {string|Date} fechaNacimiento - La fecha de nacimiento (objeto Date o string "YYYY-MM-DD").
 * @returns {number} La edad calculada como número entero, o -1 si la fecha es inválida o futura.
 */
function calcularEdad(fechaNacimiento) {
    let fechaNac = fechaNacimiento;
    if (typeof fechaNacimiento === 'string') {
        // Soporta formatos estándar como YYYY-MM-DD
        fechaNac = new Date(fechaNacimiento);
    }

    // Validar que sea un objeto Date válido
    if (!(fechaNac instanceof Date) || isNaN(fechaNac.getTime())) {
        return -1;
    }

    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mesDiff = hoy.getMonth() - fechaNac.getMonth();

    // Ajustar si el cumpleaños no ha ocurrido este año
    if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad >= 0 ? edad : 0;
}

/**
 * Valida si una persona es mayor de edad (18 años o más) a partir de su fecha de nacimiento.
 * 
 * @param {string|Date} fechaNacimiento - La fecha de nacimiento (objeto Date o string "YYYY-MM-DD").
 * @returns {boolean} True si es mayor de edad, false en caso contrario.
 */
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}

/**
 * Valida si una contraseña cumple con las políticas de seguridad:
 * - Mínimo 8 caracteres.
 * - Al menos una letra mayúscula.
 * - Al menos una letra minúscula.
 * - Al menos un número.
 * - Al menos un carácter especial.
 * 
 * @param {string} password - La contraseña a validar.
 * @returns {boolean} True si cumple con todos los requisitos, false en caso contrario.
 */
function validarPassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8) return false;

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    // Un carácter especial es cualquier carácter que no sea letra ni número (símbolos, puntuación, etc.)
    const tieneEspecial = /[^A-Za-z0-9]/.test(password);

    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}

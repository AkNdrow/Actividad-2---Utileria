/**
 * @param {string} correo - El texto a validar.
 * @returns {boolean} - Retorna true si es válido, false si no lo es.
 */
function validarCorreo(correo) {
    console.log(`Ejecutando validarCorreo con parámetro: "${correo}"`);
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let resultado = formatoCorreo.test(correo);
    console.log(`Resultado validarCorreo: ${resultado}`);
    return resultado;
}

function soloNumeros(texto) {
    console.log(`Ejecutando soloNumeros con parámetro: "${texto}"`);
    let formatoNumeros = /^\d+$/;
    let resultado = formatoNumeros.test(texto);
    console.log(`Resultado soloNumeros: ${resultado}`);
    return resultado;
}

/**
 * @param {string} telefono - El número de teléfono a revisar.
 * @returns {boolean} - Retorna true si el número es válido, false si no lo es.
 */
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

/**
 * @param {string} texto - El texto a revisar.
 * @returns {boolean} - Retorna true si solo hay letras, false si hay números o símbolos.
 */
function soloLetras(texto) {
    console.log(`Ejecutando soloLetras con parámetro: "${texto}"`);
    let formatoLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let resultado = formatoLetras.test(texto);
    console.log(`Resultado soloLetras: ${resultado}`);
    return resultado;
}

/**
 * @param {string} texto - El texto o número a medir.
 * @param {number} maxLongitud - El límite máximo de letras o números.
 * @returns {boolean}
 */
function validarLongitud(texto, maxLongitud) {
    console.log(`Ejecutando validarLongitud con texto: "${texto}", max: ${maxLongitud}`);
    let textoConvertido = String(texto);

    if (textoConvertido.length <= maxLongitud) {
        console.log(`Resultado validarLongitud: true`);
        return true; // Es válido.
    } else {
        console.log(`Resultado validarLongitud: false`);
        return false; // Es demasiado largo, es inválido.
    }
}

/**
 * @param {string} nombre - El nombre del usuario.
 * @param {string} apellidoPaterno - El apellido paterno del usuario.
 * @param {string} apellidoMaterno - El apellido materno del usuario.
 * @returns {boolean} - Retorna true si el nombre es válido, false si no lo es.
 */
function validarNombreCompleto(nombre, apellidoPaterno, apellidoMaterno) {
    console.log(`Ejecutando validarNombreCompleto para: "${nombre} ${apellidoPaterno} ${apellidoMaterno}"`);

    // Se evalúa cada parte usando la función existente
    let nombreValido = soloLetras(nombre);
    let paternoValido = soloLetras(apellidoPaterno);
    let maternoValido = soloLetras(apellidoMaterno);

    // Solo retorna true si las TRES partes son correctas
    if (nombreValido && paternoValido && maternoValido) {
        console.log("Resultado validarNombreCompleto: true (El nombre es válido)");
        return true;
    } else {
        console.log("Resultado validarNombreCompleto: false (Contiene números o caracteres inválidos)");
        return false;
    }
}

/**
 * @param {string} fechaNacimiento - Fecha elegida por el usuario (ej. "2000-05-20").
 * @returns {number} - Retorna la edad en años.
 */
function calcularEdad(fechaNacimiento) {
    console.log(`Ejecutando calcularEdad con fecha: "${fechaNacimiento}"`);
    let fecha = new Date(fechaNacimiento);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fecha.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fecha.getDate())) {
        edad = edad - 1;
    }
    console.log(`Resultado calcularEdad: ${edad} años`);
    return edad;
}

/**
 * @param {string} fechaNacimiento - La fecha a evaluar.
 * @returns {boolean} - Retorna true si es mayor, false si es menor.
 */
function esMayorDeEdad(fechaNacimiento) {
    console.log(`Ejecutando esMayorDeEdad con fecha: "${fechaNacimiento}"`);
    // Se reutiliza la función anterior para el cálculo
    let edad = calcularEdad(fechaNacimiento);

    // Si la edad calculada es mayor o igual a 18...
    if (edad >= 18) {
        console.log(`Resultado esMayorDeEdad: true (es mayor)`);
        return true;
    } else {
        console.log(`Resultado esMayorDeEdad: false (es menor)`);
        return false;
    }
}

/**
 * @param {string} password - La contraseña a revisar.
 * @returns {boolean}
 */
function validarPassword(password) {
    console.log(`Ejecutando validarPassword... (contraseña oculta por seguridad)`);
    // Regla 1: Debe tener al menos 8 caracteres.
    // Si es menor a 8, retorna false inmediatamente y la función termina.
    if (password.length < 8) {
        console.log(`Resultado validarPassword: false (es muy corta)`);
        return false;
    }

    // Regla 2: Se necesita revisar si hay diferentes tipos de letras y números.
    // Se usan expresiones regulares (.test) para buscar dentro de la contraseña.
    let tieneMayuscula = /[A-Z]/.test(password); // Busca al menos una mayúscula
    let tieneMinuscula = /[a-z]/.test(password); // Busca al menos una minúscula
    let tieneNumero = /[0-9]/.test(password);    // Busca al menos un número
    let tieneEspecial = /[^A-Za-z0-9]/.test(password); // Busca algo que NO sea letra ni número (símbolos)

    // El operador && significa "Y" (AND).
    // Se requiere que TODAS las condiciones sean verdaderas al mismo tiempo.
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        console.log(`Resultado validarPassword: true (es segura)`);
        return true;
    } else {
        console.log(`Resultado validarPassword: false (no cumple las reglas)`);
        return false;
    }
}

/**
 * @param {string} password - La contraseña a revisar.
 * @param {string} confirmarPassword - La contraseña a comparar.
 * @returns {boolean} - Retorna true si las contraseñas son iguales, false si no lo son.
 */
function validarPasswordIgualdad(password, confirmarPassword) {
    // Compara si las dos contraseñas son iguales.
    if (password === confirmarPassword) {
        console.log(`Resultado validarPasswordIgualdad: true (las contraseñas son iguales)`);
        return true;
    } else {
        console.log(`Resultado validarPasswordIgualdad: false (las contraseñas no son iguales)`);
        return false;
    }
}

/**
 * @param {string} telefono - El número de teléfono a revisar.
 * @returns {boolean} - Retorna true si el número es válido, false si no lo es.
 */
function validarTelefono(telefono) {
    //Validar que solo sean números
    if (!soloNumeros(telefono)) {
        return false;
    }
    //Verificar longitud
    if (!validarLongitud(telefono, 10)) {
        return false;
    }
    return true;
}

/**
 * @param {string} curp - La CURP a revisar.
 * @returns {boolean} - Retorna true si la CURP es válida, false si no lo es.
 */
function validarEstructuraCURP(curp) {
    console.log(`Ejecutando validarEstructuraCURP con: "${curp}"`);
    // Expresión regular ajustada a 18 caracteres
    let formatoCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z0-9]\d{1}$/;

    let esValida = formatoCURP.test(curp);
    console.log(`Resultado validarEstructuraCURP: ${esValida}`);
    return esValida;
}

/**
 * @param {Event} event - El evento que dispara la función.
 * @returns {void}
 * @description Función que valida todos los campos del formulario.
 * @param {string} nombre - Nombre del usuario.
 * @param {string} apellidoPaterno - Apellido paterno del usuario.
 * @param {string} apellidoMaterno - Apellido materno del usuario.
 * @param {string} fechaNacimiento - Fecha de nacimiento del usuario.
 * @param {string} correo - Correo electrónico del usuario.
 * @param {string} telefono - Número de teléfono del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {string} confirmarPassword - Confirmación de la contraseña del usuario.
 * @param {string} curp - CURP del usuario.
 */
function Validaciones(event) {
    // Evita que la página se recargue
    if (event) event.preventDefault();

    // 1. Se obtienen los valores usando los IDs EXACTOS del HTML
    let nombre = document.getElementById('nombre').value;
    let apellidoPaterno = document.getElementById('apellidoPaterno').value;
    let apellidoMaterno = document.getElementById('apellidoMaterno').value;
    let fecha = document.getElementById('fechaNacimiento').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let password = document.getElementById('password').value;
    let confirmarPassword = document.getElementById('confirmarPassword').value;
    let curp = document.getElementById('Curp').value.toUpperCase();

    // 2. Se revisa si todos los campos tienen información
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !fecha || !correo || !password || !curp) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, llena todos los campos.'
        });
        return;
    }

    // 3. Prueba de función: soloLetras (revisa nombre y ambos apellidos)
    if (!soloLetras(nombre) || !soloLetras(apellidoPaterno) || !soloLetras(apellidoMaterno)) {
        Swal.fire({
            icon: 'warning',
            title: 'Nombre inválido',
            text: 'El nombre y los apellidos solo deben contener letras.'
        });
        return;
    }

    // 4. Prueba de función: validarLongitud
    if (!validarLongitud(nombre, 30) || !validarLongitud(apellidoPaterno, 30) || !validarLongitud(apellidoMaterno, 30)) {
        Swal.fire({
            icon: 'warning',
            title: 'Texto muy largo',
            text: 'El nombre y apellidos no deben superar los 30 caracteres cada uno.'
        });
        return;
    }

    // 5. Prueba de funciones de edad
    let edadDelUsuario = calcularEdad(fecha);
    if (!esMayorDeEdad(fecha)) {
        Swal.fire({
            icon: 'error',
            title: 'Acceso Denegado',
            text: `Tienes ${edadDelUsuario} años. Debes ser mayor de edad para registrarte.`
        });
        return;
    }

    // 6. Prueba de función: validarCorreo
    if (!validarCorreo(correo)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo inválido',
            text: 'El formato de tu correo no es válido (ej. usuario@mail.com).'
        });
        return;
    }

    // 7. Prueba de función: validarNumeroCel
    if (!validarNumeroCel(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Teléfono inválido',
            text: 'El teléfono debe tener 10 dígitos.'
        });
        return;
    }

    // 9. Prueba de función: validarPassword
    if (!validarPassword(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña débil',
            text: 'Debe tener mínimo 8 caracteres, mayúsculas, minúsculas, número y un símbolo.'
        });
        return;
    }

    // 10. Prueba de función: validarPasswordIgualdad
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

    // Si la ejecución llega hasta aquí, todas las pruebas pasaron
    Swal.fire({
        icon: 'success',
        title: '¡Todo perfecto!',
        text: `Hola ${nombre} ${apellidoPaterno}, tienes ${edadDelUsuario} años y tu CURP es válida. ¡Registro exitoso!`,
        confirmButtonColor: '#198754'
    });
}

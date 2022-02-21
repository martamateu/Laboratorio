// Función para validar codigo postal y provincia

function Validacp() {
    const input = document.getElementById("cpostal").value;
    var cp_provincias = {
        1: "\u00C1lava",
        2: "Albacete",
        3: "Alicante",
        4: "Almer\u00EDa",
        5: "\u00C1vila",
        6: "Badajoz",
        7: "Baleares",
        08: "Barcelona",
        09: "Burgos",
        10: "C\u00E1ceres",
        11: "C\u00E1diz",
        12: "Castell\u00F3n",
        13: "Ciudad Real",
        14: "C\u00F3rdoba",
        15: "Coruña",
        16: "Cuenca",
        17: "Gerona",
        18: "Granada",
        19: "Guadalajara",
        20: "Guip\u00FAzcoa",
        21: "Huelva",
        22: "Huesca",
        23: "Ja\u00E9n",
        24: "Le\u00F3n",
        25: "L\u00E9rida",
        26: "La Rioja",
        27: "Lugo",
        28: "Madrid",
        29: "M\u00E1laga",
        30: "Murcia",
        31: "Navarra",
        32: "Orense",
        33: "Asturias",
        34: "Palencia",
        35: "Las Palmas",
        36: "Pontevedra",
        37: "Salamanca",
        38: "Santa Cruz de Tenerife",
        39: "Cantabria",
        40: "Segovia",
        41: "Sevilla",
        42: "Soria",
        43: "Tarragona",
        44: "Teruel",
        45: "Toledo",
        46: "Valencia",
        47: "Valladolid",
        48: "Vizcaya",
        49: "Zamora",
        50: "Zaragoza",
        51: "Ceuta",
        52: "Melilla"
    };
    if (input.length === 0) {
        document.getElementById("demo").innerHTML = "Escribe el codigo postal !";
    } else if (input.length == 5 && parseInt(input) >= 1000 &&
        parseInt(input) <= 52999) {
        document.getElementById("demo").innerHTML = " Código valido!";
        document.getElementById("demo").className = "green";
        document.getElementById("localidad").value =
            cp_provincias[parseInt(input.substring(0, 2))];;
        if (!(/^[a-zAZáéíóúÁÉÍÓÚñÑ]+(\s\w+)*$/.test(document.getElementById("localidad").value))) {
            document.getElementById("validador").innerHTML = "La provincia tiene el formato valido";
            document.getElementById("validador").className = "green";
        } else {
            document.getElementById("validador").innerHTML = "La provincia no tiene el formato valido";
            document.getElementById("validador").className = "rojo";
        }
    } else {
        document.getElementById("demo").innerHTML = "Codigo invalido!";
        document.getElementById("demo").className = "rojo";
    }
}
// Funcion del botón “Mostrar Valoración” que indicará en pantalla el
// valor que el usuario ha seleccionado en el elemento rango.

function valoracionbtn() {
    valoracion = document.getElementById("sRange");
    alert("Le informamos que su valoración ha sido: " +
        valoracion.value);
}
// Funcion del botón “Mostrar Cuenta” que indicará en pantalla la
// cuenta bancaria introducida por el usuario.
function cuentabtn() {
    pais = document.getElementById("pais");
    iban = document.getElementById("ciban");
    enti = document.getElementById("enti");
    suc = document.getElementById("suc");
    cpostal = document.getElementById("dc");
    cuenta = document.getElementById("cuenta");
    //Comparamos nombre y apellido si están vacíos
    alert("Le informamos que su cuenta bancaria es: " + pais.value +
        iban.value + enti.value + suc.value + cpostal.value + cuenta.value);
}
// Funcion del botón “Mostrar Día Semana” que indicará qué día de la
// semana (Lunes a Domingo) corresponde la fecha introducida.

function diabtn() {
    fecha = document.getElementById("selectedDate");
    realDateObject = new Date(fecha.value);
    week = realDateObject.getDay();
    if (week == 0) {
        alert("Domingo");
    } else if (week == 1) {
        alert("Lunes");
    } else if (week == 2) {
        alert("Martes");
    } else if (week == 3) {
        alert("Miercoles");
    } else if (week == 4) {
        alert("Jueves");
    } else if (week == 5) {
        alert("Viernes");
    } else if (week == 6) {
        alert("Sabado");
    }
}
// Funcion para indicar al usuario que el formulario se ha
enviado

function Valida() {
    alert("Gracias por enviar el formulario");
    // Funcion para indicar al usuario que los datos del formulario se han borrado
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
    alert("Datos borrados");
}
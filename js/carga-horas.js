//array empleados
let alta_empleados;
//array horas
let totalQuincena;
//variables de ingreso
let hora_ingreso;
let hora_salida;
//variables de calculo horas
let horas_totales = 0;
let horas_normales = 0;
let horas_50 = 0;
let horas_100 = 0;
let horas_nocturnas = 0;
// futuro array
let horasGuardadas;

parseFloat(horas_totales);
parseFloat(horas_normales);
parseFloat(horas_50);
parseFloat(horas_100);
parseFloat(horas_nocturnas);

//variables de DOM
const selectEmpleados = document.querySelector("#selectEmpleados"),
form_parte = document.querySelector("#form_parte"),
fecha_parte = document.querySelector("#fecha_parte"),
horaIngreso = document.querySelector("#hora_ingreso"),
horaSalida = document.querySelector("#hora_salida");

// IF TRAE EMPLEADOS DEL LOCALSTORAGE
if (localStorage.getItem("empleados")){
    alta_empleados = JSON.parse(localStorage.getItem("empleados"));
} else{
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Dar de alta empleados',
        footer: '<a href="../pages/alta-personal.html">Desea dar de alta un empleado?</a>'
    });
}
if (localStorage.getItem("horas_empleados")){
    horasGuardadas = JSON.parse(localStorage.getItem("horas_empleados"));
} else{
    horasGuardadas = [];
}

//variable de fechas


//FUNCIONES
//FUNCION CREAR OPTION
function crearhtml(arr){
    selectEmpleados.innerHTML = "";
let html = "";
for (const item of arr) {
    html = `<option value="${item.legajo}">${item.apellido} ${item.nombre}</option>`;
    selectEmpleados.innerHTML += html;
}
}
// FUNCION CONSTRUCTORA
function totalHoras(legajoEmpleado, apellidoEmpleado, nombreEmpleado, fecha_parte, milisegundos, 
    horaingreso, horasalida, hsnor, hs50, hs100, hsnornoc){
    
    this.legajoEmpleado = legajoEmpleado;
    this.apellidoEmpleado = apellidoEmpleado;
    this.nombreEmpleado = nombreEmpleado;
    this.fecha_parte = fecha_parte;
    this.milisegundos = milisegundos;
    this.horaingreso = horaingreso;
    this.horasalida = horasalida;
    this.hsnor = hsnor;
    this.hs50 = hs50;
    this.hs100 = hs100;
    this.hsnornoc = hsnornoc;
}

//funcion guarda empleados
function guardar_horas(elemento){
    return horasGuardadas.push(elemento);
}

//funcion guarda LS
function guardarLS(arr){
    return localStorage.setItem('horas_empleados', JSON.stringify(arr));
}

//funcion de calculos lunes a jueves
function semana() {
    // IF DIAS DE SEMANA
    //horas_totales = hora_salida - hora_ingreso;

    if(horas_totales > 9 && hora_salida <= 21){
        horas_50 = horas_totales - 9;
        horas_normales = horas_totales - horas_50;
    }
    else if(horas_totales > 9 && hora_salida > 21 && hora_salida <= 24){
        horas_nocturnas = hora_salida - 21;
        horas_50 = horas_totales - horas_nocturnas - 9;
        horas_normales = horas_totales - horas_50 - horas_nocturnas;
        }
    else if (horas_totales <= 9){
        horas_normales = horas_totales;
        }
    }
function viernes() {
    // IF VIERNES
        if(horas_totales > 8 && hora_salida <= 21){
        horas_50 = horas_totales - 8;
        horas_normales = horas_totales - horas_50;
        }
        else if(horas_totales > "8" && hora_salida > 21 && hora_salida <= 24){
        horas_nocturnas = hora_salida - 21;
        horas_50 = horas_totales - horas_nocturnas - 8;
        horas_normales = horas_totales - horas_50 - horas_nocturnas;
        }
        else if (horas_totales <= "8"){
        horas_normales = horas_totales;
        }
        }
function sabado() {
    // IF SABADO  
    if (hora_ingreso < 13 && hora_salida <= 13 && horas_totales <= 6){
    horas_50 = horas_totales;
}
    else if(hora_ingreso < 13 && hora_salida > 13 && horas_totales > 6){
    horas_100 = horas_totales - 6;
    horas_50 = horas_totales - horas_100;
    }
    else if(hora_ingreso > 13 && hora_salida < 21){
    horas_100 = horas_totales;
    }
    else if(hora_ingreso < 13 && hora_salida > 21 && hora_salida <= 24){
    horas_nocturnas = hora_salida - 21;
    horas_50 = 13 - hora_ingreso;
    horas_100 = horas_totales - horas_nocturnas - horas_50;
    }
    else if(hora_ingreso > 13 && hora_salida > 21 && hora_salida <= 24){
    horas_nocturnas = hora_salida - 21;
    horas_100 = horas_totales - horas_nocturnas;
    }
}
function domingo() {
// IF DOMINGO
    if(hora_salida < 21){
    horas_100 = horas_totales;
    }
    else if (hora_salida > 21 && hora_salida < 24){
    horas_nocturnas = hora_salida - 21;
    horas_100 = horas_totales - horas_nocturnas;
}
}

//EVENTO CARGA SELECT
window.onload = crearhtml(alta_empleados);

//EVENTO CALCULO DE HORAS
form_parte.addEventListener('submit', (e)=>{
    e.preventDefault();

    const DateTime = luxon.DateTime;
    let fecha = fecha_parte.value.toLocaleString(DateTime.DATE_SHORT);
    let dates = document.querySelectorAll('input[type="date"]');

    let bloqueoMin = DateTime.now().plus({months: -6}).toFormat("yyyy-MM-dd");
    let bloqueoMax = DateTime.now().plus({ days: 1 }).toFormat("yyyy-MM-dd");
    
    console.log(fecha);
    console.log(bloqueoMin);
    console.log(bloqueoMax);

    dates.forEach((element) => {
        element.setAttribute("min", bloqueoMin);
        element.setAttribute("max", bloqueoMax);
    });
    
    const fechaA = new Date(fecha_parte.value);
    let dia = fechaA.getDay();
    let milisegundos = fechaA.getTime();

    hora_ingreso = horaIngreso.value;
    hora_salida = horaSalida.value;
    horas_totales = hora_salida - hora_ingreso;


/*GETDAY: DOMINGO = 0 - LUNES = 1 - MARTES = 2 - MIERCOLES = 3 - 
JUEVES = 4 - VIERNES = 5 SABADO = 6 */

if (dia == 0 || dia == 1 || dia == 2 || dia == 3 ){
    semana();
} else if (dia == 4) {
    viernes();
} else if (dia == 5) {
    sabado();
} else if (dia == 6){
    domingo();
}
const select = selectEmpleados.selectedIndex;
let legajoEmpleado = alta_empleados[select].legajo;
let apellidoEmpleado = alta_empleados[select].apellido;
let nombreEmpleado = alta_empleados[select].nombre;

const nuevo_registro = new totalHoras(legajoEmpleado, apellidoEmpleado, nombreEmpleado, fecha, milisegundos,
hora_ingreso, hora_salida, horas_normales, horas_50, horas_100, horas_nocturnas);

guardar_horas(nuevo_registro);
guardarLS(horasGuardadas);
form_parte.reset();
})

//array empleados
let alta_empleados;
//array horas
let totalQuincena;
// futuro array
let horasGuardadas;
let horasfiltradas;

//variable de fechas
var DateTime = luxon.DateTime;

//variables de DOM
const selectEmpleados = document.querySelector("#selectEmpleados"),
form_parte = document.querySelector("#form_parte"),
tBody = document.querySelector("#tbody"),
form_filtro = document.querySelector("#form_filtro"),
fecha_incio = document.querySelector("#fecha_inicio"),
fecha_fin = document.querySelector("#fecha_fin"),
tBodyHoras = document.querySelector("#tbodyHoras");

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
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se registran horas',
        footer: '<a href="../pages/carga-masiva.html">Desea cargar horas?</a>'
    });
}


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

// funcion de crear tabla general
function crearTabla(arr){
    tBody.innerHTML = "";
    let html = "";
    for (const item of arr){
    html = `<tr>
    <td>${item.legajoEmpleado}</td>
    <td>${item.nombreEmpleado}</td>
    <td>${item.apellidoEmpleado}</td>
    <td>${item.fecha_parte}</td>
    <td>${item.horaingreso}</td>
    <td>${item.horasalida}</td>
    <td>${item.hsnor}</td>
    <td>${item.hs50}</td>
    <td>${item.hs100}</td>
    <td>${item.hsnornoc}</td>
    </tr>`;
    tBody.innerHTML += html;
    }
}

// funcion de crear tabla Horas
function crearTablaTotales(hsnor ,hs50 ,hs100 ,hsnornoc ,horasNormalizadas){
    tBodyHoras.innerHTML = "";
    let html = "";
    html = `<tr>
    <td>${hsnor}</td>
    <td>${hs50}</td>
    <td>${hs100}</td>
    <td>${hsnornoc}</td>
    <td>${horasNormalizadas}</td>
    </tr>`;
    tBodyHoras.innerHTML = html;
    }


//FUNCION BUSCAR
function filtrarPorLegajo(filtro){
    return horasGuardadas.filter((el)=>{
        return el.legajoEmpleado == filtro;
    })
}
// FUNCION FILTRAR POR FECHA
function filtrarPorfechaA(arr, miliSegIn, miliSegFin){
        return arr.filter ((el)=>{
            return parseFloat(el.milisegundos) >= parseFloat(miliSegIn) &&
            parseFloat(el.milisegundos) <= parseFloat(miliSegFin);
        })
    }
// FUNCIONES DE CALCULO
function calcularNormalizadas(arr) {
    let hsnormalizadas = 0;
    for (const i of arr) {
        hsnormalizadas += parseFloat(i.hsnor) + parseFloat(i.hs50)*1.5 + 
        parseFloat(i.hs100)*2 + parseFloat(i.hsnornoc)*1.33;
    }; return hsnormalizadas;
    }
function sumarHorasnor(arr) {
    let sumarHoras = 0;
    for (const i of arr) {
        sumarHoras += parseFloat(i.hsnor);
    }; return sumarHoras;
}
function sumarHoras50(arr) {
    let sumarHoras = 0;
    for (const i of arr) {
        sumarHoras += parseFloat(i.hs50);
    }; return sumarHoras;
}
function sumarHoras100(arr) {
    let sumarHoras = 0;
    for (const i of arr) {
        sumarHoras += parseFloat(i.hs100);
    }; return sumarHoras;
}
function sumarHorasnornoc(arr) {
    let sumarHoras = 0;
    for (const i of arr) {
        sumarHoras += parseFloat(i.hsnornoc);
    }; return sumarHoras;
}
function sumar(params) {
    
}

//EVENTO CARGA SELECT

//EVENTO CARGA SELECT Y TABLA
window.onload = crearhtml(alta_empleados);
window.onload = crearTabla(horasGuardadas);

//EVENTO FILTRADO DE TABLA CON SELECT

selectEmpleados.addEventListener("input", ()=>{
const selectLegajo = selectEmpleados.selectedIndex;
const filtrarTabla = filtrarPorLegajo(selectLegajo);
crearTabla(filtrarTabla);

let horasNormalizadas = calcularNormalizadas(filtrarTabla);
let horasnor = sumarHorasnor(filtrarTabla);
let horas50 = sumarHoras50(filtrarTabla);
let horas100 = sumarHoras100(filtrarTabla);
let horasnornoc = sumarHorasnornoc(filtrarTabla);

crearTablaTotales(horasnor, horas50, horas100, horasnornoc, horasNormalizadas);
})

//EVENTO FILTRAR POR FECHA
form_filtro.addEventListener('submit', (e)=>{
    e.preventDefault();
    //Desarmar Fecha
    const fechaIn = new Date(fecha_incio.value);
    const fechaFin = new Date(fecha_fin.value);
    let miliSegIn = fechaIn.getTime();
    let miliSegFin = fechaFin.getTime();

    const selectLegajo = selectEmpleados.selectedIndex;
    const filtrarTabla = filtrarPorLegajo(selectLegajo);
    const filtroPorFechas = filtrarPorfechaA(filtrarTabla, miliSegIn, miliSegFin);

    console.log(filtroPorFechas);
    crearTabla(filtroPorFechas);

        let horasNormalizadas = calcularNormalizadas(filtroPorFechas);
        let horasnor = sumarHorasnor(filtroPorFechas);
        let horas50 = sumarHoras50(filtroPorFechas);
        let horas100 = sumarHoras100(filtroPorFechas);
        let horasnornoc = sumarHorasnornoc(filtroPorFechas);
        
        crearTablaTotales(horasnor, horas50, horas100, horasnornoc, horasNormalizadas);
});

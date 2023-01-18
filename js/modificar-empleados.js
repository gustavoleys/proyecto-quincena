let alta_empleados;
const search = document.querySelector("#buscar"),
selectEmpleados = document.querySelector("#selectEmpleados"),
btn_guardar = document.querySelector("#btn_guardar");

if (localStorage.getItem("empleados")){
    alta_empleados = JSON.parse(localStorage.getItem("empleados"));
} else{
    alert("Cargar empleados")
}
console.log(alta_empleados);

//FUNCION PARA MODIFICAR EMPLEADOS
function empleados(nombre, apellido, cuil, direccion, categoria, fecha_alta, legajo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cuil = cuil;
    this.direccion = direccion;
    this.categoria = categoria;
    this.fecha_alta = fecha_alta;
    this.legajo = legajo;
}
//funcion guarda empleados
function guardar_empleados(alta__empleados){
    return alta_empleados.push(alta__empleados);
}
//funcion guarda LS
function guardarLS(arr){
    return localStorage.setItem('empleados', JSON.stringify(arr));
}
//FUNCION BUSCAR
function filtrarPorNombre(arr, filtro){
    return arr.find((arr)=>{
    return arr.nombre.includes(filtro);   
    })
}
//FUNCION CREAR OPTION
function crearhtml(arr){
    selectEmpleados.innerHTML = "";
let html = "";
for (const item of arr) {
    html = `<option value="${item.legajo}">${item.apellido} ${item.nombre}</option>`;
    selectEmpleados.innerHTML += html;
}
}

function agregarEmpleado(arr, posicionIni,posicionFin, Objeto) {
    arr.splice(posicionIni, posicionFin, Objeto);
}
function eliminarEmpleado(arr, posicionIni, posicionFin) {
    arr.splice(posicionIni, posicionFin);
}


// EVENTO LISTADO PERSONAL
window.onload = crearhtml(alta_empleados);

// EVENTO BUSCAR
search.addEventListener("input", ()=>{
    if (search.value === '') {
        crearhtml(alta_empleados);
    } else {
    const encontrado = filtrarPorNombre(alta_empleados, search.value);
    console.log(encontrado);
    const encont = [];
    encont.push(encontrado);
    crearhtml(encont);    
    }
})
// EVENTO SELECCIONAR
selectEmpleados.addEventListener("input", ()=>{

    const select = selectEmpleados.selectedIndex;
document.querySelector("#legajo").value = alta_empleados[select].legajo;
document.querySelector("#fecha_alta").value = alta_empleados[select].fecha_alta;
document.querySelector("#nombre").value = alta_empleados[select].nombre;
document.querySelector("#apellido").value = alta_empleados[select].apellido;
document.querySelector("#cuil").value = alta_empleados[select].cuil;
document.querySelector("#direccion").value = alta_empleados[select].direccion;
document.querySelector("#categoria").value = alta_empleados[select].categoria;
})


//FALTA GUARDAR MODIFICACION EN ARRAY

/*btn_guardar.addEventListener('click', () =>{

const legajoNuevo = document.querySelector("#legajo"),
nombre = document.querySelector("#nombre"), 
apellido = document.querySelector("#apellido"),
cuil = document.querySelector("#cuil"),
direccion = document.querySelector("#direccion"),
categoria = document.querySelector("#categoria"),
fecha_alta = document.querySelector("#fecha_alta");



const nuevo_empleado = new empleados(nombre.value, apellido.value, 
    cuil.value, direccion.value, categoria.value, fecha_alta.value, legajoNuevo.value);

    let legt = alta_empleados.length;

    eliminarEmpleado(alta_empleados, legt, legt+1);
    agregarEmpleado(alta_empleados, legt, legt+1, nuevo_empleado);

//guardar_empleados(nuevo_empleado);
guardarLS(alta_empleados);
//form_alta.reset();
})*/



















/*for (let i = 0; i < alta_empleados.length; i++) {
    selectEmpl.Option[i].text = new Option(alta_empleados[i].nombre);
    //selectEmpl.innerHTML = new Option(alta_empleados[i].nombre);;
};*/

/*function additem() {

    alta_empleados.forEach(e => {
const option = `<option value="${alta_empleados.nombre}">${alta_empleados.nombre}</option>`;
});

selectEmpl.insertAdjacentHTML('beforeend', option);
}

window.onload = additem(); */

/*for (let i = 0; i < alta_empleados.length; i++) {
    selectEmpl.innerHTML = "<option>" + alta_empleados[i].nombre + "</option>";
};*/

//console.log(encontrado);
//console.log(empl_filtrado);


//const filtrado = buscarPorNombre (alta_empleados,filtro.value);

//console.log(filtrado)

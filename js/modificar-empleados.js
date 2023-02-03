let alta_empleados;
let encont = "";

const search = document.querySelector("#buscar"),
selectEmpleados = document.querySelector("#selectEmpleados"),
btn_guardar = document.querySelector("#btn_guardar");

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
//funcion guarda LS
function guardarLS(arr){
    return localStorage.setItem('empleados', JSON.stringify(arr));
}
//funcion guarda LS Provisorio
function guardarLSprovisorio(arr){
    return localStorage.setItem('encontrado', JSON.stringify(arr));
}
//FUNCION BUSCAR
function filtrarPorNombre(arr, filtro){
    return arr.find((arr)=>{
    return arr.apellido.includes(filtro);
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
// FUNCION MODIFICAR OBJETO
function modificarObjeto(arr, select, fecha_altaModif, nombreModif, apellidoModif,
    cuilModif, direccionModif, categoriaModif, bajaModif) {
    arr[select].fecha_alta = fecha_altaModif;
    arr[select].nombre = nombreModif;
    arr[select].apellido = apellidoModif;
    arr[select].cuil = cuilModif;
    arr[select].direccion = direccionModif;
    arr[select].categoria = categoriaModif;
    arr[select].baja = bajaModif;
}
// EVENTO LISTADO PERSONAL
window.onload = crearhtml(alta_empleados);

// EVENTO BUSCAR
search.addEventListener("input", ()=>{
    if (search.value === "") {
        crearhtml(alta_empleados);
    } else {
    const encontrado = filtrarPorNombre(alta_empleados, search.value);
    encont = [];
    encont.push(encontrado);
    crearhtml(encont);
    }
})

// EVENTO SELECCIONAR
selectEmpleados.addEventListener("input", ()=>{
    let select;
    let selecc;

    if (encont === "") {
        select = selectEmpleados.selectedIndex;
    }else{
        selecc = selectEmpleados.selectedIndex;
        select = encont[selecc].legajo;
    };
console.log(select);
document.querySelector("#legajo").value = alta_empleados[select].legajo;
document.querySelector("#fecha_alta").value = alta_empleados[select].fecha_alta;
document.querySelector("#nombre").value = alta_empleados[select].nombre;
document.querySelector("#apellido").value = alta_empleados[select].apellido;
document.querySelector("#cuil").value = alta_empleados[select].cuil;
document.querySelector("#direccion").value = alta_empleados[select].direccion;
document.querySelector("#listcategoria").value = alta_empleados[select].categoria;
document.querySelector("#baja").value = alta_empleados[select].baja;

encont = "";
})


const form_modif = document.querySelector("#form_modif"),
legajoModif = document.querySelector("#legajo"),
fecha_altaModif = document.querySelector("#fecha_alta"),
nombreModif = document.querySelector("#nombre"),
apellidoModif = document.querySelector("#apellido"),
cuilModif = document.querySelector("#cuil"),
direccionModif = document.querySelector("#direccion"),
categoriaModif = document.querySelector("#listcategoria"),
bajaModif = document.querySelector("#baja");

// EVENTO MODIFICAR OBJETO
form_modif.addEventListener('submit', (e)=>{
    e.preventDefault();

    let cuilEx = cuilModif.value;
    let cui = alta_empleados.find(e => e.cuil == cuilEx);
    const select = selectEmpleados.selectedIndex;
    
    if (cui === undefined) {
    modificarObjeto(alta_empleados ,select, fecha_altaModif.value, nombreModif.value, apellidoModif.value,
        cuilModif.value, direccionModif.value, categoriaModif.value, bajaModif.value);
    guardarLS(alta_empleados);
    } else if (cui.cuil === alta_empleados[select].cuil) {
        modificarObjeto(alta_empleados ,select, fecha_altaModif.value, nombreModif.value, apellidoModif.value,
            cuilModif.value, direccionModif.value, categoriaModif.value, bajaModif.value);
        guardarLS(alta_empleados);
    } else {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ya existe este empleado!',
        footer: '<a href="">Desea ingresar otro empleado?</a>'
        });
    }
})

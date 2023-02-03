// https://github.com/DanielRiverol/34130-js
//https://moment.github.io/luxon/#/?id=luxon

//                              INCIO ALTA DE PERSONAL
const form_alta = document.querySelector("#form_alta"),
nombre = document.querySelector("#nombre"), 
apellido = document.querySelector("#apellido"),
cuil = document.querySelector("#cuil"),
direccion = document.querySelector("#direccion"),
categoria = document.querySelector("#listcategoria"),
fecha_alta = document.querySelector("#fecha_alta"),
btnguardar = document.querySelector("#guardar");

let alta_empleados;

if (localStorage.getItem("empleados")){
    alta_empleados = JSON.parse(localStorage.getItem("empleados"));
} else{
    alta_empleados = [];
}
//funcion constructora de empleados
function empleados(nombre, apellido, cuil, direccion, categoria, fecha_alta, legajo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cuil = cuil;
    this.direccion = direccion;
    this.categoria = categoria;
    this.fecha_alta = fecha_alta;
    this.legajo = alta_empleados.length;
    this.baja = "No";
}
//funcion guarda empleados
function guardar_empleados(alta__empleados){
    return alta_empleados.push(alta__empleados);
}
//funcion guarda LS
function guardarLS(arr){
    return localStorage.setItem('empleados', JSON.stringify(arr));
}


//evento
form_alta.addEventListener('submit', (e)=>{
e.preventDefault();
let cuilEx = cuil.value;
let cui = alta_empleados.find(e => e.cuil == cuilEx);

if (cui === undefined) {
    const nuevo_empleado = new empleados(nombre.value, apellido.value, 
    cuil.value, direccion.value, categoria.value, fecha_alta.value);
    guardar_empleados(nuevo_empleado);
    guardarLS(alta_empleados);
    form_alta.reset();
} else {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ya existe este empleado!',
        footer: '<a href="">Desea ingresar otro empleado?</a>'
    });
    form_alta.reset(); 
}
})


//                                FIN DE ALTA DE EMPLEADOS

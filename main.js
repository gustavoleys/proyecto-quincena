let hsnor = 0;
let hs50 = 0;
let hs100 = 0;
let hsnornoc = 0;
let horaingreso = 0;
let horasalida = 0;

parseFloat(hsnor);
parseFloat(hs50);
parseFloat(hs100);
parseFloat(hsnornoc);
parseFloat(horaingreso);
parseFloat(horasalida);


function totalHoras(hsnor, hs50, hs100, hsnornoc,horaingreso, horasalida){
    this.hsnor = hsnor;
    this.hs50 = hs50;
    this.hs100 = hs100;
    this.hsnornoc = hsnornoc;
    this.horaingreso = horaingreso;
    this.horasalida = horasalida;
}

const H1H16 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H2H17 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H3H18 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H4H19 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H5H20 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H6H21 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H7H22 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H8H23 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H9H24 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H10H25 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H11H26 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H12H27 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H13H28 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H14H29 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H15H30 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);
const H31 = new totalHoras (hsnor, hs50, hs100, hsnornoc, horaingreso, horasalida);

const totalQuincena = [H1H16, H2H17, H3H18, H4H19, H5H20, H6H21, H7H22, H8H23, H9H24, H10H25, H11H26, H12H27, H13H28, H14H29, H15H30, H31];

for (let i = 0; i < totalQuincena.length; i++){

    let dia = prompt("Ingrese el dia de la semana correspondiente (lunes, martes, miercoles, jueves, viernes, sabado o domingo)");
    let hora_ingreso = prompt("Hora de ingreso del personal (formato 24hs)");
    let hora_salida = prompt("Hora de egreso del personal (formato 24hs)");
    let horas_totales = hora_salida - hora_ingreso;
        
    parseFloat(hora_ingreso);
    parseFloat(hora_salida);
    parseFloat(horas_totales);

    //VARIABLES EN 0
    let horas_normales = 0;
    let horas_50 = 0;
    let horas_100 = 0;
    let horas_nocturnas = 0;

//FUNCIONES 
    function muestraerror(){
        alert("error al ingresar las horas");
    }
    function asignavalores(){
    parseFloat(hora_ingreso);
    totalQuincena[i] = new totalHoras (horas_normales, horas_50, horas_100, horas_nocturnas, hora_ingreso, hora_salida)
    }

// IF DIAS DE SEMANA
    if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves"){
    
    if(horas_totales > 9 && hora_salida <= 21){
    horas_50 = horas_totales - 9;
    horas_normales = horas_totales - horas_50;
    asignavalores();
    }

    else if(horas_totales > 9 && hora_salida > 21 && hora_salida <= 24){
    horas_nocturnas = hora_salida - 21;
    horas_50 = horas_totales - horas_nocturnas - 9;
    horas_normales = horas_totales - horas_50 - horas_nocturnas;
    asignavalores();
    }

    else if (horas_totales <= 9){
    horas_normales = horas_totales;
    asignavalores();
    }
    else{
    muestraerror();
    }
    }
    // IF VIERNES

    else if (dia == "viernes"){
    
    if(horas_totales > 8 && hora_salida <= 21){
    horas_50 = horas_totales - 8;
    horas_normales = horas_totales - horas_50;
    asignavalores();
    }
    
    else if(horas_totales > "8" && hora_salida > 21 && hora_salida <= 24){
    horas_nocturnas = hora_salida - 21;
    horas_50 = horas_totales - horas_nocturnas - 8;
    horas_normales = horas_totales - horas_50 - horas_nocturnas;
    asignavalores();
    }
    
    else if (horas_totales <= "8"){
    horas_normales = horas_totales
    asignavalores();
    }
    
    else{
    muestraerror();
    }

    }

    // IF SABADO   
    else if (dia == "sabado"){
    if (hora_ingreso < 13 && hora_salida <= 13 && horas_totales <= 6){
    horas_50 = horas_totales;
    asignavalores();
    }
    
    else if(hora_ingreso < 13 && hora_salida > 13 && horas_totales > 6){
    horas_100 = horas_totales - 6;
    horas_50 = horas_totales - horas_100;
    asignavalores();
    }
    
    else if(hora_ingreso > 13 && hora_salida < 21){
    horas_100 = horas_totales;
    asignavalores();
    }
    
    else if(hora_ingreso < 13 && hora_salida > 21 && hora_salida <= 24){
    horas_nocturnas = hora_salida - 21;
    horas_50 = 13 - hora_ingreso;
    horas_100 = horas_totales - horas_nocturnas - horas_50;
    asignavalores();
    }
    
    else if(hora_ingreso > 13 && hora_salida > 21 && hora_salida <= 24){
    horas_nocturnas = hora_salida - 21;
    horas_100 = horas_totales - horas_nocturnas;
    asignavalores();
    }
    
    else{
    muestraerror();
    }

    }

    // IF DOMINGO
    else if (dia == "domingo"){
    if(hora_salida < 21){
    horas_100 = horas_totales;
    asignavalores();
    }
    
    else if (hora_salida > 21 && hora_salida < 24){
    horas_nocturnas = hora_salida - 21;
    horas_100 = horas_totales - horas_nocturnas;
    asignavalores();
    }
    
    else{
    muestraerror();
    }
    }
//FIN IF
}
//FIN FOR

//MUESTRA ARRAY
console.log(totalQuincena);

//CALCULO DE HORAS TOTALES
let suma_horasN = 0;
let suma_horas50 = 0;
let suma_horas100 = 0;
let suma_horasNoc = 0;
let horasNormalizadas = 0;

parseFloat(suma_horasN);
parseFloat(suma_horas50);
parseFloat(suma_horas100);
parseFloat(suma_horasNoc);
parseFloat(horasNormalizadas);

totalQuincena.forEach(function(totalQuincena){
    suma_horasN += totalQuincena.hsnor;
    suma_horas50 += totalQuincena.hs50;
    suma_horas100 += totalQuincena.hs100;
    suma_horasNoc += totalQuincena.hsnornoc;
}
)
//MUESTRA SUMA HORAS DE TODO EL ARRAY 
console.log("total de horas normales:" + suma_horasN);
console.log("total de horas %50:" + suma_horas50);
console.log("total de horas %100:" + suma_horas100);
console.log("total de horas nocturnas:" + suma_horasNoc);

//CALCULA HORAS NORMALIZADAS
function hsNorm() {
    return (n,j,k,p) => n +(j * 1.5) + (k * 2) + (p * 1.33)
}

horasNormalizadas = hsNorm()

//MUESTRA HORAS NORMALIZADAS
console.log( "Total Horas normalizadas:" + horasNormalizadas(suma_horasN,suma_horas50,suma_horas100,suma_horasNoc))

//AGREGAR TOTALES AL ARRAY
totalQuincena.push(suma_horasN, suma_horas50, suma_horas100, suma_horasNoc, horasNormalizadas(suma_horasN,suma_horas50,suma_horas100,suma_horasNoc))


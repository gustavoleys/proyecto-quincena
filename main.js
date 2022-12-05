
let i = 0;
let continuar = "";

while (continuar != 1) {

i++;
console.log ("numero de registo:"+i);

let dia = prompt("Ingrese el dia de la semana correspondiente (lunes, martes, miercoles, jueves, viernes, sabado o domingo)");
let hora_ingreso = prompt("Hora de ingreso del personal (formato 24hs)");
let hora_salida = prompt("Hora de egreso del personal (formato 24hs)");
let horas_totales = hora_salida - hora_ingreso;

parseFloat(hora_ingreso);
parseFloat(hora_salida);
parseFloat(horas_totales);

console.log ("hora de ingreso:" + hora_ingreso + " " +"hora de salida:"+ hora_salida);

function muestraerror(){
    alert("error al ingresar las horas");
}
function muestrahoras(hs_norm, hs_50, hs_100, hs_noct){
    console.log("Las horas del dia"," ",dia," ","fueron,"," ","Normales:",hs_norm,
    "- -","extras 50%:",hs_50,"- -","extras 100%:",hs_100,"- -","horas nocturnas:",hs_noct);
}

if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves"){
    
    if(horas_totales > 9 && hora_salida <= 21){
        
        let horas_50 = horas_totales - 9;
        let horas_normales = horas_totales - horas_50
        muestrahoras(horas_normales, horas_50, 0, 0);
    }   

        else if(horas_totales > 9 && hora_salida > 21 && hora_salida <= 24){
            let horas_nocturnas = hora_salida - 21;
            let horas_50 = horas_totales - horas_nocturnas - 9;
            let horas_normales = horas_totales - horas_50 - horas_nocturnas;
            muestrahoras(horas_normales, horas_50, 0, horas_nocturnas);
        }    

            else if (horas_totales <= 9){
                let horas_normales = horas_totales;
                muestrahoras(horas_normales, 0, 0, 0);
            }

                else{
                    muestraerror();
                }
}
else if (dia == "viernes"){
    
    if(horas_totales > 8 && hora_salida <= 21){
        
        let horas_50 = horas_totales - 8;
        let horas_normales = horas_totales - horas_50;
        muestrahoras(horas_normales, horas_50, 0, 0);
    }   

        else if(horas_totales > "8" && hora_salida > 21 && hora_salida <= 24){
            let horas_nocturnas = hora_salida - 21;
            let horas_50 = horas_totales - horas_nocturnas - 8;
            let horas_normales = horas_totales - horas_50 - horas_nocturnas;
            muestrahoras(horas_normales, horas_50, 0, horas_nocturnas);
        }    

            else if (horas_totales <= "8"){
                let horas_normales = horas_totales
                muestrahoras(horas_normales, 0, 0, 0);
            }

                else{
                    muestraerror();
                }
}   
else if (dia == "sabado"){
    
    if (hora_ingreso < 13 && hora_salida <= 13 && horas_totales <= 6){
        let horas_50 = horas_totales;
        muestrahoras(0, horas_50, 0, 0);
    }

        else if(hora_ingreso < 13 && hora_salida > 13 && horas_totales > 6){
            let horas_100 = horas_totales - 6;
            let horas_50 = horas_totales - horas_100;
            muestrahoras(0, horas_50, horas_100, 0);
        }
            else if(hora_ingreso > 13 && hora_salida < 21){
                let horas_100 = horas_totales;
                muestrahoras(0, 0, horas_100, 0);
            }
                else if(hora_ingreso < 13 && hora_salida > 21 && hora_salida <= 24){
                    let horas_nocturnas = hora_salida - 21;
                    let horas_50 = 13 - hora_ingreso;
                    let horas_100 = horas_totales - horas_nocturnas - horas_50;
                    muestrahoras(0, horas_50, horas_100, horas_nocturnas);
                }
                    else if(hora_ingreso > 13 && hora_salida > 21 && hora_salida <= 24){
                        let horas_nocturnas = hora_salida - 21;
                        let horas_100 = horas_totales - horas_nocturnas;
                        muestrahoras(0, 0, horas_100, horas_nocturnas);
                    }
                        else{
                            muestraerror();
                        }
}
else if (dia == "domingo"){
    
    if(hora_salida < 21){
        let horas_100 = horas_totales;
        muestrahoras(0, 0, horas_100, 0);
    } 
        else if (hora_salida > 21 && hora_salida < 24){
            let horas_nocturnas = hora_salida - 21;
            let horas_100 = horas_totales - horas_nocturnas;
            muestrahoras(0, 0, horas_100, horas_nocturnas);
        }
            else{
                muestraerror();
            }
}
continuar = prompt ("Para finalizar ingrese 1, para continuar ingrese 0");
}
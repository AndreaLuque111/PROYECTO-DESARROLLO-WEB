function suma(a,b) {
let resultado =a+b 
return(resultado) } 

suma(1,2)


function multiplicacion (a,b){
    let resultado=a*b
    return(resultado)
}

multiplicacion (5,15)


//Ejercicio CalcularPrecio

function calcularPrecio(precioBase, descuento) {
    if (precioBase <= 0 || descuento < 0 || descuento > 100) {
        return "Los valores ingresados son inválidos";}

    if (descuento === 0) {
        return `El precio final sin descuento es ${precioBase}`;}

    const precioFinal = precioBase - (precioBase * descuento / 100);
    return `El precio final con descuento es $${precioFinal}`;
} 

//Ejercicio ARRAY

function mayorArray(array){

    
    if(array.length == 0){
        return null;
    }
    
    else if(array.length == 1){
        return array[0];
    }
    else{

    //  variables
    let i = 0, mayornumero = 0, impares = 0;
    

        while (i<array.length){
            console.log("dato " + array[i]+" Posición "+i);
            i++;
        }
    
        i=0;
    
    
        do {
            if (array[i]%2 != 0){
                impares ++;
            } 
            i++;
        }while (i<array.length);

    
        for (let j=0; j<array.length; j++){
            if(array[j]>mayornumero){
                mayornumero= array[j];
            }
        }
  
        return "Número mayor: "+mayornumero + " Cantidad de impares: "+impares;
    }
}
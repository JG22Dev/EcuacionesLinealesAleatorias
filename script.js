//Variables
let boton = document.getElementById('boton');
let ecuacion = document.getElementById('ecuacion');
//funcion de generador aleatorio de valor entero
function generarEnteroAleatorio(min,max){
    //sin incluir max en los valores posibles.
    return Math.floor(Math.random() * (max-min)+min);
}
//funcion para cambiar la ecuacion dependiendo el indice del array con sus objetos.
function cambiarEcuacion(){
    let indiceAleatorio = generarEnteroAleatorio(0, ecuaciones.length)
    ecuacion.innerText = `${ecuaciones[indiceAleatorio].ecuacion}`;
}
//se llama a la funcion
cambiarEcuacion();
//se llama al evento para cambiar
//NOTA: cuando es el evento no hace falta escribir los parentesis a la funcion.
boton.addEventListener('click',cambiarEcuacion);
let nombre = "Joel", edad = 24, dni = null, estatura = undefined;
console.log(nombre);
console.log(typeof(nombre));



//let edad = 24;
console.log(edad);
console.log(typeof(edad));


let booleano = false;
console.log ("false")
console.log(typeof(booleano));

console.log(dni);
console.log(typeof dni);
console.log (estatura)
console.log(typeof estatura);

const valor1 = Symbol("pikachu");
console.log(valor1);
console.log(typeof valor1);

const objeto = {nombre: "joel", apellidos: "puig sanchez", dni:"39945670R"};
console.table(objeto);
console.log(typeof objeto)

const array = ["Joel", 24, 1999, "puig", "sanchez"]
console.log(array);
console.log(array[2]); //ordre d'aparició
console.log(array[0]);
console.log(array[1]);
console.log (typeof array);

const capturar = function(){
    console.log("pikachu");
    console.log(typeof capturar);
}
capturar();

const saludar = "hola"; // scope global
if(true){
    let edad = 22; //scope local a nivel de bloque
}

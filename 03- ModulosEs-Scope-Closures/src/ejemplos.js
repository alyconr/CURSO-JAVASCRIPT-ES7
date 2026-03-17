// scope global 
//El scope es el alcance donde una variable existe y se puede usar.
// Scope global
//- variable definia fuera de aulquier funcion o bloque 
//- accesible desde cualquier parte del codigo
//- existe mientras el programa se ejecuta

const appName = "GastosApp"; // scope global

function showAppName() {
    console.log(appName);// la ve por que esta en el scope global
}

showAppName();

// scope de funcion
//- variable definida dentro de una funcion
//- accesible solo dentro de la funcion
//- existe mientras la funcion se ejecuta

function showAppName() {
    const appName = "GastosApp"; // scope de funcion
    console.log(appName);// la ve por que esta en el scope de funcion
}

showAppName();

function calcularTotal() {
    const total = 100; // scope de funcion
    return 100 * (1 + total)
}
// conosole.log(total);// error por que no esta en el scope de funcion
calcularTotal();

// scope de bloque
//- variable definida dentro de un bloque
//- accesible solo dentro del bloque
//- existe mientras el bloque se ejecuta

if (true) {
    const total = 100; // scope de bloque
    console.log(total);// la ve por que esta en el scope de bloque
}
// conosole.log(total);// error por que no esta en el scope de bloque
calcularTotal();

// shadowing (sombras)
// ocurre cuando una variable local tiene el mismo nombre que una variable global
// la variable local "sombrea" la variable global
// la variable local tiene prioridad sobre la variable global

const total = 100; // scope global

function calcularTotal() {
    const total = 200; // scope de funcion
    return 100 * (1 + total)
}
// conosole.log(total);// error por que no esta en el scope de funcion
calcularTotal();

// Hoisting (elevacion)
//- las variables declaradas con var son elevadas al scope global
//- las variables declaradas con let y const no son elevadas al scope global

sayHi();

function sayHi() {
    console.log("Hola");
}

// Closures: funcione  que recuerdan el entorno donde fueron creadas
//- una closure es una funcion que tiene acceso a las variables de su scope padre


function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    }
}

const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());








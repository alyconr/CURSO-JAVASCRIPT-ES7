// funcion toNonEmptyString , funcion que permite validar si un string no esta vaci

function toNonEmptyString(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    throw new Error('El valor debe ser un string no vacío');
  }
    return str;
}

function toNoEmptyString (value, label = 'texto') {
    const str = String(value).trim();// Convertir a string y eliminar espacios en blanco
    if (!str) {
        throw new Error(`El ${label} no puede estar vacío`);
    }
    return str;

}
    

// si esta vacio lanza un error

//funcion titleCase, funcion que perASEmite convertir un string a titulo

 export function titleCase(text) {  // "hola mundo" -> "Hola Mundo"
    return text.toLowerCase()// Convertir a minúsculas Hola Mundo -> hola mundo
        .split(' ') // Dividir en palabras hola mundo -> ["hola", "mundo"]
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar la primera letra de cada palabra
        .join(' '); // Unir las palabras de nuevo en una cadena
}
//funcion slugify, funcion que permite convertir un string a slug ejemplo:
//  "hola mundo" - "hola-mundo"

"use strict";

export function clamp(value, min, max) {
  if (
    !Number.isFinite(value) ||
    !Number.isFinite(min) ||
    !Number.isFinite(max)
  ) {
    throw new TypeError("Todos los argumentos deben ser números finitos.");
  }

  if (min > max) {
    return Math.min(Math.max(value, max), min); // retorna
    // el valor minimo si el valor es menor al minimo
    // o el valor maximo si el valor es mayor al maximo
  }

}

// redondear  a digitos decimales

export function roundTo(value, decimals) {
    if (!Number.isFinite(value) || !Number.isFinite(decimals)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (decimals < 0) {
        throw new Error("Los decimales deben ser un número no negativo.");
    }

    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    
}

// funcion que retorna un numero aleatorio entre min y max

export function random(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (min > max) {
        throw new Error("El mínimo debe ser menor o igual al máximo.");
    }

    return Math.random() * (max - min) + min; // retorna
    // un número aleatorio entre min y max
}
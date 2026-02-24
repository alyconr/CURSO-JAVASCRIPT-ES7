// calculadiora de presupuestos mensual
// * registra ingresos y gastos
// * calcula totales, balance
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
//  que se utiliza para financiar la compra de una vivienda, construcción o mejora de la misma,
//  o para pagar una hipoteca relacionada con la vivienda.
//  EQUILIBRADO  y DEFICIT

// REQUISITOS FUNCIONALES
// * Crear listas  Ingresos[] y Gastos[] con objetos {concepto, monto}
// * Validar: monto debe ser numero finito > = 0
// * Calcular: totalIngresos, totalGastos, balance
// * Clasificar eStdo segun balance 
// * Mostrar reporte en consola (TABLA + RESUMEN)

"use strict"; // "use strict" es una directiva que se utiliza en JavaScript para activar el modo estricto, 
// lo que ayuda a prevenir errores comunes y mejora la seguridad del código.
//  Al usar "use strict", se aplican reglas más estrictas en la interpretación del código, 
// lo que puede ayudar a detectar errores de manera más temprana y evitar comportamientos inesperados.

/**
 * CONVIERTE A NUMERO Y VALIDA QUE SEA UN NUMERO FINITO MAYOR O IGUAL A CERO
 * lANZA UN ERROR SI LA VALIDACION FALLA
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor a número
    if (!Number.isFinite(numero) || numero < 0) { // SI EL NUMERO NO ES FINITO O ES MENOR QUE CERO, LANZA UN ERROR
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }
    return numero;
} 



// MODELAR DATOS DE INGRESOS Y GASTOS
const ingresos = [
    { concepto: "Salario", monto: 5000000 },
    { concepto: "Freelance", monto: 1500000 },
];

/**
 * lo anteriro crea una lista de ingresos 
 */

const gastos = [
    { concepto: "Alquiler", monto: 1200000 },
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];


// CALCULAR TOTALES

function calcularTotal(items) {
    let total = 0;
    for (const item of items) { // RECORRE CADA ITEM EN LA LISTA DE INGRESOS O GASTOS
        total += validarMonto(item.monto); // VALIDA CADA MONTO ANTES DE SUMARLO AL TOTAL
    }
    return total;
}

const totalIngresos = calcularTotal(ingresos);
const totalGastos = calcularTotal(gastos);
const balance = totalIngresos - totalGastos;

// CLASIFICAR ESTADO FINANCIERO

function getEstadoFinanciero(balance) {
    if (balance > 0) {
        return "SUPERAVIT";
    } else if (balance === 0) {
        return "EQUILIBRADO";
    } else {
        return "DEFICIT";
    }
}

function recomendacion(estado) {
    switch (estado) {
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return "";
    }
}

// MOSTRAR REPORTE EN CONSOLA

console.table(ingresos);
console.table(gastos);

console.group ("Resumen Financiero");
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);
console.groupEnd();
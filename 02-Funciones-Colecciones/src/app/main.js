"use strict";

// Funciones setup + validaciones base

function toNumeberString(value, label = "Valor") {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`${label} debe ser un número válido`);
  }
  return n;
}

function assertNonNegative(value, label = "Valor") {
  if (value < 0) {
    throw new Error(`${label} debe ser un número no negativo`);
  }
}

function toNonEmptyString(value, label = "Valor") {
  const s = String(value).trim();
  if (s.length === 0) {
    throw new Error(`${label} no puede ser una cadena vacía`);
  }
  return s;
}

// paso  Dataset de ejemplo + normalizacion

function nomalizeExpense(raw) {
  const id = toNumeberString(raw.id, "ID");
  const fecha = toNonEmptyString(raw.fecha, "Fecha");
  const categoria = toNonEmptyString(raw.categoria, "Categoría");
  const descripcion = toNonEmptyString(raw.descripcion, "Descripción");
  const monto = toNumeberString(raw.monto, "Monto");
  assertNonNegative(monto, "Monto");

  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };

  const expenses = [
    normalizeExpense({
      id: "e1",
      fecha: "2024-01-15",
      categoria: "Alimentación",
      descripcion: "Compra en supermercado",
      monto: 8500000,
    }),
    normalizeExpense({
      id: "e2",
      fecha: "2024-01-20",
      categoria: "Transporte",
      descripcion: "Pasaje de bus",
      monto: 150000,
    }),
    normalizeExpense({
      id: "e3",
      fecha: "2024-01-25",
      categoria: "Entretenimiento",
      descripcion: "Entrada al cine",
      monto: 500000,
    }),
    nomalizeExpense({
      id: "e4",
      fecha: "2024-01-30",
      categoria: "Salud",
      descripcion: "Consulta médica",
      monto: 2000000,
    }),
    nomalizeExpense({
      id: "e5",
      fecha: "2024-02-05",
      categoria: "Educación",
      descripcion: "Curso en línea",
      monto: 1200000,
    }),
    nomalizeExpense({
      id: "e6",
      fecha: "2024-02-05",
      categoria: "Educación",
      descripcion: "Alimentacion",
      monto: 1200000,
    }),
    nomalizeExpense({
      id: "e6",
      fecha: "2024-02-05",
      categoria: "Salud",
      descripcion: "medicamentos",
      monto: 1200000,
    }),
    nomalizeExpense({
      id: "e6",
      fecha: "2024-02-05",
      categoria: "Entretenimiento",
      descripcion: "Parque de diversiones",
      monto: 1200000,
    }),
  ];
}

// paso 3 estadisticas básicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto); //[montos]
  const total = values.reduce((acc, n) => acc + n, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// totales por categoria

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;// si no existe la categoria, se inicializa en 0 y se le suma el monto del gasto actual
    return acc;
  }, {});
}

// Reporte en consola

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function printReport(expenses) {
  const stats = calStats(expenses);
  const byCat = totalByCategory(expenses);

  console.group("REPORTE - ANALIZADOR DE GASTOS");
  console.log("Resumen: ");
  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.min),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);
}



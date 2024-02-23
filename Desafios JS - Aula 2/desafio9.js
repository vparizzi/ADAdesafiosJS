// Dado um array notas, calcule a média aritmética das notas, mas ignore a nota mais baixa e a nota mais alta do conjunto.
let notas = [6, 7, 8, 10, 9];
let notaAlta = Math.max(...notas);
let notaBaixa = Math.min(...notas);

let indexNotaAlta = notas.indexOf(notaAlta);
let indexNotaBaixa = notas.indexOf(notaBaixa);

let novasNotas = [...notas];
if (indexNotaAlta !== -1) novasNotas.splice(indexNotaAlta, 1);
if (indexNotaBaixa !== -1) novasNotas.splice(indexNotaBaixa, 1);

let media =
  novasNotas.reduce((accum, current) => accum + current, 0) /
  novasNotas.length;
console.log(media);
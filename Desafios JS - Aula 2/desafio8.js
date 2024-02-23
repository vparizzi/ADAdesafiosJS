// Dado um array idades, encontre o índice do último elemento que sejam maior ou igual a 18.
let idades = [13, 19, 26, 42, 55, 66];
let Index = idades.reduceRight((accum, current, index) => {
  return accum === -1 && current >= 18 ? index : accum;
}, -1);
console.log(Index);
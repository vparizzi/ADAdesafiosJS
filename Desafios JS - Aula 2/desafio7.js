// Dado um array idades, encontre o índice do primeiro elemento que seja maior ou igual a 18.
const idade = [8, 13, 27, 31, 44, 90];
let resultado = idade.findIndex((idade) => idade >= 18);
console.log(resultado);
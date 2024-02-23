// Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a soma, subtração, multiplicação e divisão desses números. Armazene os resultados em um array, sendo o
// Index: 0 = Soma
//        1 = subtração
//        2 = multiplicação
//        3 = divisão

let numero1 = 5;
let numero2 = 10;

let resultado = [];

resultado.push(numero1 + numero2);
resultado.push(numero1 - numero2);
resultado.push(numero1 * numero2);
resultado.push(numero1 / numero2);

console.log(resultado);
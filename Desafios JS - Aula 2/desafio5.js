// Dado um array numeros, crie um novo array que contenha apenas os números pares do array original.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];

for (let numeros of numeros) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
}

// Exibindo o novo array com os números pares
console.log("Números pares:", numerosPares);


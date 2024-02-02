



let idade = prompt("Digite sua idade:");
let compraMinima = prompt("Digite o valor da compra:");
let isNewClient = prompt("Você é um novo cliente? Digite true ou false");


let desconto = idade >= 60 && compraMinima >= 100 && !isNewClient == false;
console.log(desconto);

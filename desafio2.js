/*Receba através do prompt:
● salario
● scoreDeCredito
● idade
Então deve retornar true se a pessoa for aprovada para um empréstimo nas 
seguintes condições:
● O salário for maior ou igual a 5000. 
● O score de crédito for maior ou igual a 700. 
● A idade for maior ou igual a 18.*/

let salario = parseFloat(prompt("Informe seu salário:"));
let scoreDeCredito = parseInt(prompt("Informe seu score de crédito:"));
let idade = parseInt(prompt("Informe sua idade:"));

// Verificando as condições para aprovação do empréstimo
let emprestimoAprovado = salario >= 5000 && scoreDeCredito >= 700 && idade >= 18;

// Exibindo o resultado
console.log("Empréstimo aprovado!", emprestimoAprovado)
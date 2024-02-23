/*Verificar compatibilidade de plataformas
Receba através do prompt dois argumentos: 
● navegador
● sistemaOperacional
Deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema 
operacional for "Windows" ou "Mac".
*/


let navegador = prompt("Qual o seu navegador?");
let sistemaOperacional = prompt("Qual o seu sistema operacional?");


let verificarCompatibilidade = ((navegador == "Chrome" || navegador == "Firefox") && (sistemaOperacional == "Windows" || sistemaOperacional == "Mac"))
    
console.log(verificarCompatibilidade)


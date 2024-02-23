// Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto interno) desses dois vetores usando a fórmula matemática do produto escalar.

let vetor1 = [1, 2, 3]; // Vetor de coordenadas x
let vetor2 = [4, 5, 6]; // Vetor de coordenadas y

let produtoEscalar = 0;

for (let i = 0; i < vetor1.length; i++) {
    produtoEscalar += vetor1[i] * vetor2[i];
}

console.log("O produto escalar dos vetores é:", produtoEscalar);
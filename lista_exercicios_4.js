// 4 - Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.
var prompt = require('prompt-sync')();

let quantidadeNotas = 20;
let valorNotaAprovação = 7;

for (let i = 0; i < quantidadeNotas; i++) {
    nota = Number(prompt(`Digite a nota da prova ${i+1}: `))

    if (nota >= valorNotaAprovação) {
        
        console.log(`Aprovado!`);
    } else {
        console.log(`Reprovado.`);
    }
}


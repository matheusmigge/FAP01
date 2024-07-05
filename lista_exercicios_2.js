// 2 - Faça um programa em JS que leia um número inteiro informado pelo usuário e diga se esse número é par ou ímpar.
// Sugestão: Use o % (resto da divisão inteira).

var prompt = require('prompt-sync')();

let numero = Number(prompt(`Digite um número: `))

function verificaSeNumeroPar(numero) {

    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

if (verificaSeNumeroPar) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}
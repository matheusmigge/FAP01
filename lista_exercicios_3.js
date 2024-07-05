// 3 - Faça um programa que leia dois números e informe qual é o maior.
// Ex.: 
// numero1 = 20
// numero2 = 30
// resposta = ‘O número2 é o maior’ 

var prompt = require('prompt-sync')();

let num1 = Number(prompt(`Digite o primeiro número: `))
let num2 = Number(prompt(`Digite o segundo número: `))

if (num1 > num2) {
    console.log(`O número 1 é o maior`);
} else if (num2 > num1) {
    console.log(`O número 2 é o maior`);
} else {
    console.log(`Os dois números são iguais`);
}
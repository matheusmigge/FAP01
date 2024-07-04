// Exercício 1
var prompt = require('prompt-sync')();

let numeroMenor;
let numeroMeio;
let numeroMaior;
let media;

let num1 = Number(prompt(`Digite o primeiro número: `))
let num2 = Number(prompt(`Digite o segundo número: `))
let num3 = Number(prompt(`Digite o terceiro número: `))

media = (num1 + num2 + num3) / 3

if (num1 >= num2 & num1 >= num3) {

    numeroMaior = num1

    if (num3 >= num2){
        numeroMeio = num3
        numeroMenor = num2
    } else {
        numeroMeio = num2
        numeroMenor = num3
    }
} else if (num2 >= num1 & num2 >= num3) {

    numeroMaior = num2

    if (num3 >= num1){
        numeroMeio = num3
        numeroMenor = num1
    } else {
        numeroMeio = num1
        numeroMenor = num
    }
} else {

    numeroMaior = num3

    if (num2 >= num1){
        numeroMeio = num2
        numeroMenor = num1
    } else {
        numeroMeio = num1
        numeroMenor = num2
    }
} 
console.log('=============');
console.log(`O número menor é: ${numeroMenor}`);
console.log(`O número do meio é: ${numeroMeio}`);
console.log(`O número maior é: ${numeroMaior}`);
console.log(`A média é: ${media.toFixed(2)}`);
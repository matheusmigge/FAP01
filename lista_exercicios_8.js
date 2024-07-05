// 8 - Elabore uma calculadora simples, levando em consideração dois números de entrada pelo usuário e uma opção de operação (SOMA, SUBTRAÇÃO, DIVISÃO etc). 

var prompt = require('prompt-sync')();

let num1;
let operacao;
let num2;
let finalizar = false;

function somaNumero(numero1, numero2) {
    return numero1 + numero2;
}

function subtraiNumero(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicaNumero(numero1, numero2) {
    return numero1 * numero2;
}

function divideNumero(numero1, numero2) {
    return numero1 / numero2;
}

do {
    num1 = Number(prompt(`Digite o número 1: `))
    operacao = prompt(`Digite o sinal da operação desejada ( + , - , * ou / ): `)
    num2 = Number(prompt(`Digite o número 2: `))

    switch (operacao) {
        case '+':
            console.log(`O resultado de ${num1} ${operacao} ${num2} = ${somaNumero(num1, num2)}`);
        break;

        case '-':
            console.log(`O resultado de ${num1} ${operacao} ${num2} = ${subtraiNumero(num1, num2)}`);
        break;

        case '*':
            console.log(`O resultado de ${num1} ${operacao} ${num2} = ${multiplicaNumero(num1, num2)}`);
        break;

        case '/':
            console.log(`O resultado de ${num1} ${operacao} ${num2} = ${divideNumero(num1, num2)}`);
        break;

        default:
            console.log(`Operador inválido.`);
        break;
    }

    let continuar = Number(prompt("Deseja reiniciar? Digite 1- Sim ou 2- Não: "))

    if (continuar != 1) {
        console.log(`Fim.`);
        finalizar = true;
    } else {
        console.log(`Reiniciando calculadora...`);
    }
} while (finalizar == false);
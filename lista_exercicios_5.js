// 5 - Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP (com uma poltrona) e um ingresso standard (cadeira comum). É possível optar também por um combo promocional de pipoca e refrigerante ou não. Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não (opção 2). O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:
// Ingresso VIP sem pipoca: “Valor: 80 reais”;
// Ingresso VIP com pipoca: : “Valor: 110 reais”;
// Ingresso standard sem pipoca: “Valor: 40 reais”;
// Ingresso standard com pipoca: “Valor: 70 reais”;

var prompt = require('prompt-sync')();

let opcaoA = Number(prompt(`Digite a opção de ingresso que você deseja: 1- Ingresso VIP; 2- Ingresso Standard; `));
let opcaoB = Number(prompt(`Agora digite a opção de combo que você deseja: 1- Combo com pipoca e refrigerante; 2- Não desejo combo desta vez; `));

console.log(`=======================================`);
console.log(`O valor a pagar será impresso na tela: `);
console.log(`=======================================`);

if (opcaoA == 1 & opcaoB == 2) {
    console.log(`Valor: 80 reais`);
} else if (opcaoA == 1 & opcaoB == 1) {
    console.log(`Valor: 110 reais`);
} else if (opcaoA == 2 & opcaoB == 2) {
    console.log(`Valor: 40 reais`);
} else {
    console.log(`Valor: 70 reais`);
}
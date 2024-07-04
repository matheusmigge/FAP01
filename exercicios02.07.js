// Exercício 1
var prompt = require('prompt-sync')();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    
let nome;
let oQueQuer;

console.log('Bem vindo ao sistema super legal.')

nome = prompt('Pra começar, digite seu nome...')
nome = capitalizeFirstLetter(nome)

console.log(`Olá, ${nome}. Massa ter você aqui conosco!`)

oQueQuer = prompt('Digite o que você deseja de mim hoje...')

console.log(`Sinto muito, ${nome}. Não consigo ${oQueQuer}...`)
    
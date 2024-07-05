// FAP - TURMA 10 - LISTA DE EXERCÍCIOS EM JS

// 1 - Implementar em JavaScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.

// No console
// Como um alerta
// E no documento do HTML

let cotacaoDolar = 5.50;
let valorReais = Number(prompt(`Digite o valor em BRL: `));
let valorConvertido;

function converteBRLparaUSD(cambio, valorBRL) {
    return valorBRL / cambio
}

valorConvertido = converteBRLparaUSD(cotacaoDolar,valorReais).toFixed(2)

console.log(`O valor em dólares é de: ${valorConvertido}`);
alert(`O valor em dólares é de: ${valorConvertido}`);
document.write(`O valor em dólares é de: ${valorConvertido}`);
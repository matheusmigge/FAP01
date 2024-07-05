// 7 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um programa que leia o número de horas trabalhadas em um mês, salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas. (considere que o mês possua 4 semanas exatas). 

var prompt = require('prompt-sync')();

let qtdSemanasMes = 4;

let jornadaHorasSemanaisPadrao = 40;
let jornadaHorasSemanaisFuncionario = 44;

let salarioHoraFuncionario = 10;
let totalSalarioFuncionario;

let jornadaHorasExtras;
let percentualAcrescimoHoraExtra = 0.5;
let totalAcrescimoHoraExtra = 0;

if (jornadaHorasSemanaisFuncionario > jornadaHorasSemanaisPadrao) {
    jornadaHorasExtras = jornadaHorasSemanaisFuncionario - jornadaHorasSemanaisPadrao

    totalAcrescimoHoraExtra = salarioHoraFuncionario * (1+percentualAcrescimoHoraExtra) * jornadaHorasExtras * qtdSemanasMes

} 

totalSalarioFuncionario = salarioHoraFuncionario * jornadaHorasSemanaisPadrao * qtdSemanasMes

console.log(totalSalarioFuncionario + totalAcrescimoHoraExtra);
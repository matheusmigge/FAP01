// 6 - Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. Antes de terminar, o código deve informar que irá ser encerrado.

var prompt = require('prompt-sync')();

let opcao = Number(prompt('Digite sobre qual departamento você gostaria de atendimento: 1- Portaria; 2- Secretaria; 3- Tesouraria; '))

switch (opcao) {
    case 1:

        opcao = Number(prompt('Digite qual assunto deseja com a portaria: 1- Cadastro; 2- Contato; '))

        switch (opcao) {
            case 1:
                console.log('Seu cadastro pode ser feito através da área do aluno no site da instituição.');
            break;

            case 2:
                console.log('O número para contato da portaria é o (81) 3456-7899');
            break;
        
            default:
                console.log('Opção inválida.');
            break;
        }
    break;

    case 2:

        opcao = Number(prompt('Digite qual assunto deseja com a secretaria: 1- Matrícula; 2- Abono de faltas; 3- Revisão de notas; '))

        switch (opcao) {
            case 1:
                console.log('Sua matrícula pode ser feita através da área do aluno no site da instituição.');
            break;

            case 2:
                console.log('Para solicitar o abono de faltas, preencha o formulário dispoível no link >aqui<.');
            break;
        
            case 3:
                console.log('A solicitação de revisão de notas deve ser feita através da área do aluno no site da instituição.');
            break;

            default:
                console.log('Opção inválida.');
            break;
        }
    break;

    case 3:

        opcao = Number(prompt('Digite qual assunto deseja com a tesouraria: 1- Mensalidade; 2- FIES; 3- Outros assuntos; '))

        switch (opcao) {
            case 1:
                console.log('O atendimento relativo à mensalidade deve ser feito através da área do aluno no site da instituição.');
            break;

            case 2:
                console.log('Assuntos relativos ao FIES devem ser tratados através da área do aluno no site da instituição.');
            break;
        
            case 3:
                console.log('Para tratar de outros assuntos, por favor preencha o fomulário disponível no link >aqui<.');
            break;

            default:
                console.log('Opção inválida.');
            break;
        }
    break;

    default:
        console.log('Opção inválida.');
    break;
}

console.log('Seu atendimento está sendo encerrado...');
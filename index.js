function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

alert('Bem vindo ao sistema super legal.')
let nome = prompt('Pra começar, digite seu nome...')
nome = capitalizeFirstLetter(nome)
alert(`Olá, ${nome}. Massa ter você aqui conosco!`)
let oQueQuer = prompt('Digite o que você deseja de mim hoje...')
alert(`Sinto muito, ${nome}. Não consigo ${oQueQuer}...`)
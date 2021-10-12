// pegar um input do usuário
//se a resposta do usuário for YES, retorna os gêneros para escolher
//se NO, retorna todos os filmes em ordem cronológica

const films = require('./database')
const readline = require('readline-sync')
const firstInput = readline.question("Do you feel like watching an old movie? (Y/N) ")

if (firstInput.toLocaleUpperCase() === "Y") {
    console.log("Alrighty!! These are the available genres: ")
    console.table(['adventure','comedy','crime','drama','horror','thriller'])

    const inputCategory = readline.question("Now, answer me: what film genre do you wanna watch? (enter ONLY the genre) ")

    const respond = films.filter(f => f.genre === inputCategory)

    console.log("Geez, ok!! Lemme handle it!!")
    console.table(respond)
} else {
    console.log("Oh, a wise guy, huh? Ok, hotshot, here's the entire list. They're old, you know?")

    const orderRuntime = films.sort((a, b) => a.year - b.year)

    console.table(orderRuntime)
}

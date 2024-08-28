/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const input = require("prompt-sync")()

let menu = function () {
    console.log("========================")
    console.log("|   Escolha um Curso:  |")
    console.log("|                      |")
    console.log("|     1 - Front-end    |")
    console.log("|     2 - Back-end     |")
    console.log("|     3 - Full Stack   |")
    console.log("|     0 - Sair         |")
    console.log("========================")
}

menu()

let option = null

while (option !== 0) {
    option = Number(input("Escolha uma das opções acima: "))
    switch (option) {
        case 1:
            console.clear()
            menu()
            console.log(">>> Front-end <<<")
            break;
        case 2:
            console.clear()
            menu()
            console.log(">>> Back-end <<<")
            break;
        case 3:
            console.clear()
            menu()
            console.log(">>> Full Stack <<<")
            break;
        case 0:
            console.clear()
            menu()
            console.log("Você saiu do menu!")
            break;
        default:
            console.clear()
            menu()
            console.log("Opção invalida! <<<")
            break;
    }
}



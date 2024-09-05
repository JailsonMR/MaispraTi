/*
Verificando Propriedades
Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

const livro = {
    titulo: "Apocalipse",
    autor: "João",
    anoPublicacao: 80,
    genero: "Religioso",
}

let propriedadeProcurada = "editora"
let existeProp = false

for(let i in livro){
    if(livro.hasOwnProperty(propriedadeProcurada)){  // hasOwnProperty verifica se propriedadeProcurada existe
        existeProp = true
    } else {
        livro.editora = 'CPAD' // cria a propriedade editora caso ela não exista
    }
}

console.log(livro)
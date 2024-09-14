/*
Criando Novos Arrays a Partir de Objetos
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

let filmes = [
    { titulo: "À prova de fogo", diretor: "Alex Kendrick", anoLancamento: 2008 },
    { titulo: "Corajosos", diretor: "Alex Kendrick", anoLancamento: 2011 },
    { titulo: "À Procura da Felicidade", diretor: "Gabriele Muccino", anoLancamento: 2007 },
    { titulo: "Alex Kendrick", diretor: "Alex Kendrick", anoLancamento: 2006 },
    { titulo: "O Caminho Para a Eternidade", diretor: "David A. R. White", anoLancamento: 2008 },
]

let titulosFilmes = []

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo)
})

console.log(titulosFilmes)

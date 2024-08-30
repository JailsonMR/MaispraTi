
// EXERCICIO 01 - conscluir e modificar
/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 6.0 como média).
*/

// const professor = {
//     nome: "Tony Stark",
//     subject: "Physics",
//     grades: {
//         student1: 10,
//         student2: 6,
//         student3: 7,
//         student4: 8,
//     }
// }
// let sumGrades = 0
// let numberOfStudents = 0

// for(let student in professor.grades){
//     sumGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

// console.log(`A nota media da turma é: ${average.toFixed(2)}`)
// console.log(average >=6
//     ? `${professor.nome} está acima da média.`
//     : `${professor.nome} está abaixo da média.`
// )

///////// ABAIXO CÓDIGO DE ALUNO - tentar adequar

// let professor = {
//     nome: "Jaques",
//     disciplina: "Java Script",
//     notas: [10, 5, 8],
//     mediaNotas: function(){ 
//         let soma = 0
//         let media = 0
//         for(let i = 0; i < this.notas.length; i++){
//             soma += this.notas[i]
//         }
//         media = soma/this.notas.length
//         console.log(`A soma das notas é ${soma} e a média é ${media}`)
//         if(media >= 7){
//             return `O professor ${professor.nome} está acima da média.`
//         }else {
//             return `O professor ${professor.nome} está abaixo da média.`
//         }
//     }
// }

/////////////////////////////////////////////////////////////
// EXERCICIO 02
/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/







////////////////////////////////////////////////////////////////
// EXERCICIO 03
/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

// const movies = [
//     { title: "Tropa de Elite", genre: "Militar"},
//     { title: "Top Gun", genre: "Ação"},
//     { title: "Interestelar", genre: "Scii-Fi"},
//     { title: "Senhor dos Anéis", genre: "Aventura"},
//     { title: "Poderoso Chefão", genre: "Máfia"},
//     { title: "Vingadore: Ultimato", genre: "Heróis"},
//     { title: "Deadpol e Wol", genre: "Heróis"},
// ]

// movies.forEach(movie => {
//     if(genreCount[movie.genre]){
//         genreCount[movie.genre]++
//     } else {
//         genreCount[movie.genre] = 1
//     }
// })


// for(let genre in genreCount){
//     console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
// }

// ABAIXO O CÓDIGO DO JOELSON

// const filmes = [
//     { titulo: "Interestelar", genero: "Ficção Científica" },
//     { titulo: "Xuxa e os Doendes", genero: "Infantil" },
//     { titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação" },
//     { titulo: "Divertidamente", genero: "Infantil" },
//     { titulo: "Matrix", genero: "Ficção Científica" },
//     { titulo: "Senhor dos Anéis", genero: "Fantasia" },
//     { titulo: "O Senhor dos Anéis: As Duas Torres", genero: "Fantasia" },
//     { titulo: "O ultimo Homem", genero: "Ação" }
// ];
// const contagemPorGenero = {};

// filmes.forEach(filme => {
//     if (contagemPorGenero[filme.genero]) {
//         contagemPorGenero[filme.genero]++;
//     } else {
//         contagemPorGenero[filme.genero] = 1;
//     }
// });

// console.log(contagemPorGenero);

//////////////////////////////////////////////////////////
// ABAIXO O CÓDIGO DO PROFESSOR

const movies = [
    { title: "Tropa de Elite", genre: "Militar"},
    { title: "Top Gun", genre: "Ação"},
    { title: "Interestelar", genre: "Sci-Fi"},
    { title: "Senhor dos Anéis", genre: "Aventura"},
    { title: "Poderoso Chefão", genre: "Máfia"},
    { title: "Vingadores: Ultimato", genre: "Heróis"},
    { title: "Deadpool & Wolverine", genre: "Heróis"},
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
}













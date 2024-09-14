/*
Calculando Valores em Arrays de Objetos
Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
    { nome: "Barnabé", nota1: 9, nota2: 9.5 },
    { nome: "Paulo", nota1: 8.5, nota2: 9 },
    { nome: "Temóteo", nota1: 9, nota2: 8 },
    { nome: "Silas", nota1: 9, nota2: 9.5 },
    { nome: "Thiago", nota1: 10, nota2: 8.5 },
]

for(aluno of alunos) {                                     // chama cada objeto aluno dentro do array alunos até o final
    media = (aluno.nota1 + aluno.nota2) / 2                // calcula a média a cada ciclo "for of"
    console.log(`Nome: ${aluno.nome}\nMédia: ${media}\n`)  // imprime nome e média de forma organizada com "\n"
}
/*
Iterando Sobre Arrays de Objetos
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

let pessoas = [
    { nome: 'Mateus', idade: 29, cidade: 'Teresina' },
    { nome: 'Marcos', idade: 50, cidade: 'Fortaleza' },
    { nome: 'Lucas', idade: 22, cidade: 'Parnaíba' },
    { nome: 'João', idade: 40, cidade: 'Campo Maior' },
    { nome: 'Timóteo', idade: 32, cidade: 'Oeiras' },
]
for(let pessoa of pessoas){  // chama cada "pessoa" dentro do array pessoas até o final
    // imprime nome, idade e cidade de forma organizada com "\n"
    console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nCidade: ${pessoa.cidade}\n`)
}
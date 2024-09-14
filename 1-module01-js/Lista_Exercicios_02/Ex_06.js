/*
Filtrando Arrays de Objetos
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

let valorEspecifico = 5000    //  Especificar valor e executar o código para testar

let funcionarios = [
    { nome: "Charles", cargo: "Programador Front End", salario: 3900 },
    { nome: "Eduardo", cargo: "Programador Back End", salario: 4850 },
    { nome: "Guilherme", cargo: "Programador Full Stack", salario: 5200 },
    { nome: "Leonardo", cargo: "Developer Java Junior", salario: 5750 },
    { nome: "Benedito", cargo: "Developer Mobile", salario: 7000 },
    { nome: "Antônio", cargo: "Developer Senior Java", salario: 10000 },
]

for(let funcionario of funcionarios) {
    if(funcionario.salario > valorEspecifico) {
        console.log(`Nome: ${funcionario.nome} / Cargo: ${funcionario.cargo} / Salário: ${funcionario.salario}`)
    } 
}
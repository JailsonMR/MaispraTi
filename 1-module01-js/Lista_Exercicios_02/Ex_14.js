/*
Manipulando Objetos Complexos
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

const empresa = {
    departamentos: [
        {
            nome: "Operacional",
            funcionarios: ["Pedro", "Tiago", "João"]
        },
        {
            nome: "Tático",
            funcionarios: ["André", "Bartolomeu", "Matias"]
        },
        {
            nome: "Estratégico",
            funcionarios: ["Arão", "Barnabé", "Paulo"]
        }
    ]
}

for (let i in empresa.departamentos) { // percorre os índices do array de departamentos
    const departamento = empresa.departamentos[i];
    console.log(`Departamento: ${departamento.nome}`);
    
    for (let funcionario of departamento.funcionarios) { // percorre a lista de funcionários de cada departamento.
        console.log(` - Funcionário: ${funcionario}`);
    }
}
/*
Atualizando um Array de Objetos
Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let estoque = [
    { nome: 'gabinete', quantidade: 9, minimo: 10 }, // 'nome' para diferenciar do 'produto' dentro do forEach
    { nome: 'monitor', quantidade: 22, minimo: 8 },
    { nome: 'teclado', quantidade: 10, minimo: 15 },
    { nome: 'mouse', quantidade: 15, minimo: 10 },
    { nome: 'webcan', quantidade: 4, minimo: 5 },
]

estoque.forEach(produto => {
    if(produto.quantidade < produto.minimo){
        produto.quantidade *= 2
    }
})

console.log(estoque)
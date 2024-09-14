/*
Filtrando e Somando Valores
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

let transacoes = [
    { tipo: 'entrada', valor: 150 },
    { tipo: 'saida', valor: 120 },
    { tipo: 'entrada', valor: 160 },
    { tipo: 'saida', valor: 45 },
    { tipo: 'entrada', valor: 80 },
]

let saldo = 0

transacoes.forEach(operacao => {
    if(operacao.tipo == 'entrada'){
        saldo += operacao.valor
    } else {
        saldo -= operacao.valor
    }
});

console.log(`Saldo: ${saldo.toFixed(2)}`)
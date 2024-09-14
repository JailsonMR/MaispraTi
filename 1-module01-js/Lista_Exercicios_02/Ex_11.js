/*
Agrupando Elementos com forEach
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    { cliente: 'Jailson', produto: 'Bolo', quantidade: 5 },
    { cliente: 'Taiane', produto: 'Pão', quantidade: 25 },
    { cliente: 'Anderson', produto: 'Pizza', quantidade: 4 },
    { cliente: 'Italo', produto: 'Brigadeiro', quantidade: 80 },
    { cliente: 'Taiane', produto: 'Salgado', quantidade: 60 },
    { cliente: 'Italo', produto: 'Bomba', quantidade: 60 },
    { cliente: 'Jailson', produto: 'Bolo de Chocolate', quantidade: 60 },
    { cliente: 'Jailson', produto: 'Bolo Vucão', quantidade: 60 },
    { cliente: 'Anderson', produto: 'Arrumadinho', quantidade: 60 },
]

let qtdProdutosPorCliente = {};

pedidos.forEach(pedido => {
  if (qtdProdutosPorCliente[pedido.cliente]) {
    qtdProdutosPorCliente[pedido.cliente] += pedido.quantidade;
  } else {
    qtdProdutosPorCliente[pedido.cliente] = pedido.quantidade;
  }
});

console.log(qtdProdutosPorCliente);
  
  

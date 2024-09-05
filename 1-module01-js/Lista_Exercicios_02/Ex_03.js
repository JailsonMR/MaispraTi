/*
Filtrando Propriedades de Objetos
Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

let valorEspecifico = 18 // Especificar valor a ser filtrado nas propriedades

function filtrarPropriedades(objeto, valorEspecifico) {
    const novoObjeto = {};
    
    for (let propriedade in objeto) {
      if (objeto[propriedade] > valorEspecifico) { // Verifica se o valor na propriedade é maior que o valor especificado
        novoObjeto[propriedade] = objeto[propriedade]; // Caso seja maior adiciona ao novo objeto
      }
    }
  
    return novoObjeto; 
  }

const produto = {
    preco: 25,
    quantidade: 12,
    peso: 5,
    altura: 17,
    comprimento: 22,
    outro: 35,
    teste: 46
  };

resultado = filtrarPropriedades(produto, valorEspecifico) //chamada da função.
console.log(resultado)
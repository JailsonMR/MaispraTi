
let campoTarefa = document.getElementById('nomeTarefa')


let btnAddTarefa = document.getElementById('addTarefa')

let tarefas = document.getElementById('listaTarefas')

function adicionaTarefa() {
    
    let novaTarefa = document.createElement('li')

    novaTarefa.innerHTML = novaTarefa

    tarefas.appendChild(novaTarefa)

}

btnAddTarefa.addEventListener('click', adicionaTarefa)



/*
pesquisado

let meuCampo = document.getElementById('campo');

meuCampo.addEventListener('keyup', function() {
  let valor = meuCampo.value;
  console.log(valor);
});

ou

let meuCampo = document.getElementById('campo');
meuCampo.value = "Novo valor";

*/
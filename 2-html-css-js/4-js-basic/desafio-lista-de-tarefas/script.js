function deletarLinha(botao) {
    // Pega a linha do botão clicado e remove
    var linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}

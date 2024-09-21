let qtdItens = 0;

function verificarPedido() {
  const botaoPedido = document.querySelector(".textoPedido");
  if (qtdItens === 3) {
    botaoPedido.innerHTML = `Fechar Pedido`;
    botaoPedido.classList.add("ativado");
  }
}

function selecionarItens(elemento, categoria) {
  const itemAnterior = document.querySelector(`.${categoria}.selecionado`);

  if (itemAnterior !== null) {
    itemAnterior.classList.remove("selecionado");
    qtdItens--;
  }
  elemento.classList.add("selecionado");
  qtdItens++;
  verificarPedido();
}
function selecionarItemPf(elemento) {
  selecionarItens(elemento, "pf");
}
function selecionarItemBebida(elemento) {
  selecionarItens(elemento, "bebida");
}

function selecionarItemSobremesa(elemento) {
  selecionarItens(elemento, "sobremesa");
}
function finlizarPedido(elemento){
  elemento.classList.remove("escondido")
}

// verificar como posso está removendo a classe do modal. 
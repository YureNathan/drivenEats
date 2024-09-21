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
  // const acessando a classe do elemento e removendo ela ao clicar no botão
  elemento.classList.remove("escondido")


}

// verificar como posso está removendo a classe do modal. 

// fazer a função para pegar os valores e calcular 
// e fazer exibir nome do prato e valor ao lado 
// valor total 
// depois fazer a formatação da mensagem para o whatsApp

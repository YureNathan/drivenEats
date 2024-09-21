let qtdItens = 0;
let nome = " ";
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
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
  let precoElement = elemento.querySelector(".preco");
  let nameElement = elemento.querySelector(".titulo");
  //   nome = nameElement.textContent;
  precoPrato = precoElement.textContent;
}
function selecionarItemBebida(elemento) {
  selecionarItens(elemento, "bebida");
  let precoElement = elemento.querySelector(".preco");
  let nameElement = elemento.querySelector(".titulo");
  //   nome = nameElement.textContent;
  precoBebida = precoElement.textContent;
}

function selecionarItemSobremesa(elemento) {
  selecionarItens(elemento, "sobremesa");
  let precoElement = elemento.querySelector(".preco");
  let nameElement = elemento.querySelector(".titulo");
  //   nome = nameElement.textContent;
  precoSobremesa = precoElement.textContent;
}
function finlizarPedido() {
  const modal = document.querySelector(".telaConfirmacao");
  // const acessando a classe do elemento e removendo ela ao clicar no botão
  modal.classList.remove("escondido");
}

function voltarTela() {
  const retornar = document.querySelector(".telaConfirmacao");
  retornar.classList.add("escondido");
}
// verificar como posso está removendo a classe do modal.

function valorTotal() {
  const valor =
    parseFloat(precoPrato) +
    parseFloat(precoBebida) +
    parseFloat(precoSobremesa);
  return valor.toFixed(2);
}
// fazer a função para pegar os valores e calcular
// e fazer exibir nome do prato e valor ao lado
// valor total
// depois fazer a formatação da mensagem para o whatsApp

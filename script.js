let qtdItens = 0;
let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

// função para alterar o botão para cada item
function verificarPedido() {
  const botaoPedido = document.querySelector(".textoPedido");
  if (qtdItens === 3) {
    botaoPedido.innerHTML = `Fechar Pedido`;
    botaoPedido.classList.add("ativado");
    botaoPedido.removeAttribute("disabled");
  }
}
// função para selecionar um item de cada vez
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
// funções para pegar o nome e valor de cada item ao selecionar
function selecionarItemPf(elemento) {
  selecionarItens(elemento, "pf");
  const nomeElemento = elemento.querySelector(".titulo");
  const precoElemento = elemento.querySelector(".preco");
  nomePrato = nomeElemento.textContent;
  precoPrato = parseFloat(precoElemento.textContent);
}

function selecionarItemBebida(elemento) {
  selecionarItens(elemento, "bebida");
  const nomeElemento = elemento.querySelector(".titulo");
  const precoElemento = elemento.querySelector(".preco");
  nomeBebida = nomeElemento.textContent;
  precoBebida = parseFloat(precoElemento.textContent);
}

function selecionarItemSobremesa(elemento) {
  selecionarItens(elemento, "sobremesa");
  const nomeElemento = elemento.querySelector(".titulo");
  const precoElemento = elemento.querySelector(".preco");
  nomeSobremesa = nomeElemento.textContent;
  precoSobremesa = parseFloat(precoElemento.textContent);
}
// função para mostrar o modal para confirmação do pedido
function finalizarPedido() {
  const modal = document.querySelector(".telaConfirmacao");
  pedido();
  modal.classList.remove("escondido");
}
// função para retornar a tela de itens
function voltarTela() {
  const retornar = document.querySelector(".telaConfirmacao");
  retornar.classList.add("escondido");
}
// função para tratar o valor final do pedido
function valorTotal() {
  const valor =
    parseFloat(precoPrato) +
    parseFloat(precoBebida) +
    parseFloat(precoSobremesa);
  return valor.toFixed(2);
}
 // função para mostrar as informações do pedido no modal
function pedido() {
  const elementoPrato = document.querySelector(".nomePrato");
  elementoPrato.textContent = `${nomePrato}: ${precoPrato.toFixed(2)}`;

  const elementoBebida = document.querySelector(".nomeBebida");
  elementoBebida.textContent = `${nomeBebida}: ${precoBebida.toFixed(2)}`;

  const elementoSobremesa = document.querySelector(".nomeSobremesa");
  elementoSobremesa.textContent = `${nomeSobremesa}: ${precoSobremesa.toFixed(
    2
  )}`;
  const valorTotal = document.querySelector(".totalPedido");
  valorTotal.textContent = `TOTAL: ${valorTotal()}`;
}
// função que formata a mensagem para ser enviada para o WhatsApp
function mensagemWpp() {
  const texto = (document.textContent = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato} 
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    - Total: ${valorTotal()}`);
  const string = encodeURIComponent(texto);

  const link = document.querySelector(".link");
  link.href = `https://wa.me/?text=${string}`;
  }
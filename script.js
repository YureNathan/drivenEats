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
  const precoElement = elemento.querySelector(".preco");
  const nameElement = elemento.querySelector(".titulo");
  nomePrato = nameElement.textContent;
  precoPrato = parseFloat(precoElement.textContent);
}

function selecionarItemBebida(elemento) {
  selecionarItens(elemento, "bebida");
  const precoElement = elemento.querySelector(".preco");
  const nameElement = elemento.querySelector(".titulo");
  nomeBebida = nameElement.textContent;
  precoBebida = parseFloat(precoElement.textContent);
}

function selecionarItemSobremesa(elemento) {
  selecionarItens(elemento, "sobremesa");
  const precoElement = elemento.querySelector(".preco");
  const nameElement = elemento.querySelector(".titulo");
  nomeSobremesa = nameElement.textContent;
  precoSobremesa = parseFloat(precoElement.textContent);
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
  const nomePratoElement = document.querySelector(".nomePrato");
  nomePratoElement.textContent = `${nomePrato}: ${precoPrato.toFixed(2)}`;

  const nomeBebidaElement = document.querySelector(".nomeBebida");
  nomeBebidaElement.textContent = `${nomeBebida}: ${precoBebida.toFixed(2)}`;

  const nomeSobremesaElement = document.querySelector(".nomeSobremesa");
  nomeSobremesaElement.textContent = `${nomeSobremesa}: ${precoSobremesa.toFixed(
    2
  )}`;
  const totalElement = document.querySelector(".totalPedido");
  totalElement.textContent = `TOTAL: ${valorTotal()}`;
}
// função que formata a mensagem para ser enviada para o WhatsApp
function mensagemWpp() {
  const texto = (document.textContent = `Olá, gostaria de fazer o pedido:
    - ${nomePrato}: ${precoPrato.toFixed(2)}
    - ${nomeBebida}: ${precoBebida.toFixed(2)}
    - ${nomeSobremesa}: ${precoSobremesa.toFixed(2)}
    - Total: ${valorTotal()}`);
  const string = encodeURIComponent(texto);

  const link = document.querySelector(".link");
  link.href = `https://wa.me/?text=${string}`;
  }
function selecionarItem(elemento) {
  const elementoAntes = document.querySelector(".selecionado");
  if (elementoAntes !== null) {
    elementoAntes.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");
}

// especificar os itens e criar 3 funcoes ou até pensar numa forma melhor. 

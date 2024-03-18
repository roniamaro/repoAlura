function sortear() {
  //pega do index.html os valores digitados em cada campo
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  console.log(`quantidade: ${quantidade}`);
  console.log(`de: ${de}`);
  console.log(`ate: ${ate}`);
  
  let listaDeNumSorteado = [];
  let numeroGerado;

  for (let index = 0; index < quantidade; index++) {
    numeroGerado = gerarNumAleatorio(de, ate);

    while (listaDeNumSorteado.includes(numeroGerado)) {
    //includes é uma função do array que devolve um boolean, nesse exeplo irá funcionar como: se dentro da listaDeNumSorteado já tiver o numeroGerado = TRUE
      numeroGerado = gerarNumAleatorio(de, ate);
    }
    listaDeNumSorteado.push(numeroGerado);
    //push insere no final da lista
  }
  
  let resultado = document.getElementById('resultado');
  console.log(`lista de número sorteado: ${listaDeNumSorteado}`);
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumSorteado}</label>`

  //após rodar a primeira vez deverá habilitar o botão REINICIAR, trocando a class dele para 'container__botao'
  alterarClassButton();
}

function gerarNumAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
  limparCampos();
}

function alterarClassButton() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  } 
}

function limparCampos() {
  document.getElementById('quantidade').value = "";
  document.getElementById('de').value = "";
  document.getElementById('ate').value = "";
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

  alterarClassButton();
};
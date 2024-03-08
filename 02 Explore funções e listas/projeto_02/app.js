let listaDeNumSorteado[];
let numMax = 10;
let numSecreto = gerarNumSecreto();
let count = 1;

function gerarNumAleatorio() {
  let numeroGerado = parseInt(Math.random() * numMax + 1);
  let quantidadeDeElementosNaLista = listaDeNumSorteado.length;

  if (quantidadeDeElementosNaLista == numMax ) {
    listaDeNumSorteado = [];    
  }

  if (listaDeNumSorteado.includes(numeroGerado)) {
    return gerarNumAleatorio();
  } else {
    listaDeNumSorteado.push(numeroGerado); //push insere no final da lista
    return numeroGerado;
  }
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto!');
  exibirTextoNaTela('p', 'Escolha um número entre 0 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numSecreto) {
    let palavraTentativa = count > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Parabéns você descobriu o número secreto com ${count} ${palavraTentativa}.`;
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disable');
  } else {
    if (chute > numSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');      
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    count++;
  }
};

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
};

function reiniciarJogo() {
  numSecreto = gerarNumAleatorio();
  limparCampo();
  count = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disable', true);
};
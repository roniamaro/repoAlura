function comprar() {
let tipoIngresso = document.getElementById('tipo-ingresso');
  console.log(`tipo-ingresso: ${tipoIngresso.value}`);

let quantidade = parseInt(document.getElementById('qtd').value);
  console.log(`qtd: ${quantidade}`);

let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
  console.log(`qtd-pista: ${qtdPista}`);
  console.log(`qtd-superior: ${qtdSuperior}`);
  console.log(`qtd-inferior: ${qtdInferior}`);
  console.log(`####`);

  switch (tipoIngresso.value) {
    case "pista":
      console.log(`tipo-ingresso comprado: ${tipoIngresso.value}`);
      comprarPista(quantidade);
    break;

    case "superior":
      console.log(`tipo-ingresso comprado: ${tipoIngresso.value}`);
      comprarSuperior(quantidade);
    break;

    case "inferior":
      console.log(`tipo-ingresso comprado: ${tipoIngresso.value}`);
      comprarInferior(quantidade);
    break;

    default:
      console.log(`tipo-ingresso: ${tipoIngresso} inválido!`);
    break;
  }
}

function comprarPista(quantidade) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

  if (quantidade > qtdPista) {
    alert(`Quantidade: ${quantidade} indisponível para Ingresso: Pista`);
  } else {
    qtdPista = qtdPista - quantidade;
    document.getElementById('qtd-pista').textContent = qtdPista;
    console.log(`Reserva realizada!`);
    console.log(`Restou: ${qtdPista} ingressos do tipo: Pista`);
  }
}

function comprarSuperior(quantidade) {
  let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

  if (quantidade > qtdSuperior) {
    alert(`Quantidade: ${quantidade} indisponível para Ingresso: Superior`);
  } else {
    qtdSuperior = qtdSuperior - quantidade;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    console.log(`Reserva realizada!`);
    console.log(`Restou: ${qtdSuperior} ingressos do tipo: Superior`);
  }
}

function comprarInferior(quantidade) {
  let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

  if (quantidade > qtdInferior) {
    alert(`Quantidade: ${quantidade} indisponível para Ingresso: Inferior`);
  } else {
    qtdInferior = qtdInferior - quantidade;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    console.log(`Reserva realizada!`);
    console.log(`Restou: ${qtdInferior} ingressos do tipo: Inferior`);
  }  
}
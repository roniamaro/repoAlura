alert("Hello world!");
let numeroMaximo = 500;
let numeroMinimo = 0;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let count = 1;

console.log(numeroSecreto);

while (chute != numeroSecreto) {
  chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`Errou! ${chute}, é menor que o número secreto!`);
    } else {
      alert(`Errou! ${chute}, é maior que o número secreto!`);
    }
    count++;
  }
};

let palavraTentativa = count > 1 ? "tentativas" : "tentativa";
alert(`Acertou ${chute}, é o número secreto! Com ${count} ${palavraTentativa}.`);

// if (count > 1) {
//   alert(`Acertou ${chute}, é o número secreto! Com ${count} tentativas.`);
// } else {
//   alert(`Acertou ${chute}, é o número secreto! Com ${count} tentativa`);
// }
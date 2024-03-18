
  // dashboard__item__img--rented
  // dashboard__item__button--return


function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector('.dashboard__item__img');
  let botao = gameClicado.querySelector('.dashboard__item__button');
  let nomeGame = gameClicado.querySelector('.dashboard__item__name');
  
  console.log(`game: ${nomeGame.textContent}`);
  
  if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = "Alugar";
    console.log('dentro do IF');
  } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = "Devolver";
    console.log('dentro do ELSE');
  }
}
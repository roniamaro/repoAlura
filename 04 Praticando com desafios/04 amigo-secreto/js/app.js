let listaAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo');
  let lista = document.getElementById('lista-amigos');

  if (nomeAmigo == '') {
    alert(`Nome inválido!`);
    return;
  }

  if (listaAmigos.includes(nomeAmigo.value)) {
    alert(`Nome duplicado!`);
    return;
  }

  if (lista.textContent == '') {
    lista.textContent = nomeAmigo.value;
  } else {
    lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    listaAmigos.push(nomeAmigo.value);
  }

  nomeAmigo.value = '';
}

function sortear() {
  if (listaAmigos.length <= 4) {
    alert(`Adicione pelo menos 4 amigos!`);
    return;
  }

  embaralha(listaAmigos);
  let sorteio = document.getElementById('lista-sorteio');

  for (let index = 0; index < listaAmigos.length; index++) {
    if (index == listaAmigos.length - 1) {
      sorteio.innerHTML = sorteio.innerHTML + listaAmigos[0] + ' --> ' + listaAmigos[i +1] + '<br>';
    } else {
      sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i +1] + '<br>';
    }
  }
}

function embaralha(lista) {
//função que embaralha um array
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = 
    [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  listaAmigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}
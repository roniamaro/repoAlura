let totalGeral;
limpar();

function adicionar() {
  //recuperar valores do produto selecionado: nome, quantidade, valor;
  let produtoSelec = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;
  console.log(`prodSelec: ${produtoSelec}`);
  console.log(`quantidade:  ${quantidade}`);
  
  //calcular o subtotal: qtd * valor;
  let nomeProduto = produtoSelec.split('-')[0];
  let valorProduto = produtoSelec.split('R$')[1];
  /**split separa uma string com base em um limitador e retorna em formato de array.
   * utilizamos no primeiro exemplo o (-), é retornado um array de 2 posições sendo a possição 0
   * o que está antes do (-) e aposição 1 o que está depois dele.
   * 
   * e no segundo exemplo, o valor, usamos o R$ como limitador.
  */
  console.log(`nomeProduto:  ${nomeProduto}`);
  console.log(`valorProduto:  ${valorProduto}`);

  let subTotal = quantidade * valorProduto;
  console.log(`subTotal:  ${subTotal}`);

  //adicionar no carrinho;
  let listaProdutos = document.getElementById('lista-produtos');

  listaProdutos.innerHTML = listaProdutos.innerHTML + 
  `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto}
    <span class="texto-azul">R$${subTotal}</span>
  </section>`;

  //atualizar o valor total;
  let valorTotal = document.getElementById('valor-total');
  totalGeral = totalGeral + subTotal;

  valorTotal.textContent = `R$ ${totalGeral}`;
  console.log(`valorTotal = ${totalGeral}`);

  document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}
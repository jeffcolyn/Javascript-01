const carrinho = [10, 244, 99, 2, 20, 33, 250];
let valorComDesconto = 0;
let valorSemDesconto = 0;

function calcularDesconto(preco, desconto) {
  const resultado = (preco * desconto) / 100;
  return resultado;
}

carrinho.forEach(valor => {
  valorSemDesconto += valor; 

  if (valor > 30) {
    const desconto = calcularDesconto(valor, 10);
    valorComDesconto += valor - desconto;
  } else {
    valorComDesconto += valor;
  }
});

const amountSaved = valorSemDesconto - valorComDesconto;

console.log(
  `O valor final da compra foi de R$ ${valorSemDesconto.toFixed(2)},
  porém você teve desconto, irá pagar apenas R$ ${valorComDesconto.toFixed(2)},
  você economizou R$ ${amountSaved.toFixed(2)}`
);

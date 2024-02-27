// 11.	[ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

const NumeroAleatorio = Math.floor(Math.random() * 101);
console.log(NumeroAleatorio);

// A primeira linha usa o método Math.random() para gerar um número aleatório entre 0 e 1 (não incluindo 1).
// Em seguida, esse número é multiplicado por 101 para gerar um número entre 0 e 100 (não incluindo 101).
// A função Math.floor() arredonda o número para baixo para um número inteiro.
// O número aleatório gerado é armazenado na variável numeroAleatorio.
// A última linha usa o método console.log() para imprimir o número na tela.

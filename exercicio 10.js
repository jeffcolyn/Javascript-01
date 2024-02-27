// 10.	[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//  Porém, os dois nomes devem estar em dois objetos separados.
//   Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. 
//   João e Maria, imprime false.
  

const pessoa1 = {
    nome: "joão"
};

const pessoa2 = {
    nome: "Maria"
};
if (pessoa1===pessoa2){
    console.log(true);
} else {
    console.log(false);
}


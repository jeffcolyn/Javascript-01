// 10.2. [] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//    Porém, os dois nomes devem estar em um objeto.
//     Ex: const object1 = {firstName:"João", seccondName:"Maria"}. 
//     João e João, imprime false. João e Maria, imprime true.

const pessoa1 = {
    nome: "joão"
};

const pessoa2 = {
    nome: "Maria"
};
if (pessoa1!==pessoa2){
    console.log(true);
} else {
    console.log(false);
}


const butoon = document.querySelector("button");
let p = document.querySelector(".Resultado");
let input = document.querySelector("input");
let contato = [
{ name: "Eder", number: "(55) 71982035104" },
{ name: "Jeise", number: "(55) 71982035104" },
{ name: "Djair", number: "(55) 71982035104" },
{ name: "Josilene", number: "(55) 71982035104" },
{ name: "Patricia", number: "(55) 71982035104" },
{ name: "Lua", number: "(18) 71982035104" },
{ name: "Junio", number: "(18) 71982035104" },
{ name: "Rodofo", number: "(18) 71982035104" },
{ name: "Html5", number: "(18) 71982035104" },
{ name: "Css3", number: "(18) 71982035104" },
{ name: "Java", number: "(18) 71982035104" },
];

function resgatandoN() {

for (const contatos of contato) {
if (input.value.toLowerCase() === contatos.name.toLowerCase()) {
p.innerHTML =
"Nome :" + contatos.name + `<br>` + "Tel :" + contatos.number;
break;
} else {
p.innerHTML = "Valeu TENTE NOVAMENTE";
}
}
}
while ((input = p)) {
input++;
if ((input = contato)) {
p.innerHTML = input.contato();
} else {
console.log("Deixa!");
}
}


butoon.addEventListener("click", resgatandoN);
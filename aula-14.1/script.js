document.writeln("Ola, mundo!");
document.writeln("<h2>Bem Vindo ao Java script</h2>");
window.alert("Esta é uma mensagem de alerta!");
document.getElementById("title").innerHTML = "Aprendendo JS com o melhor professor da UVV!";

let nome = ""  //prompt ("digite seu nome");
const novafrase = document.getElementById("novafrase")

document.getElementById ("novafrase").innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JS!";
document.getElementById("novafrase").style.color="pink";
document.getElementById("novafrase").style.fontSize="50px";

function exibirMensagem () {
    let nome = document.getElementById("nome").value;
    novafrase.innerHTML="Olá," + nome + "! Seja bem vindo ao Java script!";
    novafrase.style.color="green";
    novafrase.style.fontsize="40px";
}

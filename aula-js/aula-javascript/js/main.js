function clicou(){
   // alert("Obrigado por clicar")
   document.getElementById("obg").innerHTML="Obrigado por clicar";
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/filipecela/")
   // window.location.href = "https://www.linkedin.com/in/filipecela/"
}

function trocar(elemento){
    //document.getElementById("mouse").innerHTML="Obrigado por passar o mouse"
    elemento.innerHTML="Obrigado por passar o mouse"
}

function sair(elemento){
    elemento.innerHTML="Passe o mouse aqui"
}

function carregada(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    var validar = true
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade")
console.log(validaIdade(idade))

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10))
alert(setReplace("Vai Japao", "Japao", "Brasil"))
 var nome = "Filipe Cela";
alert("Bem-vindo " + nome);
console.log(nome);

var lista = ["carro, aviao, moto"];
lista.push("helicoptero");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));


var count = 0;
while (count <= 5) {
    console.log(count)
    alert(count)
    count++
}

var count
for(count=0; count<=5; count++) {
    console.log(count)
}

var data = new Date()
alert(data.getMinutes())
*/


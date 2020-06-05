//var nome = "João Victor";
//var idade = 18
//var idade2 = 10
//var frase = " Brasil!!!"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Brasil", "..."));
//o replace é usado como comando de troca de string.


//var lista = ["uva","laranja","maçã","pera"];
//lista.push("manga");
//lista.pop();
//console.log(lista.toString())
//console.log(lista.toString()[0])
//console.log(lista.reverse())
//console.log(lista.join(" - "))
//var fruta = {nome:"uva", cor:"roxa"}
//console.log(fruta.nome)
//console.log(fruta.cor)

/*
var idade = prompt("qual a sua idade?");
//var idade = 18
if (idade >= 18){
    alert("maior de idade, já pode ser preso ein");
}else{
    alert("essa pagina não é para menores de idade rapazinho");
}
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var count;
for(count= 0; count <= 5; count++){
    alert(count)
}
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getUTCMonth());
alert(d.getMinutes());
*/
/*
function soma(n1, n2){
    return n1 + n2;
}

//function setReplace(frase, nome, sobrenome){
 //   return frase.replace(nome, sobrenome)
//}

 function validaIdade(idade){
     var validar;
     if (idade >= 18){
      validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual a sua idade?")
console.log(validaIdade(idade));
*/


//alert(soma(5, 10));
//alert(setReplace("obrigado a minha", "mãe", "e irmã"));

function botao(){
    document.getElementById("agradecido").innerHTML = "<b>Obrigado pelo acesso</b>";
    //alert("obrigado pelo acesso")
}

function redirecionar(){
    window.open("https://www.youtube.com/");
    //window.location.href = "https://www.youtube.com/";
}

function trocar(){
    document.getElementById("mousemouve").innerHTML = "obrigado por passar seu mouse.";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemouve").innerHTML = "passe o mouse aqui amigo.";
}

function load(){
    alert("página carregada");
}
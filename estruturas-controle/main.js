/* Decisão  simples ou composta.
if, if else, switch case.
Sobre ifs, existe o if encadeado e o cascateado
*/

/*
Elabore um programa que receba uma idade(ida)
e verifique se a pessoa é maior ou menor de idade(18 anos).
Caso seja maior, imprima uma mensagem "Maior",
do contrário, imprima "menor";

var idade = 18;

if(idade >= 18 ){
    console.log("Maior");
}

if(idade < 18 ){
    console.log("menor");
}

*/

/*
Elabore um algoritmo, que receba uma idade e verifique
se a pessoa é jovem(até 12 anos), adolescente, (até 17)
e adulto (maior que 18). Imprima uma mensagem
contendo a respectiva classificação etária.

*/
/* Encadeado
var idade = 8;

if(idade <= 12){
    console.log("Jovem");
}
if(idade > 12 && idade <= 17){
    console.log("Adolescente");
}
if(idade >= 18){
    console.log("Adulto");
}

*/
var idade = 10;
/* base
if(idade <= 12){
    console.log("Jovem");
}else if (idade > 12 && idade <= 17){
        console.log("Adolescente");
        } else if(idade >= 18){
            console.log("Adulto");
}

*/
// ideal
if(idade <= 12){
    console.log("Jovem");
}else if (idade <= 17){
        console.log("Adolescente");
        } else{
            console.log("Adulto");
}
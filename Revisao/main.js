// definição das estruturas

function somar(a,b){
    x = parseInt(a);
    y = parseInt(b);
    return x + y;
}
function efedex(x){
    return Math.pow(x,2);
}

function somar2(){
    var x = prompt();
    var y = prompt();
    console.log(x + y);
}
// execução.

/*
var x = 0;
var y = 0;
x =  prompt("Digite o primeiro valor");;
y =  prompt("Digite o segundo valor");
var r =  somar(x,y);
console.log(r);
*/


/*
//var y = efedex(4);
//console.log(x);
//console.log(y);
//var a = efedex(efedex(efedex(2)));
//console.log(a);

*/

// Reutilizando funcao em varios sistemas I/O; Inputs Outputs

// Programa alert

/*
var x = 0;
var y = 0;
var r = 0;
x =  prompt("Digite o primeiro valor");;
y =  prompt("Digite o segundo valor");
r =  somar(x,y);
alert(r);

// Programa Log
var x = 0;
var y = 0;
var r = 0;
x =  prompt("Digite o primeiro valor");;
y =  prompt("Digite o segundo valor");
r =  somar(x,y);
console.log(r);
*/

// Programa dom html
var x = 0;
var y = 0;
var r = 0;
x =  prompt("Digite o primeiro valor");;
y =  prompt("Digite o segundo valor");
r =  somar(x,y);
document.writeln(r);
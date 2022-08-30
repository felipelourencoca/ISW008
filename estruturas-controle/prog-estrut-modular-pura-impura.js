//Ruim Alto acoplamneto
// Jamais terá IO dentro de função.

/*
function diaSemana(dia){    
    switch(dia){
        case 1 : 
            console.log("Segunda-feira");
            break;
        case 2 :
            console.log("Terça");
            break;
        default :
            console.log("digite um número válido");
            break;
    }

*/


//Ruim
function diaSemana(dia){    
    switch(dia){
        case 1 : 
            return "Segunda-feira";
            break;
        case 2 :
            return "Terça";
            break;
        default :
            return "digite um número válido";
            break;
    }

}

var x = diaSemana(4);
console.log(x);
alert(x);
document.write(x);

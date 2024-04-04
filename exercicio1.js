var prompt = require('prompt-sync')();

var valor = prompt("difite seu valor")
    if( valor % 7 ==0 || valor % 23 == 0){
        console.log("valor verdade")
    }
    else{
        console.log("valor falso")
    }
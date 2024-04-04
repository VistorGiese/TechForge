var prompt = require('prompt-sync')();

var valor = prompt("digite o valor aqui");
    if( valor % 2 == 0 && valor % 10 ==0){
        console.log("o valor é par e divisivel por 10")
    }
    else{
        console.log("não correspode ")
    }

    
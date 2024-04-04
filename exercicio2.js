var prompt = require('prompt-sync')();

var x = prompt("digite um valor aqui:")
var y = prompt("digite um valor aqui:")
var w = prompt("digite um valor aqui:")
var v = prompt("digite um valor aqui:")
var q = prompt("digite um valor aqui:")

var posicao = 1


var maior = x 
    if(
        y > maior 
    ){
        maior = y 
        posicao = 2
    }
    if(
        w > maior
    ){
        maior = w
        posicao = 3
    }
     if(
        v > maior
    ){
        maior = v
        posivao = 4
    }
    if(
        q > maior
        
    ){
        maior = q
        posicao = 5
    }
    
        console.log("maior numero é: " + maior + "e a posicao é:" + posicao)
    
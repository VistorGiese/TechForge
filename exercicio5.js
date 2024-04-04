var prompt = require('prompt-sync')();


var lado1 = prompt("digite o primeiro lado")
var lado2 = prompt("digite o segundo lado")
var lado3 = prompt("digite o terceiro lado")

if(
    lado1 == lado2 && lado2 == lado3
){
    console.log("este é um trinagulo equilatero")
}

else if(
    lado1 == lado2 || lado2 == lado3 || lado3 == lado1
){
    console.log("este é um triangulo isoseles")
}
else
{
    console.log("este é um trinagulo escaleno")
}
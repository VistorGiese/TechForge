var prompt = require('prompt-sync')();

var nome = prompt("digite seu nome")
var alt = parseFloat(prompt("digite seu altura"))
var peso = parseFloat(prompt("digite seu peso:"))

var ideal = peso / (alt*alt)

if( ideal < 18.5){
    console.log("Abaixo do peso")
}
else if( ideal < 24.9){
    console.log("Peso normal")
}
else if( ideal < 29.9){
    console.log("sobrepeso")
}
else if( ideal < 34.9){
    console.log("obessidade 1")
}
else if( ideal < 39.9){
    console.log("obssidade 2")
}

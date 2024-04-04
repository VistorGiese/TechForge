var prompt = require('prompt-sync')();

var salario = Number(prompt("digite seu salario"))

if(
    salario < 1320 
){
    salario = salario + ((11 / 100) * salario)
    console.log("novo salario" + salario )
}

else if(
    salario < 3000
){
    salario = salario + ((9 / 100) * salario)
    console.log("novo salario" + salario )
}

else if(
    salario < 7000 
){
    salario = salario + ((6 / 100) * salario)
    console.log("novo salario" + salario )
}
else {
    salario = salario + ((1 / 100) * salario)
    console.log("novo salario" + salario )
}

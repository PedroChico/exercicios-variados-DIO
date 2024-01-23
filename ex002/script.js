// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let num = 20
    console.log("O número escolhido foi: " + num)

if(num >= 0 && num % 2 === 0) {
    console.log("O número escolhido é positivo e par")
} else if(num >= 0 && num % 2 != 0) {
    console.log("O número escolhido é positivo e ímpar")
    }  else if(num < 0 && num % 2 === 0) {
        console.log("O número escolhido é negativo e par")
        }   else if(num < 0 && num % 2 != 0) {
            console.log("O número escolhido é negativo e ímpar")
        }  

 //Mude o valor de let num para verificar todas as possibilidade   

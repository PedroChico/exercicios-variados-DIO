//1.Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é maior, igual ou menor que C.

let A = 10
let B = 5
let C = 12
let soma = A + B

console.log("O resultado da soma de A + B é igual a: " + soma)

if(soma > C) {
    console.log("O resultado da soma de A + B é maior que o valor de C que é de: " + C)
} else if(soma == C) {
    console.log("O resultado da soma de A + B é igual ao valor de C que é de: " + C)
} else {
    console.log("E esse resultado é menor que o valor de C que é de: " + C)
}

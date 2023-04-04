/* 

Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível
 2 - Gasto de combustível em litros por KM rodado
 3 - Distância em km da viagem
 
*/

const precoCombustivel = 4.8;
const rodaComUmLitro = 10;
const distanciaViagem = 2780;

const quantidadeCombustivel = (distanciaViagem / rodaComUmLitro);
const valorTotal = quantidadeCombustivel * precoCombustivel;

console.log("\nO total do valor gasto em combustível é de: R$" + valorTotal.toFixed(2) + "\n");
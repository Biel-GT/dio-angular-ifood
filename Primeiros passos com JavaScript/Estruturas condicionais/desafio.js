/* 

Você terá 5 variáveis. Sendo elas:
 1 - Preço da gasolina
 2 - Preço do etanol
 3 - Tipo de combustível utilizado
 4 - Gasto de combustível em litros por KM rodado
 5 - Distância em km da viagem
 
 */

const precoGasolina = 4.8;
const precoEtanol = 3.74;

const tipoCombustivel = "etanol";

const litroPorKM = 10;
const distanciaViagem = 356;

const quantidadeCombustivel = (distanciaViagem / litroPorKM);
let valorTotal;

if (tipoCombustivel === "etanol") {
    valorTotal = quantidadeCombustivel * precoEtanol;
} else if (tipoCombustivel === "gasolina"){
    valorTotal = quantidadeCombustivel * precoGasolina;
}

console.log("\nO total do valor gasto em combustível é de: R$" + valorTotal.toFixed(2) + "\n");
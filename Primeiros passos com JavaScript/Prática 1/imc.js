/* 
Formula do IMC: 

IMC peso / (altura * altura)

Elabore un algoritmo que dado o peso e a altura de un adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condicão:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Pesa normal;
- Entre 25 e 30 Acima do peso
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

const altura = 1.80;
const peso = 90;

const IMC = (peso / Math.pow(altura, 2)).toFixed(2); // O método pow retorna a potência 2 de altura

if (IMC < 18.5) {
    console.log("\n Abaixo do peso \n");
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("\n Peso normal \n");
} else if (IMC >= 25 && IMC < 30) {
    console.log("\n Acima do peso \n");
} else if (IMC >= 30 && IMC < 40) {
    console.log("\n Obeso \n");
} else {
    console.log("\n Obesidade grave \n");
}

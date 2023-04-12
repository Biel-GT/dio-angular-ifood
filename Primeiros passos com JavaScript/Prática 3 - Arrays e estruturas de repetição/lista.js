/* 
    2 - Percorrer lista de números e exibir os números pares
*/

const lista = [5, 10, 15, 20, 25];

lista.push(30);

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

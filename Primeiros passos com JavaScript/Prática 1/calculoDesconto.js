/* 
Elabore un algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
ea escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condicão de pagamento:
    - A vista Débito, recebe 10% de desconto;
    - A vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preco normal de etiqueta sem juros;
    - Acima de duas vezes, preco normal de etiqueta mais juros de 10%;
*/

const valorProduto = 1000;
let desconto;
const opcaoPagamento = "credito";

if (opcaoPagamento === "debito") {

    desconto = valorProduto * 0.1;

} else if (opcaoPagamento === "dinheiro" || opcaoPagamento === "pix") {

    desconto = valorProduto * 0.15;

} else if (opcaoPagamento === "credito") {

    const parcelas = 3;

    if (parcelas <= 2) {
        desconto = 0;
    } else {
        desconto = -(valorProduto * 0.1);
    }

} 

const valorTotal = valorProduto - desconto;
console.log("\n O valor total é de: R$" + valorTotal + "\n");
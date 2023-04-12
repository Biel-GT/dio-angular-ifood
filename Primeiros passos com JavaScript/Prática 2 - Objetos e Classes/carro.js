/* 
    1 - Crie uma classe para representar carros.
    Carros possuem uma marca, cor e gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de quilômetros e o preço de combustível nos dê o valor gasto em reais para realizar este percurso.
    
*/

class Carro {
    marca;
    cor;
    kmLitroGasolina;
    kmLitroEtanol;

    constructor (marca, cor, kmLitroGasolina, kmLitroEtanol) {
        this.marca = marca;
        this.cor = cor;
        this.kmLitroGasolina = kmLitroGasolina;
        this.kmLitroEtanol = kmLitroEtanol;
    }

    gastoCombustivel(distanciaViagem, combustivel, precoCombustivel) {
        let quantidadeCombustivel;
        if (combustivel === 'Gasolina') {
            quantidadeCombustivel = (distanciaViagem / this.kmLitroGasolina);
        } else if (combustivel === 'Etanol') {
            quantidadeCombustivel = (distanciaViagem / this.kmLitroEtanol);
        }
        let gastoEmReais = precoCombustivel * quantidadeCombustivel;
        console.log(`O valor gasto em ${combustivel} será de: R$${gastoEmReais}`);
    }
}

const UNO = new Carro('FIAT', 'Vermelho', 10, 7);

const distanciaViagem = 150;
const tipoCombustivel = 'Gasolina'
const precoCombustivel = 5
UNO.gastoCombustivel(distanciaViagem, tipoCombustivel, precoCombustivel);
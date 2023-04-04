function quadrado(numero) {
    return numero * numero;
}

const quadradoDez = quadrado(10);
// console.log("\nO quadrado de 10 é: " + quadradoDez);

function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

// console.log("\n30% de juros em cima de 1500 reais retorna em : R$" + incrementarJuros(1500, 30));

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2).toFixed(2);
}

function classificarImc(imc) {
    if (IMC < 18.5) {
        return "\n Abaixo do peso \n";
    } else if (IMC >= 18.5 && IMC < 25) {
        return "\n Peso normal \n";
    } else if (IMC >= 25 && IMC < 30) {
        return "\n Acima do peso \n";
    } else if (IMC >= 30 && IMC < 40) {
        return "\n Obeso \n";
    } else {
        return "\n Obesidade grave \n";
    }
}

const altura = 1.67;
const peso = 53.1;
const IMC = calcularImc(peso, altura);
console.log(classificarImc(IMC));


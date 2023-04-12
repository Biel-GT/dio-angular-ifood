/* 
    2 - Crie uma classse para representar pessoas.
    Pessoa tem nome, peso e altura.
    Pessoas devem dizer seu IMC (peso/(altura*altura)).
    José tem 70kg e 1,75m, ele deve dizero valor do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (this.peso / (this.altura * this.altura) );
    }

    dizerImc (){
        return `\n Me chamo ${this.nome} e meu IMC é: ${this.imc}.\n`
    }

    classificarImc() {
        const imc = this.imc;
        if (imc < 18.5) {
            return "\n Abaixo do peso \n";
        } else if (imc >= 18.5 && imc < 25) {
            return "\n Peso normal \n";
        } else if (imc >= 25 && imc < 30) {
            return "\n Acima do peso \n";
        } else if (imc >= 30 && imc < 40) {
            return "\n Obeso \n";
        } else {
            return "\n Obesidade grave \n";
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const IMC = jose.dizerImc();
console.log(IMC);

const classificacaoIMC = jose.classificarImc();
console.log(classificacaoIMC);
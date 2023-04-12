/* 

Uma classe é um molde de um objeto, um esqueleto

*/

class Pessoa {
    nome;
    idade;
    altura;
    anoNascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoNascimento = new Date().getFullYear() - idade; // Uso da dedução para descobrir informação 
    }

    descrever() {
        console.log(`\nMeu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é de ${this.altura}m.\n`);
    }
}

// A instância é uma ocorrência de um objeto
const gabriel = new Pessoa('Gabriel', 18, 1.67);
gabriel.descrever();

function compararIdade(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) do que ${pessoa2.nome}.`);
    } else if(pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho(a) do que ${pessoa1.nome}.`);
    }
    else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`);
    }
}

const wagner = new Pessoa('Wagner', 46, 1.77);

compararIdade(gabriel, wagner);
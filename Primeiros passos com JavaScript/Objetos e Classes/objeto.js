/* 

Um objeto é uma coleção dinâmica de dado e valor

*/
const pessoa = {
    nome: 'Gabriel', 
    idade: 18,

    descrever: function () {
        console.log(`\nMeu nome é ${this.nome} e minha idade é ${this.idade}.\n`);
    }
};

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);

// // É possível setar nomos dados
// pessoa.altura = 1.67;

// console.log(pessoa);

// // Também é possível deletar dados
// delete pessoa.altura;

// console.log(pessoa);

// // Uso de métodos do objeto
// pessoa.descrever();

// Acesso dinâmico de atributo
pessoa['nome'] = 'Gabriel Souza Teixeira';
pessoa.descrever();

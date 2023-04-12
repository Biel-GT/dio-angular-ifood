
const {gets, print} = require('./funcoes-auxiliares');

/* 
    1 - Sortear números
    Sala tem 5 alunos
    Cada aluno recebe 1 número sorteado de 1 - 100
    Pegar os 5 e mostrar o maior
*/

const alunos = 5;
let maiorValor = 0;

for (let i = 0; i < alunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
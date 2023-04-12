const notas = [10, 7, 9, 8, 6];

let nota = 0;

for (let i = 0; i < notas.length; i++) {
    nota += notas[i];
}

const media = nota / notas.length;
console.log(media);
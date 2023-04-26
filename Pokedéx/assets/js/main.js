/*
    Debugando o código automaticamente
    Funciona no Browser e no Node.js
        
    debugger 
    console.log(convertToLi(pokemon));
*/
const limit = 12;
let offset = 0;

const pokemonList = document.querySelector('#pokemonList');
const loadMoreButton = document.querySelector('#loadMoreButton');
const maxPokemons = 151;

function loadPokemons(offset, limit) {
    PokeAPI.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `)
        .join('');
    })
}

loadPokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    newPage = offset + limit;
    if (newPage >= maxPokemons) {
        const newLimit = maxPokemons - offset;
        loadPokemons(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemons(offset, limit);
    }
})





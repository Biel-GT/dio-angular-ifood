const PokeAPI = {}

PokeAPI.convertPokeAPIToPokemon = (pokeAPI) => {
    const type = pokeAPI.types[0].type.name;
    const types = pokeAPI.types.map((typeSlot) => typeSlot.type.name)
    const photo = pokeAPI.sprites.other.dream_world.front_default;
    const pokemon = new Pokemon(pokeAPI.id, pokeAPI.name, type, types, photo);
    return pokemon;
}

PokeAPI.getPokemonDetails = (pokemon) => {
    // Obtendo detalhes dos pokemons
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(PokeAPI.convertPokeAPIToPokemon)
}

PokeAPI.getPokemons = (offset = 0, limit = 8) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    // Transformando a resposta em um JSON, executa sem esperar a promisse encerrar
    return fetch(url)
        .then((response) => response.json())
        .then((json) => json.results)
        .then((pokemons) => pokemons.map(PokeAPI.getPokemonDetails))
        .then((detailsRequests) => Promise.all(detailsRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error)) // para tratameto de erros
        .finally(() => console.log('Requisição finalizada.')) // independente do sucesso ou não executa
}

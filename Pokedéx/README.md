## Como funciona uma API
API - servidor ou serviço da web que fornece dados
Usa o método HTTP

HTTP - protocolo de requisição da web, necessita de uma URL Path e um Request Method
- URL: IP (site ou servidor, do https até o .co) + Path (caminho do recurso solicitado, do /api até o final)
    https://pokeapi.co/api/v2/pokemon

    - Path params: https://pokeapi.co/api/v2/pokemon/${id}
        Ex: https://pokeapi.co/api/v2/pokemon/1

    - Query string: solicitar recursos específicos, uso do ? e atributo (chave = valor)
        Ex: ?type=grass

- Request Method: o motivo da requisição
    - Tipo: 
        - GET -> obter, buscar  
        - POST -> envio (para inserção) 
        - PUT -> envio (para edição de TODOS os atributos) 
        - DELETE -> exclusão 
        - PATCH -> para edição de ALGUNS os atributos

- Headers: áreas de dados, metadados da requisição, para descrever a requisição ou complementá-la
    Em outras palavras, representa a configuração da nossa API.
    Request Headers and Response Headers

    - accept -> o que a URL aceita de requisição
    - content-type -> o que ele devolve na resposta

- Body: corpo da requisição ou da resposta, dados em geral
    - Para REQUISIÇÃO faz sentido nos métodos POST, PUT and PATCH

    - Para RESPOSTA faz sentido nos métodos GET, devolve o que foi solicitado

    - Aparece no Preview e no Response

- Status Code: número que indica o que aconteceu com nossa requisição
    - Família 200 (200 - 299) quer dizer SUCESSO!!!

    - Família 300 -> REDIRECT
    - Família 400 -> ERRO por parte do Cliente
    - Família 500 -> ERRO no Servidor

Concluindo:
- A Requisição é composta por: 
    - URL
    - Request Method
    - Request Headers
    - Request Body

- A Resposta é composta por:
    - Status Code
    - Response Headers
    - Response Body

## Integrando e consumindo a API

A requisição será feita através da função fetch()

fetch() retorna uma Promise

### O que é uma Promise?

Permite o processamento assíncrono, ou seja, não tem a resposta de imediato, a requisição HTTP leva um pouco de tempo, com uma Promise podemos processar as demais coisas ao mesmo tempo. Por exemplo:

    ```javascript
        const offset = 0;
        const limit = 10;
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

        fetch(url).then(function (response) {
            console.log(response);
        })

        const x = 10 + 10;
        console.log(x);
    ```

    - Nesse exemplo de código, será impresso primeiro o x (20), depois a response, mas por qual motivo?
    - Promise é uma promessa, o método fetch() retorna uma Promise, ou seja, promete um resultado, que pode ou não chegar.
    - O processamento continua esperando essa resposta, no entanto prossegue com as demais atividades e quando essa resposta chegar é executado aquilo que ficou dependendo dessa resposta.

O fetch() por padrão devolve uma String, que deverá ser convertida em .json
    - O método then() permite o processamento assíncrono diferentemente do try{}
    - O encadeameno de then() permite pegar o resultado do then() anterior

### Arrow functions 
    - São usadas quando a função não precisa de um nome (geralmente função de callback)

    ```javascript
        .then(function (response) {
            return response.json();
        })

        // Pode ser substituída por:

        .then((response) => {
            return response.json();
        })
    ```

    - O corpo da função também pode ser suprimido caso a função seja simples de uma linha só, reduzindo ainda mais o código

    ```javascript
        .then(() => response.json())
    ```

Em seguida, o consumo da API foi separado do código de adaptação ao HTML, criando o arquivo 'poke-api.js', responsávelm pela requisição e por retornar e tratar o .json
Foi criado um objeto para a API e um método para realizar a requisição

    ```javascript
        const PokeAPI = {}

        PokeAPI.getAPI = (offset = 0, limit = 10) => {
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

            // Transformando a resposta em um JSON, executa sem esperar a promisse encerrar
            return fetch(url)
                .then((response) => response.json())
                .then((json) => json.results)
                .catch((error) => console.error(error)) // para tratameto de erros
                .finally(() => console.log('Requisição finalizada.')) // independente do sucesso ou não executa
        }
    ```

### Map() e Join()
    - A requisição dos pokemons retorna uma lista de 10 pokemons em .json que deve ser convertida em HTML, isso foi feita por uma função 
    - Para inserir cada um desses pokemons na página era necessário usar um laço for para cada pokemon
    - O método map() funciona como um for para alterar os elementos do array
    - Com ele é possível fazer a conversão de todos os elementos de uma só vez
    - Na hora da inserção no HTML havia problemas pois como eram inseridos separados, ao inserir juntos vinha com uma vírgula que separava os elementos, para resolver isso foi usado o método join()
    - O método join('') literalmente junta tudo numa string, removendo as vírgulas e acabando com nosso problema
    - Com esses métodos foi possível reduzir `drasticamente` o código para uma linha

    ```javascript
        PokeAPI.getAPI().then((pokemons) => {
            pokemonList.innerHTML += pokemons.map(convertToLi).join('');
        })
    ```

### Múltiplas requisições
    - Para trazer os demais detalhes dos pokemons é necessário realizar outras requisições
    - Para isso é necessário fazer uma requisição para cada pokemon:

    ```javascript
        PokeAPI.getPokemonDetails = (pokemon) => {
            // Obtendo detalhes dos pokemons
            return fetch(pokemon.url).then((response) => response.json())
        }
    ```

    - Com esse método as requisições são preparadas para esperar as respostas das demais

    ```javascript
        PokeAPI.getPokemons = (offset = 0, limit = 10) => {
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

            // Transformando a resposta em um JSON, executa sem esperar a promisse encerrar
            return fetch(url)
                .then((response) => response.json())
                .then((json) => json.results)
                .then((pokemons) => pokemons.map(PokeAPI.getPokemonDetails))
                .then((detailsRequests) => Promise.all(detailsRequests))
                .catch((error) => console.error(error)) // para tratameto de erros
                .finally(() => console.log('Requisição finalizada.')) // independente do sucesso ou não executa
        }
    ```

    - O método Promisse.all() é usado para que as promessas sejam entregues num mesmo momento, onde todas aguardam as respostas
    - O resultado só vem até todas responderem, é o ideal quando o resultado depende de todas as promessas executadas com sucesso.
    - Com todas as informações reunidas, já é possível completar o site com o que faltava

### Usando Model
    - Para facilitar o uso das informações das requisições, uma Model é necessária, filtraremos as informações requeridas e colocaremos em nosso modelo

    ```javascript
        class Pokemon {
            id;
            name;
            type;
            types = [];
            photo;

            constructor (id, name, type, types, photo) {
                this.id = id;
                this.name = name;
                this.type = type;
                this.types = types;
                this.photo = photo;
            }
        }
    ```

`**Aprendizado**`
- API e requisição HTTP
- Promise, fetch(), then()
- Arrow function
- debugger
- map(), join()
- Trabalhando com múltiplas requisições (Promisse.all())
- Model
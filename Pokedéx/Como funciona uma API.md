## API - servidor ou serviço da web que fornece dados
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
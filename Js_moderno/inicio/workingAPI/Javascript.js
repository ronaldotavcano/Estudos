/*
API:
 Aplication Program Interface, é uma interface que disponibiliza um conjunto de funcionalidades
para serem utilizadas. EX: API de CEP, previsão do tempo,
cotação de moedas.

Cliente faz requisição para a API e a API busca no servidor
e devolve ao cliente.

Métodos Http:

get -> leitura
post -> criação
put -> atualização
delete -> deletar
patch -> atualização parcial

Json: é uma notação de objetos utilizado para representar 
dados. amplamente utilizado na comunicação entre servidores
e clientes.

Ex:
{
"user": {
        "id": 74345,
        "name": "Ronaldo T Cano",
        "address": {
            "street": "Rua A",
            "country": "Brazil",
        },
    }
}
    Para mudar a versão especifica:
    npm install json-server@(numeroDaVersão)
*/
import { Client } from "api/Models/Client";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class ClientResolver {
    // va para o arquivo index.ts dentro de resolvers e passe o ClientResolver
    // crie a pasta de models e dentro dela crie um arquivo chamado Client.ts

    // aqui vamos escrever as nossas Querys e Mutations
    // na Query precisamos passar para ela o que ela vai retornar ou seja aqui ela vai nos retornar uma lista de Client
    @Query(() => [Client])
    async clients() { // listando todos os clientes

        return "Hello baby";
    }
}

/* va para o site do mongoDb https://cloud.mongodb.com/v2/632f4f3519994d3051d95a14#/clusters e crie um banco para esta api
    com o db criado ja temos acesso a url de conexão, crie o arquivo .env e crie a variavel de ambiente para fazer a conexão com o mongoDb online
    depois va para o arquivo index.ts importe o dotenv e configure para poder ter acesso a variavel de ambiente no arquivo .env
    Agora crie uma pasta chamada mongodb e dentro um arquivo connected.ts e conecte a nossa aplicação com o mongoDb
*/
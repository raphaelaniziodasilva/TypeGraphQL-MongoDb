import { Query, Resolver } from "type-graphql";

@Resolver()
export class ClientResolver {
    // va para o arquivo index.ts dentro de resolvers e passe o ClientResolver

    // aqui vamos escrever as nossas Querys e Mutations

    // na Query precisamos passar para ela o que ela vai retornar
    @Query(() => String)
    async hello() {
        return "Hello baby";
    }
}

// va para o site do mongoDb https://cloud.mongodb.com/v2/632f4f3519994d3051d95a14#/clusters e crie um banco para esta api
// com o db criado ja temos acesso a url de conexão, crie o arquivo .env e crie a variavel de ambiente para fazer a conexão com o mongoDb online

// https://www.youtube.com/watch?v=ArAaWgaXqXg 17 minutos do video
import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ClientResolver } from "./Resolvers/ClientResolver";
// importando o dotenv e configurando para poder ter acesso a variavel de ambiente no arquivo .env
require("dotenv").config({path: ".env"});

async function main() {
    console.log(process.env.MONGODB_API);
    // vamos criar o schema
    const schema = await buildSchema({
        // passando as propriedade

        // resolvers são os endpoints, passando o ClientResolver
        resolvers: [ClientResolver],

        // emitSchemaFile vai pedir o endereço, vai salvar o arquivo de schema, que vai ser criado automatico com a tipagem
        // "schema.ggl": exteção do graphQl
        emitSchemaFile: {
            path: __dirname + "/schema.gql",
            commentDescriptions: true,
            sortedSchema: false, // by default the printed schema is sorted alphabetically
        },
        
    });

    // criando o server
    const server = new ApolloServer({
        schema, // passando o schema
    });

    // colocando o server para rodar, {url} --> vai rodar na porta 4000
    const {url} = await server.listen();
    console.log(`Server running on ${url}`);

}
main(); // executando a função main

// agora crie a pasta Resolvers e dentro dela um arquivo chamado ClientResolver.ts
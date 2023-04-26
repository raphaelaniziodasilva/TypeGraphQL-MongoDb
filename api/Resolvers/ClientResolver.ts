import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Client } from "../Models/Client";
import { ClientMongo } from "../mongodb/Models/Client";
import { CreatClientInput, updateClientInput } from "../Inputs/ClientInput";

@Resolver()
export class ClientResolver {
    // va para o arquivo index.ts dentro de resolvers e passe o ClientResolver
    // crie a pasta de models e dentro dela crie um arquivo chamado Client.ts

    // aqui vamos escrever as nossas Querys e Mutations

    // na Query precisamos passar para ela o que ela vai retornar ou seja aqui ela vai nos retornar uma lista de Client
    @Query(() => [Client]) // vai retornar um array de client
    async clients() { // listando todos os clientes
        return await ClientMongo.find();  // ClientMongo --> indo na tabela client do mongodb
    }

    // para criar um cliente usamos a @Mutation que ele nos deixa fazer alterações no db
    @Mutation(() => Client) // vai retornar um client
    /*  
        @Arg: para criar um cliente precisamos receber o argumento dele 
        vamos fazer as validações do nosso cliente um dto, crie uma pasta chamada Inputs e dentro o arquivo ClientInput e export a class CreatClientInput
    */
    async createClient(@Arg("createClientObject") createClientObject: CreatClientInput) { // criando cliente
        const cliente = createClientObject;
        return await ClientMongo.create(cliente) // ClientMongo --> indo na tabela client do mongodb
    }

    @Mutation(() => Client) // vai retornar um array de client
    /*  
        @Arg: para editar um cliente precisamos receber o argumento dele 
        vamos fazer as validações para atualização do nosso cliente um dto, va para pasta Inputs dentro do arquivo CreatClientInput e export a class updateClientInput
    */
    async updateClient(@Arg("updateClientObject") updateClientObject: updateClientInput) { // editando cliente
        const cliente = updateClientObject;
        // procurando pelo id,{se o _id: for igual a cliente.id: id do cliente}, vamos mudar as informações passando essa do cliente
        await ClientMongo.updateOne({_id: cliente.id}, cliente)
        
        return cliente;
    }


}


/* va para o site do mongoDb https://cloud.mongodb.com/v2/632f4f3519994d3051d95a14#/clusters e crie um banco para esta api

    com o db criado ja temos acesso a url de conexão, crie o arquivo .env e crie a variavel de ambiente para fazer a conexão com o mongoDb online

    depois va para o arquivo index.ts importe o dotenv e configure para poder ter acesso a variavel de ambiente no arquivo .env

    Agora crie uma pasta chamada mongodb e dentro um arquivo connected.ts e conecte a nossa aplicação com o mongoDb
*/
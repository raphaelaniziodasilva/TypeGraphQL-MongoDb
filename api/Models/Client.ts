// Aqui vai ficar o modelo: schema do cliente
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Client {
    // va para o arquivo ClientResolver.ts dentro da Query passe um array de [Client], a query retornar uma lista de Client

    @Field((type) => ID)
    id: string;

    @Field()
    nome: string;

    @Field()
    email: string;

    @Field()
    cpf: string;

    @Field()
    endereco: string;

    @Field()
    telefone: string;
}
// Precisamos criar e acessar o modelo: schema do mongoDb, va para a pasta mongodb e dentro dela crie uma pasta chamada Models e dentro crie um arquivo chmado Client.ts
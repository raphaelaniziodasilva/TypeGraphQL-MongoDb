// vamos fazer as validações do nosso cliente ou dto

import { MaxLength } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreatClientInput {
    @Field()
    nome: string;

    @MaxLength(255)
    @Field({ nullable: true })
    email: string;

    @MaxLength(255)
    @Field({ nullable: true })
    cpf: string;

    @MaxLength(255)
    @Field({ nullable: true })
    endereco: string;

    @MaxLength(255)
    @Field({ nullable: true })
    telefone: string;

    // va para o arquivo ClientResolver.ts no metodo createClient tipe o createClientObject: CreatClientInput
}

@InputType()
export class updateClientInput {
    // precisamos do id para fazer a procura: pesquisa
    @Field((type) => ID)
    id: string;
    
    @Field()
    nome: string;

    @MaxLength(255)
    @Field({ nullable: true })
    email: string;

    @MaxLength(255)
    @Field({ nullable: true })
    cpf: string;

    @MaxLength(255)
    @Field({ nullable: true })
    endereco: string;

    @MaxLength(255)
    @Field({ nullable: true })
    telefone: string;

    // va para o arquivo ClientResolver.ts no metodo updateClient tipe o updateClientObject: updateClientInput
}
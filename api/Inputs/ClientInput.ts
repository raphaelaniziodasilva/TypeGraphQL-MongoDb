// vamos fazer as validações do nosso cliente ou dto

import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

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
}
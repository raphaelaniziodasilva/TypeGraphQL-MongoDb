// criando o schema: modelo do mongoDb
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    // id o mongoDb ja cria automaticamente
    nome: String,
    email: String,
    cpf: String,
    endereco: String,
    telefone: String,
});

// "Client" --> nome da tabela
export const ClientMongo = mongoose.model("Client", schema);

// agora ja conseguimos acessar o schema do mongodb, va para o arquivo ClientResolver e utilize o ClientMongo nos metodos das @Querys e @Mutations
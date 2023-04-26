// fazendo a conexão com db mongoDb, vamos usar o mongoose
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGODB_API)
    .then(() => console.log("MongoDb connected"))
    .catch((error) => console.log(error))

// va para o arquivo index.ts e importe este arquivo
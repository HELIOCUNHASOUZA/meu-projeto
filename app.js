const express= require("express");
const app = express();
const port = 3000;
const router = require("./router")

//definindo router para gerenciar rotas 
app.use("/", router)


app.listen(port,()=>{
    console.log(`servidor rodando`)
})
//exporta o express
const express = require("express")
//cria o roteador 
const router = express.Router("router")

//definindo rotas para o roteador
router.get("/", (req, res)=> {
    return res.sendFile(__dirname + "/views/index.html")
})


//definindo rotas para o roteador
router.post("/", (req, res)=> {
    // nova rota do tipo post /calculos
    res.status(201).json(__calculos + "/controllers/resultadosCalculos.js")
})


//tabela
//mysql com calculo e resultado data/hora 






//exportando roteador
module.exports = router








// SQL tabela calculos Id calculo data/hora
// configurar o squelize no node
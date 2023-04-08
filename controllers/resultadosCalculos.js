const mostraDados = require('../script/fun.js');


    const mostraDados = {
        mostraDados: (req, res) =>{
            const resultado = resultado.mostraDados();
            return res.render('resultado', {resultado});
        }
    }
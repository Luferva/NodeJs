const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

// Config  
    // Conexão com o Banco de Dados
    const sequelize = new Sequelize('teste_nodejs', 'root', '', {
        host: "localhost",
        dialect: 'mysql'
    } );

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Rotas
    app.get('/cad', function(req, res) {
        res.render('NOME DO ARQUIVO QUE QUER EXIBIR')
    })


//Essa função deve ficar na ultima linha do código
app.listen(8881, function(){
    console.log("Servidor rodando ! http://localhost:8881"); 
}); 
//utilizando o modulo Sequelize do NodeJs para conexão com o banco de Dados bovespa_db. 
/* const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste_nodejs', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
} ); */

//função usada para testar conexão com Banco de Dados.
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(error){
    console.log("Falha ao acessar: " + error)
})

//define os atributos da Model postagens.
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//função que sincroniza o Model com o SQL.
Postagem.sync({force: true})

//função para fazer insert Into 
Postagem.create({
    titulo: "Novos Post",
    conteudo: "teste teste teste"
}) 


//define os atributos da Model usuários.
const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.sync({force:true}) 

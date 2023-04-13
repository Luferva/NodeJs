//utilizado para criar um servidor, utilizando o modulo HTTP do nodeJs.
var http = require('http')

http.createServer(function (req, res){
    res.end("Hello Word!")//mensagem que aparece no final da criação do servidor.
}).listen(8881);

console.log("Servidor rodando !")

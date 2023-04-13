const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/teste/:name/:cargo", function(req, res){ //rota passando uma requisição
    res.send("<h1> Olá " + req.params.name + ". Seja bem vindo, " + req.params.cargo + " ! </h1>");//resposta da requisição ultilizando alguns paramentros
});

//Essa função deve ficar na ultima linha do código
app.listen(8881, function(){
    console.log("Servidor rodando ! http://localhost:8881");
}); 
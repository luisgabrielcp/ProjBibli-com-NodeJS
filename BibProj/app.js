// Carregando Módulos
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const ejs = require('ejs'); // Certifique-se de que você instalou o pacote ejs

// Configurando o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configurando o Express para usar EJS como mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conexão com o banco de dados
const sequelize = new Sequelize('bibproj', 'root', '2023*Isepam', { host: "localhost", dialect: 'mysql' });

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'test.html'));

});

app.get('/consulta', (req, res) => {
    res.send("<h1>Consulta</h1>")
});

app.get('/login', (req, res) => {
    res.send("<h1>Login</h1>")
});


//MidleWare
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });  


// Outros
const port = 8081;
app.listen(port, function () {
    console.log("Servidor na Pista!");
});
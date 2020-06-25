//importa um modulos para a conexao
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Interacao = require('./models/Interacao');

//variavel que terá todas as funções do express
const app = express();
const interacao = new Interacao();

//tamplate engine
app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'handlebars');

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rotas
app.get('/', (req, res) => {
    interacao.selecionaTudo(req, res)
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    interacao.criar(req, res)
});

app.get('/del/:id', (req, res) => {
    interacao.deletar(req, res)
});

//seleciona um post
app.get('/ed/:id', (req, res) => {
    interacao.selecionaUm(req, res, 'form-updata')
});

app.post('/up/:id', (req, res) => {
    interacao.atualizar(req, res)
});

app.get('/mos/:id', (req, res) => {
    interacao.selecionaUm(req, res, 'mostra')
});

//inicia um servidor com o express
app.listen(8080, () => {
    console.log("Servidor Rodando na URL: localhost:8080");
});
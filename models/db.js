const Sequlize = require('sequelize');

//iniciando conexao com bando de dados
const sequilize = new Sequlize('postapp', 'root', 'A1.rafaelF', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { Sequilize: Sequlize, sequilize: sequilize };
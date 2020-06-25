const db = require('./db');

const Post = db.sequilize.define('postagens', {
    titulo: {
        type: db.Sequilize.STRING
    },
    conteudo: {
        type: db.Sequilize.TEXT
    }
});

module.exports = Post;
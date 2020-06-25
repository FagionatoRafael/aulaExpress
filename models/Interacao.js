const Post = require('./Post');

class Interacao {

    selecionaTudo(req, res) {
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
            res.render('home', {posts: posts});
        });
    }

    selecionaUm(req, res, form) {
        Post.findAll({where: { id: req.params.id }}).then((post) => {
            res.render(form, {titulo: post[0].titulo, conteudo: post[0].conteudo, id: post[0].id});
        });
    }

    criar(req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');
        }).catch((erro) => {
            res.send(`Post com erros: ${erro}`);
        });
    }

    atualizar(req, res) {
        Post.update({ titulo: req.body.titulo, conteudo: req.body.conteudo }, {where: { id: req.params.id }
        }).then(() => {
            res.redirect('/');
        }).catch((erro) => {
            res.send('erro ao tentar atualizar!');
        });
    }

    deletar(req, res) {
        Post.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/');
        }).catch((erro) => {
            res.send('Esta postagem nao existe!');
        });
    }
}

module.exports = Interacao;
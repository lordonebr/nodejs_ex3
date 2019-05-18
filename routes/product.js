const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const mongoose = require('mongoose');
const Comment = require('../store/Comment');

// abre a página do produto, listando suas informações vindas do banco sqlite e seus comentários vindos do banco mongodb
router.get('/:id', function(req, res) {
    
    Products.getById(req.params.id)
    .then(function(products) {     
        var product = products[0];
        var loadPage = {
            id : req.params.id, 
            name: product.name, 
            description: product.description, 
            price: product.price
        };

        Comment.find({ idProduct : req.params.id})
            .then(comments => {
                loadPage.comment = comments;
                res.render('product', loadPage);
            }); 
    })
    .catch(() => {
        console.log('Não existe Produto com o id = '.concat(req.params.id.toString()));
        res.send('<h3>Não existe Produto com o id = '.concat(req.params.id.toString()).concat('!</h3>'));
    })
});

// redireciona para a página de add um novo produto
router.post('/add', function(req, res) {
    res.render('productAdd');
});

// cria um novo produto no banco sqlite, baseado nas informações fornecidas pelo usuário
router.post('/new', function(req, res) {

    Products.getIds()
    .then(function (ids){
        var idNew = ids[0].id + 1;

        var productNew = {
            id : idNew,
            name : req.body.name,
            description: req.body.description,
            price: req.body.price
        }

        Products.insert(productNew)
            .then(function() {      
                console.log('Foi criado o produto de Id = '.concat(idNew.toString()).concat('!')); 
                res.redirect('/');
        })
    })
    .catch(() => {
        var productNew = {
            id : 1,
            name : req.body.name,
            description: req.body.description,
            price: req.body.price
        }

        Products.insert(productNew)
            .then(function() {      
                console.log('Foi criado o produto de Id = 1!'); 
                res.redirect('/');
        })
    })
});

router.post('/edit/:id', function(req, res) {

    Products.getById(req.params.id)
    .then(function(products) {     
        var product = products[0];
        var loadPage = {
            id : req.params.id, 
            name: product.name, 
            description: product.description, 
            price: product.price
        };

        res.render('productEdit', loadPage);
    });
});

router.post('/update/:id', function(req, res) {

    var productUpdate = {
      id : req.body.id,
      name : req.body.name,
      description: req.body.description,
      price: req.body.price
    }
  
    Products.update(productUpdate)
    .then(function() {      
    console.log('Produto de Id = '.concat(req.params.id.toString()).concat(' foi atualizado!')); 
      res.redirect('/');
    })
  
});

router.post('/delete/:id', function(req, res) {

    Products.deleteById(req.params.id)
      .then(function() {   
        console.log('Produto de Id = '.concat(req.params.id.toString()).concat(' foi deletado!'));   

        // deleta todos comentario do produto
        Comment.remove({ idProduct : req.params.id})
        .then(comments => {
            console.log('Todos comentários do produto foram deletados!'); 
            res.redirect('/');
        });
      })
});

router.post('/comment/new/:id', function(req, res) {

    Comment.create({
        idProduct: req.params.id, 
        author: req.body.author, 
        comment: req.body.comment
    })
    .then(() => {
        console.log('Comentário adicionado!');
        res.redirect('/product/'.concat(req.params.id.toString()));
    }
    );
});

router.post('/comment/delete/:id', function(req, res) {

    Comment.remove({ _id : req.params.id})
    .then(comments => {
        console.log('Comentário deletado!'); 
        res.redirect('/product/'.concat(req.body.idProduct.toString()));
    });
});



module.exports = router;
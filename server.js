var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
// var mongoose = require('mongoose');
var mongoose = require('mongoose');
mongoose.connect('mongodb://gamepc:Dongen135@ds125774.mlab.com:25774/gamepc24');

Product = require('./api/models/products');

app.get('/', function (req, res) {
    res.send("Welcome to our store API, use the /api/... to get the actual data!");
})

app.get('/api/products', function (req, res) {
    Product.getProducts(function (err, products) {
        if(err){
            throw err;
        }
        res.json(products);
    })
})

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
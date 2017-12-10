var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

var formidable = require('formidable');
var grid = require('gridfs-stream');
var fs = require('fs');
var util = require('util');
var bodyParser = require('body-parser')


var mongoose = require('mongoose');
mongoose.connect('mongodb://gamepc:Dongen135@ds125774.mlab.com:25774/gamepc24');

Product = require('./api/models/products');



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json())


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

app.post('/api/product', Product.uploadProduct)

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
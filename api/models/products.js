var mongoose = require('mongoose');



var productSchem = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    titel:{
        type: String,
        required: true
    },

});

var Product = module.exports = mongoose.model('products', productSchem);

module.exports.getProducts = function (callback, limit) {
    Product.find(callback).limit(limit);

}

module.exports.uploadProduct = function (req, res) {
    console.log(req.body)
    new Product({id: req.body.id, titel: req.body.titel}).save();
}
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
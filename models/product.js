var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema;

var productSchema = new ProductSchema({
    imagePath: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true}
});

module.exports = mongoose.model('Product', productSchema);
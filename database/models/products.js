//Require Mongoose
let mongoose = require('mongoose');
//Define a schema
let Schema = mongoose.Schema;

let productsSchema = new Schema({
    _id: {type: String},
    image: {type: String},
    title: {type: String},
    largeImageUrl: {type: String},
    price: {type: Number},
    lowPrice: {type: Number},
    description: {type: String},
    features: {type: Array},
    imageSets: {type: Array}
}, {collection: 'products'});

let Product = module.exports = mongoose.model('Product', productsSchema);
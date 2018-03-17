'use strict';

//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var productsSchema = new Schema({
    _id: { type: String },
    image: { type: String },
    title: { type: String },
    largeImageUrl: { type: String },
    price: { type: Number },
    lowPrice: { type: Number },
    description: { type: String },
    features: { type: Array },
    imageSets: { type: Array }
}, { collection: 'products' });

var Product = module.exports = mongoose.model('Product', productsSchema);
//# sourceMappingURL=products.js.map
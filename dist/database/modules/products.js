'use strict';

//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var productsSchema = new Schema({
    url: { type: String, required: true },
    name: { type: String, required: true }
}, { collection: 'products' });

mongoose.model('products', productsSchema);
//# sourceMappingURL=products.js.map
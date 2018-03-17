'use strict';

var Product = require('../database/models/products');

exports.index = function (req, res) {
    Product.find({}, function (error, products) {
        if (error || !products) res.status(500).send('error getting products model');else res.send(products);
    });
};
//# sourceMappingURL=homeController.js.map
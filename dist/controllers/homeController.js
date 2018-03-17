'use strict';

var Product = require('../database/models/products');

exports.index = function (req, res) {
    Product.find({}, function (error, products) {
        if (error || !products) res.status(500).send('error getting products model');else res.send(products);
    });
};

exports.delete = function (req, res) {
    Product.remove({ _id: req.body.id }, function (error) {
        if (error) res.status(500).send('error removing product');else res.send({ "success": true });
    });
};
//# sourceMappingURL=homeController.js.map
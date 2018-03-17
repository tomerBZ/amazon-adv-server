let Product = require('../database/models/products');

exports.index = (req, res) => {
    Product.find({}, (error, products) => {
        if (error || !products) res.status(500).send('error getting products model');
        else res.send(products);
    });
};

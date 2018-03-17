'use strict';

var amazonClient = require('../integrations/amazon');
var Product = require('../database/models/products');
var ItemFilter = require('../helpers/itemHelper');

exports.index = function (req, res) {
    var ASIN = req.params.ASIN;
    amazonClient.itemLookup({
        idType: 'ASIN',
        itemId: ASIN,
        responseGroup: 'Images,ItemAttributes,OfferFull,Offers,PromotionSummary,SalesRank,VariationImages,Reviews,OfferSummary,EditorialReview,OfferListings,OfferSummary'
    }).then(function (result) {
        var product = result;
        var id = product[0].ASIN[0];
        Product.findOne({ _id: id }, function (err, dbProduct) {
            if (dbProduct !== null) {
                res.send(dbProduct);
            } else if (product !== null) {
                var newProduct = new Product(ItemFilter(result));
                newProduct.save(function (error, product) {
                    if (error) {
                        res.status(500).send('could not save the desired product');
                    } else {
                        res.send(product);
                    }
                });
            }
        });
    }).catch(function (error) {
        return res.status(404).send(error);
    });
};

exports.delete = function (req, res) {
    Product.remove({ _id: req.body.id }, function (error) {
        if (error) res.status(500).send('error removing product');else res.send({ "success": true });
    });
};
//# sourceMappingURL=amazonController.js.map
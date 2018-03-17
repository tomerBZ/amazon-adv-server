const amazonClient = require('../integrations/amazon');
let Product = require('../database/models/products');
let ItemFilter = require('../helpers/itemHelper');

exports.index = (req, res) => {
    const ASIN = req.params.ASIN;
    amazonClient.itemLookup({
        idType: 'ASIN',
        itemId: ASIN,
        responseGroup: 'Images,ItemAttributes,OfferFull,Offers,PromotionSummary,SalesRank,VariationImages,Reviews,OfferSummary,EditorialReview,OfferListings,OfferSummary'
    })
        .then(result => {
            let product = result;
            const id = product[0].ASIN[0];
            Product.findOne({_id: id}, function (err, dbProduct) {
                if (dbProduct !== null) {
                    res.send(dbProduct);
                } else if (product !== null) {
                    const newProduct = new Product(ItemFilter(result));
                    newProduct.save((error, product) => {
                        if (error) {
                            res.status(500).send('could not save the desired product')
                        } else {
                            res.send(product);
                        }
                    });

                }
            });
        })
        .catch((error) => res.status(404).send(error));
};



exports.delete = (req, res) => {
    Product.remove({_id: req.body.id}, (error) => {
        if (error) res.status(500).send('error removing product');
        else res.send({"success": true});
    });
};
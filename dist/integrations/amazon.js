"use strict";

var amazon = require('amazon-product-api');
var client = amazon.createClient({
    awsId: "AKIAJZQZ43AY3U4H7IPA",
    awsSecret: "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",
    awsTag: "841989-20"
});

var amazonClient = module.exports = client;
//# sourceMappingURL=amazon.js.map
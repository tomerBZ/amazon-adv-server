let amazon = require('amazon-product-api');
let client = amazon.createClient({
    awsId: "AKIAJZQZ43AY3U4H7IPA",
    awsSecret: "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",
    awsTag: "841989-20"
});

let amazonClient = module.exports = client;
'use strict';

var express = require('express');
var router = express.Router();
var amazon_controller = require('../controllers/amazonController');

/* GET users listing. */
router.get('/:ASIN', amazon_controller.index);

module.exports = router;
//# sourceMappingURL=search.js.map
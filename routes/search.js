const express = require('express');
const router = express.Router();
const amazon_controller = require('../controllers/amazonController');

/* GET users listing. */
router.get('/:ASIN', amazon_controller.index);

module.exports = router;

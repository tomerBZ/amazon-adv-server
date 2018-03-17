let express = require('express');
let router = express.Router();
let home_controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', home_controller.index);
router.post('/delete', home_controller.delete);

module.exports = router;

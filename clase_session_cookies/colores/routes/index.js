var express = require('express');
var router = express.Router();
let colorController = require('../controllers/colorController');

router.get('/', colorController.index)

router.post('/', colorController.mostraColor)

router.get('/color', colorController.color)

module.exports = router;

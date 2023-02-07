var express = require('express');
var router = express.Router();
const DBController = require('../controller/dbcontroller')
const {
    validatefields
} = require('../validation');


router.post('/', validatefields,DBController.create)
router.get('/', DBController.read) 

module.exports = router;
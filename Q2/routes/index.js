var express = require('express');
var router = express.Router();
const DBRoute = require('./db_route')


router.use('/', DBRoute)

module.exports = router;



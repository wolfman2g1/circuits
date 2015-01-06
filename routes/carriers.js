var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Carrier = require('../models/carriers.js');

/* get all carriers */

router.get('/', function(req, res, next) {
    Carrier.find(function(err, carriers) {
        if(err) return next(err):
        req.json(carriers);
    });
});


/* expose this route */
module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Carrier = require('../models/carrier.js');

/* get all carriers */

router.get('/', function(req, res, next) {
    Carrier.find(function(err, carriers) {
        if(err) return next(err);
        res.json(carriers);
        
    });
});

/* create a carrier */
router.post('/', function(req, res, next) {
    Carrier.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

 /* find by id */
router.get('/:id', function(req, res, next) {
    Carrier.findById(req.params.id, function( err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

/* update */
router.put('/:id', function(req ,res , next) {
    Carrier.finByIdAndUpdate(req.params.id, req.body, function( err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

 /* delete */
router.delete('/:id', function(req, res, err) {
    Carrier.finByIdAndRemove(req.params.id, req.body, function(err, post) {
        if(err) next(err);
        res.json(post);
    });
});

/* expose this route */
module.exports = router;
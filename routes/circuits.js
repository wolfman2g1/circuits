var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var Circuit = require('../models/circuit.js');

/* get circuits */
router.get('/', function(req, res, next) {
    Circuit.find(function (err, circuits) {
        if(err) return next(err);
        res.json(carriers);
    });
});

/* create circuit */

router.post('/', function(req, res, next) {
    Circuit.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

/* find circuit */
router.get('/:id', function(req, res, next){
    Circuit.findById(req.params.id, function(err, post) {
        if(err) retun next(err);
        res.json(post);
    });
});

/* update circuit */
router.get('/:id', function(req, res, ,next) {
    Circuit.FindByIdAndUpdate(req.params.id, req.body, err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

/* delete circuit */
router.delete('/:id', function(req, res, next) {
    Circuit.FindByIdAndRemove(rq.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});
module.exports = router ;
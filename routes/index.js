var express = require('express');
var router = express.Router();
var questions_ = require('../questions.js');
var _ = require('lodash');
var Calculadora = require('../calculator.js');

router.get('/', function(req, res, next) {
  res.render('index', {'questions': questions_, 'layout': 'layout_index'});
});
router.post('/', function(req, res, next) {
    var answers = _.map(req.body, function(e){return parseInt(e);});
    var calc = new Calculadora(answers);
    res.render('result', {'result': calc.resultado, 'as_string': JSON.stringify(calc.resultado)});
});
module.exports = router;

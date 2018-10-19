var express = require('express');
var router = express.Router();
var questions_ = require('../questions.js');
var _ = require('lodash');
var Calculadora = require('../calculator.js');

router.get('/', function(req, res, next) {

  res.render('index', {'questions': questions_});
});
router.post('/', function(req, res, next) {
    var answers = _.map(req.body, function(e){return e;});
    var calc = new Calculadora(answers);
    res.render('result', {'result': calc.resultado});
});
module.exports = router;

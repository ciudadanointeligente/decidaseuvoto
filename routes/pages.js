var express = require('express');
var router = express.Router();

router.get('/intro', function(req, res, next) {
  res.render('intro');
});
router.get('/sobre', function(req, res, next) {
    res.render('sobre');
});
router.get('/metodologia', function(req, res, next) {
    res.render('metodologia');
});
module.exports = router;

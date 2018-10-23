var express = require('express');
var router = express.Router();

router.get('/intro', function(req, res, next) {
  res.render('intro');
});
router.get('/sobre', function(req, res, next) {
    res.render('sobre');
});
module.exports = router;

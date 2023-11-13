var express = require('express');
var router = express.Router();


/* GET user page. */
router.get('/', function(req, res, next) {
  res.render('account', {script: '/javascripts/account.js'});
});

module.exports = router;
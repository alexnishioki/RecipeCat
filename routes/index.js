var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req);
  res.render('layout', { title: 'Express' });
});

module.exports = router;

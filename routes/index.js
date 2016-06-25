var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Microsoft 비공식 홈페이지' });
});

router.get('/test', function(req, res, next) {
	res.render('test');
})

module.exports = router;

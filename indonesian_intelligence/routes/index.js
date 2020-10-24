var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Indonesian Intelligence' });
});

/* GET weather page. */
router.get('/weather', function(req, res, next) {
  res.render('weather', { title: 'Weather' });
});



/* GET game page. */
router.get('/panjatpinang', function(req, res, next) {
  res.render('panjat_pinang', { title: 'Panjat Pinang' });
});

/* GET deny page. */
router.get('/wrong', function(req, res, next) {
  res.render('wrong', { title: 'Wrong Password' });
});

/* GET tour page. */
router.get('/travel', function(req, res, next) {
  res.render('travel', { title: 'Visit Indonesia' });
});

/* GET tribes page. */
router.get('/tribes', function(req, res, next) {
  res.render('tribes', { title: 'Indonesian Tribes' });
});

module.exports = router;

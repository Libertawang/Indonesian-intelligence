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

/* GET second weather page. */
router.get('/weather2', function(req, res, next) {
  res.render('weather2', { title: 'Weather Two' });
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
router.get('/tour', function(req, res, next) {
  res.render('tour', { title: 'Indonesian Tribes' });
});

/* GET deny page. */
router.get('/tribes', function(req, res, next) {
  res.render('tribes', { title: 'Visit Indonesia' });
});

module.exports = router;

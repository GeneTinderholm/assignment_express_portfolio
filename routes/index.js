var express = require('express');
var router = express.Router();
const {Project, projectArray} = require('./projectArray.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projectArray: projectArray });
});

module.exports = router;

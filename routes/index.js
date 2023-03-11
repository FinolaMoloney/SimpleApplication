var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/math/add");
  res.render('index', { title: "Simple Application" });
});


module.exports = router;

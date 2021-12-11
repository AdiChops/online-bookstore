var express = require('express');
var router = express.Router();

/* GET publishers page. */
router.get('/', function(req, res, next) {
  res.render('publishers', { title: 'Publishers' });
});

router.get('/add', function(req, res, next){
  let id = req.params.id;
  res.render('add-publisher');
})

module.exports = router;
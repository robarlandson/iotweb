var express = require('express');
var router = express.Router();

router.post('/:state', function (req, res, next) {
  console.log(req.params.state);
  res.send(req.params.state);
});

router.get('/', function (req, res, next) {
  res.send("1");
});

module.exports = router;
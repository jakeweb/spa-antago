var express = require('express');
var app = express();
var router = require('./router');

app.use(express.static('./frontend'));

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
router.init(app);
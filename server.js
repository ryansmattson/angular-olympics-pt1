var express = require('express');
var path = require('path');
var app = express();
var index = require('./routers/index.js');
var router = require('./routers/olympic.js');

app.use(express.static('public'));

app.use('/', index);
app.use('/olympic', router);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ', port)
});

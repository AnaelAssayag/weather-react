var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send("Hey, hello from the server!");
  });

app.use(express.static('public'));

// app.use(express.static(__dirname + '/node_modules'));

app.listen(3001);


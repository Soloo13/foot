var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var request = require("request");

  request({
    uri: "http://api.football-data.org/v1/soccerseasons",
    method: "GET",
  },
  function(error, response, body) {
    console.log(body);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(body);
  });
});

app.get('/seasons', function(req, res) {
  res.send('seasons');
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});


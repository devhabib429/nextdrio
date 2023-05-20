var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello world! NextDrio");
});

app.listen(5000);
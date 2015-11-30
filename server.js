var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000; 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');
var db = mongoose.connection;
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
//app.get("/test", function(req, res) {
//    res.send({title : "Test Json"});
//});

require("./public/assignment/server/app.js")(app, mongoose, db);

app.listen(port, ipaddress);
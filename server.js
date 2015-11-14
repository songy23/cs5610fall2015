var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000; 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.get("/test", function(req, res) {
    res.send({title : "Test Json"});
});


require("./public/assignment/server/app.js")(app);

app.listen(port, ipaddress);
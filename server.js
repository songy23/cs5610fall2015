var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000; 
app.listen(port, ipaddress);

app.get("/test", function(req, res) {
    res.send({title : "Test Json"});
});

/*
require("./public/assignment/server/app.js")(app);
require("./public/assignment/server/models/user.model.js")(app);
require("./public/assignment/server/models/form.model.js")(app);
require("./public/assignment/server/services/form.service.js")(app);
require("./public/assignment/server/services/user.service.js")(app);
require("./public/assignment/server/services/field.service.js")(app);
*/
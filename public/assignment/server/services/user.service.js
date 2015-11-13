module.exports = function(app, model, db) {
    
    api = require("../models/user.model.js");
    var users = api.findAllUser;
    
    app.post('/api/assignment/user', function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        users.push(newUser);
        res.json(users);
    });
    
    app.get('/api/assignment/user', function (req, res) {
        res.jsonp(users);
    });
    
    app.get('/api/assignment/user/:id', function (req, res) {
        var userId = req.params.userId;
        var user_found = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == userId) {
                user_found = users[i];
            }
        }
        res.jsonp(user_found);
    });
    
    app.get('/api/assignment/user?username=username', function (req, res) {
        var username = req.params.username;
        var user_found = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                user_found = users[i];
            }
        }
        res.jsonp(user_found);
    });
    
    app.get('/api/assignment/user?username=username&password=password', function (req, res) {
        var username = req.params.username;
        var password = req.params.password;
        var user_found = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username && users[i].password == password) {
                user_found = users[i];
            }
        }
        res.jsonp(user_found);
    });
    
    app.put('/api/assignment/user/:id', function (req, res) {
        var id = req.params.id;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i] = req.body;
            }
        }
        res.json(users);
    });
    
    app.delete('/api/assignment/user/:id', function (req, res) {
        var id = req.params.id;
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
        res.json(users);
    });
};

/*

POST /api/assignment/user
creates a new user embedded in the body of the request, and responds with an array of all users
GET /api/assignment/user
responds with an array of all users
GET /api/assignment/user/:id
responds with a single user whose id property is equal to the id path parameter
GET /api/assignment/user?username=username
responds with a single user whose username property is equal to the username path parameter
GET /api/assignment/user?username=alice&password=wonderland
responds with a single user whose username property is equal to the username path parameter and its password is equal to the password path parameter
PUT /api/assignment/user/:id
updates an existing user whose id property is equal to the id path parameter. The new properties are set to the values in the user object embedded in the HTTP request. Responds with an array of all users
DELETE /api/assignment/user/:id
removes an existing user whose id property is equal to the id path parameter. Responds with an array of all users


*/
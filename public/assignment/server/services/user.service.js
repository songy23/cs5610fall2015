module.exports = function(app, model) {
    
    app.post('/api/assignment/user', function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        res.json(model.createUser(newUser));
    });
    
    app.get('/api/assignment/user', function (req, res) {
        var username = req.query.username;
        var password = req.query.password;
        if (password != null && username != null) {
            var credential = {
                username : username,
                password : password
            };
            var user_found = model.findUserByCredentials(credential);
            res.jsonp(user_found);
        } else if (username != null) {
            var user_found = model.findUserByUsername(username);
            res.jsonp(user_found);
        } else {
            res.jsonp(model.findAllUser());
        }
    });
    
    app.get('/api/assignment/user/:id', function (req, res) {
        var userId = req.params.id;
        var user_found = model.findUserById(userId);
        res.jsonp(user_found);
    });
    
    app.put('/api/assignment/user/:id', function (req, res) {
        var id = req.params.id;
        var updated_user = req.body;
        res.json(model.updateUser(id, updated_user));
    });
    
    app.delete('/api/assignment/user/:id', function (req, res) {
        var id = req.params.id;
        model.deleteUser(id);
        res.json(model.findAllUser());
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
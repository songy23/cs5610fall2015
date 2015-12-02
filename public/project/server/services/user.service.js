module.exports = function(app, model) {
    
    app.post('/api/project/user', function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        model.createUser(newUser).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.get('/api/project/user', function (req, res) {
        var username = req.query.username;
        var password = req.query.password;
        if (password != null && username != null) {
            var credential = {
                username : username,
                password : password
            };
            console.log(credential);
            model.findUserByCredentials(credential).then(function(result) {
               res.jsonp(result); 
            });
        } else if (username != null) {
            model.findUserByUsername(username).then(function(result) {
               res.jsonp(result); 
            });
        } else {
            model.findAllUser().then(function(results) {
                res.jsonp(results);
            });
        }
    });
    
    app.get('/api/project/user/:id', function (req, res) {
        var userId = req.params.id;
        model.findUserById(userId).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.put('/api/project/user/:id', function (req, res) {
        var id = req.params.id;
        var updated_user = req.body;
        model.updateUser(id, updated_user).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.delete('/api/project/user/:id', function (req, res) {
        var id = req.params.id;
        model.deleteUser(id);
        model.findAllUser().then(function(result) {
            res.jsonp(result); 
        });
    });
};
var q = require("q");
module.exports = function(app, mongoose, db) {
    var UserSchema = require("./user.schema.js")(app, mongoose);
    var UserModel = mongoose.model("user", UserSchema);

    var api = {
        createUser : createUser,
        findAllUser : findAllUser,
        findUserById : findUserById,
        updateUser : updateUser,
        deleteUser : deleteUser,
        findUserByUsername : findUserByUsername,
        findUserByCredentials : findUserByCredentials
    };
    
    
    function createUser(newUser) {
        var deferred = q.defer();
        UserModel.create(newUser, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findAllUser() {
        var deferred = q.defer();
        UserModel.find({}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findUserById(id) {
        var deferred = q.defer();
        UserModel.find({_id : id}, function(err, results) {
            if (results.length != 0) {
                deferred.resolve(results[0]);
            } else {
                deferred.resolve(null);
            }
        });
        return deferred.promise;
    }
    
    function updateUser(id, newUser) {
        var deferred = q.defer();
        UserModel.update(
            {_id : id}, 
            {
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                username : newUser.username,
                password : newUser.password,
            },
            function(err, results) {
                if (results.length != 0) {
                    deferred.resolve(results[0]);
                } else {
                    deferred.resolve(null);
                }
            });
        return deferred.promise;
    }
    
    function deleteUser(id) {
        var deferred = q.defer();
        UserModel.remove({_id : id}, function(err, results) {
            deferred.resolve(results[0]);
        });
        return deferred.promise;
    }
    
    function findUserByUsername(username) {
        var deferred = q.defer();
        UserModel.find({username : username}, function(err, results) {
            if (results.length != 0) {
                deferred.resolve(results[0]);
            } else {
                deferred.resolve(null);
            }
        });
        return deferred.promise;
    }
    
    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.find({
            username : credentials.username,
            password : credentials.password
        }, function(err, results) {
            console.log(results);
            if (results.length != 0) {
                deferred.resolve(results[0]);
            } else {
                deferred.resolve(null);
            }
        });
        return deferred.promise;
    }
    
    return api;
};
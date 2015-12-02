var q = require("q");
module.exports = function(app, mongoose, db) {
    var UserSchema = require("./user.schema.js")(app, mongoose);
    var UserModel = mongoose.model("project.user", UserSchema);

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
        UserModel.findOne({_id : id}, function(err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    function updateUser(id, newUser) {
        var deferred = q.defer();
        UserModel.update(
            {_id : id}, 
            {$set : {
                        firstName : newUser.firstName,
                        lastName : newUser.lastName,
                        username : newUser.username,
                        password : newUser.password,
                        email : newUser.email
                    }
            },
            function(err, result) {
                UserModel.findOne({_id : id}, function(err, result) {
                    deferred.resolve(result);
                });
            });
        return deferred.promise;
    }
    
    function deleteUser(id) {
        var deferred = q.defer();
        UserModel.remove({_id : id}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findUserByUsername(username) {
        var deferred = q.defer();
        UserModel.findOne({username : username}, function(err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.findOne({
            username : credentials.username,
            password : credentials.password
        }, function(err, result) {
            console.log(result);
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    return api;
};
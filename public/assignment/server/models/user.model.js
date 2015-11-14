var users = require("./user.mock.json");

module.exports = function(app) {

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
        var guid = Guid.create();
        var user_created = {
            "id" : guid, 
            "firstName" : newUser.firstName, 	
            "lastName" : newUser.lastName,	
            "username" : newUser.username, 	
            "password" : newUser.password
        };
        users.push(user_created);
        return user_created;
    }
    
    function findAllUser() {
        return users;
    }
    
    function findUserById(id) {
        var i = 0;
        for (i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return users[i];
            } 
        }
        return null;
    }
    
    function updateUser(id, newUser) {
        var i = 0;
        for (i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].username = newUser.username;
                users[i].password = newUser.password;
                users[i].firstName = newUser.firstName;
                users[i].lastName = newUser.lastName;
                return users[i];
            } 
        }
        return null;
    }
    
    function deleteUser(id) {
        var i = 0;
        for (i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users.splice(i, 1);
            } 
        }
    }
    
    function findUserByUsername(username) {
        var i = 0;
        for (i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                return users[i];
            } 
        }
        return null;
    }
    
    function findUserByCredentials(credentials) {
        var i = 0;
        for (i = 0; i < users.length; i++) {
            if (users[i].username == credentials.username && users[i].password == credentials.password) {
                return users[i];
            } 
        }
        return null;
    }
    
    return api;
};
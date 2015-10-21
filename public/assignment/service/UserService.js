(
    angular
    .module("FormBuilderApp")
    .factory("UserService", UserService());
    
    function UserService() {
        var service = {};
        var current_users = [];
        
        service.findUserByUsernameAndPassword = function(username, password, callback) {
            var user = null;
            for (var i = 0; i < current_users.length; i++) {
                if (current_users[i].username == username && current_users[i].password == password) {
                    user = current_users[i];
                }
            }
            
            callback(user);
        }
        
        service.findAllUsers = function(callback) {
         
            callback(current_users);
        }
        
        service.createUser function(user, callback) {
        
            var newUser = {
                userId : ,
                username : user.username,
                password : user.password
            };
            current_users.push(newUser);
            callback(newUser);
        }
        
        service.deleteUserById = function(userId, callback) {
        
            for (var i = 0; i < current_users.length; i++) {
                if (current_users[i].userId == userId) {
                    current_users.splice(i, 1);
                    break;
                }
            }   
                 
            callback(current_users);
        }
    
        service.updateUser = function(userId, user, callback) {
            
            var updated_user = null;
            callback(updated_user);
        }
        
        return service;
    }
) ();
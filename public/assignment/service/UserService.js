(
    angular
    .module("FormBuilderApp")
    .factory("UserService", UserService);
    
    function UserService() {
        var service = {
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser
        };
        var current_users = [];
        
        function findUserByUsernameAndPassword(username, password, callback) {
            var user = null;
            for (var i = 0; i < current_users.length; i++) {
                if (current_users[i].username == username && current_users[i].password == password) {
                    user = current_users[i];
                }
            }
            
            $http.success(callback);
            return user;
        }
        
        function findAllUsers(callback) {
         
            $http.success(callback);
            return current_users;
        }
        
        function createUser(user, callback) {
        
            var newUser = {
                userId : Guid.create(),
                username : user.username,
                password : user.password,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email
            };
            current_users.push(newUser);
            $http.success(callback);
        }
        
        function deleteUserById(userId, callback) {
            for (var i = 0; i < current_users.length; i++) {
                if (current_users[i].userId == userId) {
                    current_users.splice(i, 1);
                    break;
                }
            }   
            return current_users;
            $http.success(callback);
        }
    
        function updateUser(userId, user, callback) {
            
            for (var i = 0; i < current_users.length; i++) {
                if (current_users[i].userId == userId) {
                    current_users[i].username = user.username;
                    current_users[i].password = user.password;
                    current_users[i].firstName = user.firstName;
                    current_users[i].lastName = user.lastName;
                    current_users[i].email = user.email;
                }
            }
            
            return current_users;
            $http.success(callback);
        }
        
        return service;
    }
) ();
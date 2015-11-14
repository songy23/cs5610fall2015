(function() {
    angular
    .module("FormBuilderApp")
    .factory("UserService", UserService);
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    
    function UserService($http, $q) {
        var service = {
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser
        };
        
        function findUserByUsernameAndPassword(username, password) {
            var deferred = $q.defer();
            
            $http.get('/api/assignment/user?username=' + username + '&password=' + password)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findAllUsers() {
            var deferred = $q.defer();
            
            $http.get('/api/assignment/user')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function createUser(user) {
            var deferred = $q.defer();
            var newUser = {
                username : user.username,
                password : user.password,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email
            };
            $http.post('/api/assignment/user', newUser)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteUserById(userId) {
            var deferred = $q.defer();
            $http.delete('/api/assignment/user/' + userId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    
        function updateUser(userId, user) {
            var deferred = $q.defer();
            $http.put('/api/assignment/user/' + userId, user)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        return service;
    }
}) ();
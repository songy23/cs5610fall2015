(function() {
    angular
    .module("FormBuilderApp")
    .factory("UserService", UserService);
    
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
        
        function deleteUserById(id) {
            var deferred = $q.defer();
            $http.delete('/api/assignment/user/' + id)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    
        function updateUser(id, user) {
            var deferred = $q.defer();
            $http.put('/api/assignment/user/' + id, user)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        return service;
    }
}) ();
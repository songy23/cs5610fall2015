(function() {
    angular
    .module("ReadingFun")
    .factory("UserService", UserService);
    
    function UserService($http, $q) {
        var service = {
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findUserByUsername : findUserByUsername,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser,
            updateLastLogIn : updateLastLogIn
        };
        
        function findUserByUsernameAndPassword(username, password) {
            var deferred = $q.defer();
            
            $http.get('/api/project/user?username=' + username + '&password=' + password)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findUserByUsername(username) {
            var deferred = $q.defer();
            
            $http.get('/api/project/user?username=' + username)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findAllUsers() {
            var deferred = $q.defer();
            
            $http.get('/api/project/user')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function createUser(user) {
            var deferred = $q.defer();
            $http.post('/api/project/user', user)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteUserById(id) {
            var deferred = $q.defer();
            $http.delete('/api/project/user/' + id)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    
        function updateUser(id, user) {
            var deferred = $q.defer();
            $http.put('/api/project/user/' + id, user)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function updateLastLogIn(login, user) {
            var deferred = $q.defer();
            var newUser = {
                firstName : user.firstName,
                lastName : user.lastName,
                username : user.username,
                password : user.password,
                email : user.email,
                dob : user.dob,
                address : user.address,
                orders : user.orders,
                isAdmin : user.isAdmin,
                follow : user.follow,
                lastLogIn : login
            };
            $http.put('/api/project/user/' + user._id, newUser)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        return service;
    }
}) ();
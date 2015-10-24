(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.register = function() {
            var new_user = {
                username : $scope.username,
                password : $scope.password,
                firstName : "",
                lastName : "",
                email : $scope.email
            }
            
            UserService.createUser(new_user, callback);
            $scope.$location = "/profile";
            
            $rootScope.user = new_user;
        }
        
        function callback(users) {
            console.log(users.length);
        }
    }
}) ();
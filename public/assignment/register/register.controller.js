(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.register = function(new_user) {
            UserService.createUser(new_user, callback);
            $scope.$location = "#/profile";
            
            $rootScope.user = new_user;
        }
        
        function callback(users) {
            return users;
        }
    }
}) ();
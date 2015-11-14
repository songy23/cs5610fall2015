(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.login = function() {
            UserService.findUserByUsernameAndPassword($scope.username, $scope.password).then(function(response) {
                if (response != null) {
                    console.log("Log in successfully"); 
                    $rootScope.user = response;
                    $location.url("/profile");
                } 
            });
        }
    }
}) ();
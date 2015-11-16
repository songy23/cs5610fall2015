(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $rootScope.form = null;
        
        $scope.login = function() {
            UserService.findUserByUsernameAndPassword($scope.username, $scope.password).then(function(response) {
                if (response != null) {
                    alert("Log in successfully");
                    console.log(response.id + "  " + response.username); 
                    $rootScope.user = response;
                    $location.url("/profile");
                } else {
                    alert("Username and Password don't match!");
                }
            });
        }
    }
}) ();
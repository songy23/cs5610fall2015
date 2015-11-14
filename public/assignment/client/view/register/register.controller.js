(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.register = function() {
            if ($scope.password == $scope.passwordVerify) {
                var new_user = {
                    username : $scope.username,
                    password : $scope.password,
                    firstName : "",
                    lastName : "",
                    email : $scope.email
                };

                UserService.createUser(new_user).then(function(response) {
                    alert("Register successfully");
                    console.log(response.id + "  " + response.username);
                    $rootScope.user = response;
                });
                $location.url("/profile");
            } else {
                alert("Password don't match!");
            }
        }
    }
}) ();
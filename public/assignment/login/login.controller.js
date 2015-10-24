(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        $scope.login = function() {
            UserService.findUserByUsernameAndPassword($scope.username, $scope.password, callback);
            
            $scope.$location = "#/profile";  
            $rootScope.user = $scope.user;
        }
        
        
        function callback(user) {
            console.log("success");
        }
    }
}) ();
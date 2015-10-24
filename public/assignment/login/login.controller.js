(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        var u = null;
        $scope.login = function(user) {
            
            UserService.findUserByUsernameAndPassword(user.username, user.password, callback);
            
            $scope.$location = "#/profile";  
            $rootScope.user = $scope.user;
        }
        
        
        function callback(user) {
            u = user;
        }
    }
}) ();
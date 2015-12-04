(function() {
    angular
        .module("ReadingFun")
        .controller("HeaderController", HeaderController);
    
    function HeaderController($scope, $location, $rootScope) {
        $scope.login = function() {
            if ($rootScope.user == null) {
//                $location.path("#/login");
            } else {
                alert("You have already logged in!");
            }
        };
        
        $scope.logout = function() {
            if ($rootScope.user == null) {
                alert("You haven't logged in!");
            } else {
                alert("User " + $rootScope.user.username + " log out");
                $rootScope.user = null;
            }
        };
    }
}) ();
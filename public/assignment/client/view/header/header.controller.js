(function() {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
    
    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.user = {
            username : "UserName"
        };
        if ($rootScope.user != null) {
            $scope.user = $rootScope.user;
        }
        
        $scope.logout = function() {
            alert("User " + $rootScope.user.username + " log out");
            $rootScope.user = null;
        }
    }
}) ();
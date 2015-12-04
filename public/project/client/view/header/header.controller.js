(function() {
    angular
        .module("ReadingFun")
        .controller("HeaderController", HeaderController);
    
    function HeaderController($scope, $location, $rootScope) {
        $scope.user = {
            username : "Visitor"
        };
        if ($rootScope.user != null) {
            $scope.user = $rootScope.user;
        }
        
        $scope.logout = function() {
            alert("User " + $rootScope.user.username + " log out");
            $rootScope.user = null;
            $scope.user = null;
        };
    }
}) ();
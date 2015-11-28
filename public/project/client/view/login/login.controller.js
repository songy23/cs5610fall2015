(function() {
    angular
        .module("ReadingFun")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
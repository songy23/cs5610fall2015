(function() {
    angular
        .module("ReadingFun")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
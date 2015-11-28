(function() {
    angular
        .module("ReadingFun")
        .controller("HeaderController", HeaderController);
    
    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
(function() {
    angular
        .module("ReadingFun")
        .controller("HomeController", HomeController);
    
    function HomeController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
(function() {
    angular
        .module("ReadingFun")
        .controller("ReviewController", ReviewController);
    
    function ReviewController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
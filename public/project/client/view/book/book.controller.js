(function() {
    angular
        .module("ReadingFun")
        .controller("BookController", BookController);
    
    function BookController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.book = $rootScope.book;
    }
}) ();
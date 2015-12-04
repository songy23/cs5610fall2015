(function() {
    angular
        .module("ReadingFun")
        .controller("OrderController", OrderController);
    
    function OrderController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
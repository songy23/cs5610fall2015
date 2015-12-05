(function() {
    angular
        .module("ReadingFun")
        .controller("OrderController", OrderController);
    
    function OrderController($location, $rootScope) {
        var orderModel = this;
        
        orderModel.$location = $location;
    }
}) ();
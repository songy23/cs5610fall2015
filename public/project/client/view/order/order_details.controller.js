(function() {
    angular
        .module("ReadingFun")
        .controller("OrderController", OrderController);
    
    function OrderController($location, $rootScope, $routeParams, OrderService) {
        var orderModel = this;
        var userId = $routeParams.userId;
        var orderId = $routeParams.orderId;
        orderModel.$location = $location;
        orderModel.order = $rootScope.order;
        
        if (orderModel.order == null)
            OrderService.findOrderById(orderId, userId).then(function(response) {
                orderModel.order = response;
            });
    }
}) ();
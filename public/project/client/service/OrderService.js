(function() {
    angular.module("ReadingFun")
           .factory("OrderService", OrderService);
    
    function OrderService($http, $q) {
        var service = {
            findOrderById : findOrderById,
            findOrderByTitle : findOrderByTitle,
            findAllOrders : findAllOrders,
            findOrderForUser : findOrderForUser
        };
        
        function findOrderById(bookId) {
            
        }
        
        function findOrderByTitle(title) {
            
        }
        
        function findAllOrders() {
            
        }
        
        function findOrderForUser(userId) {
            
        }
        
        return service;
    }
})();
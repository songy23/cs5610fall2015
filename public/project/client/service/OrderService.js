(function() {
    angular.module("ReadingFun")
           .factory("OrderService", OrderService);
    
    function OrderService($http, $q) {
        var service = {
            findOrderById : findOrderById,
            createOrderForUser : createOrderForUser,
            deleteOrder : deleteOrder
        };
        
        function findOrderById(orderId, userId) {
            var deferred = $q.defer();
            $http.get('/api/project/user/' + userId + '/order/' + orderId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function createOrderForUser(newOrder, userId) {
            var deferred = $q.defer();
            $http.post('/api/project/user/' + userId + '/order', newOrder)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteOrder(orderId, userId) {
            var deferred = $q.defer();
            $http.delete('/api/project/user/' + userId + '/order/' + orderId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        return service;
    }
})();
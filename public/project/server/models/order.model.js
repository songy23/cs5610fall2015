var q = require("q");
module.exports = function(app, mongoose, db) {
    var OrderSchema = require("./order.schema.js")(app, mongoose);
    var OrderModel = mongoose.model("project.order", OrderSchema);
    
    var api = {
        createOrderForUser : createOrderForUser,
        findAllOrder : findAllOrder,
        findOrderById : findOrderById,
        findOrderForUser : findOrderForUser,
        deleteOrder : deleteOrder
    };
    
    function createOrderForUser(userId, newOrder) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function findAllOrder() {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function findOrderById(reviewId) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function findOrderForUser(userId) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function deleteOrder(reviewId) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    return api;
};
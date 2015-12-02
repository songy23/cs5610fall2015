var q = require("q");
module.exports = function(app, mongoose, db) {
    var ReviewSchema = require("./review.schema.js")(app, mongoose);
    var ReviewModel = mongoose.model("project.review", ReviewSchema);
    
    var api = {
        createReviewForUser : createReviewForUser,
        findAllReview : findAllReview,
        findReviewById : findReviewById,
        findReviewForUser : findReviewForUser,
        deleteReview : deleteReview
    };
    
    function createReviewForUser(userId, newReview) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function findAllReview() {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function findReviewById(reviewId) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function findReviewForUser(userId) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    function deleteReview(reviewId) {
        var deferred = q.defer();
        
        return deferred.promise;
    }
    
    return api;
    
};
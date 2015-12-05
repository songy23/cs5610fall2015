var q = require("q");
module.exports = function(app, mongoose, db) {
    var ReviewSchema = require("./review.schema.js")(app, mongoose);
    var ReviewModel = mongoose.model("project.review", ReviewSchema);
    
    var api = {
        createReview : createReview,
        findAllReview : findAllReview,
        findReviewById : findReviewById,
        findReviewForUser : findReviewForUser,
        findReviewForBook : findReviewForBook,
        deleteReview : deleteReview,
        updateReview : updateReview
    };
    
    function createReview(newReview) {
        var deferred = q.defer();
        ReviewModel.create(newReview, function(err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    function findAllReview() {
        var deferred = q.defer();
        ReviewModel.find({}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findReviewById(reviewId) {
        var deferred = q.defer();
        ReviewModel.find({_id : reviewId}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findReviewForUser(username) {
        var deferred = q.defer();
        ReviewModel.find({username : username}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findReviewForBook(isbn) {
        var deferred = q.defer();
        ReviewModel.find({isbn : isbn}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function deleteReview(reviewId) {
        var deferred = q.defer();
        ReviewModel.remove({_id : id}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function updateReview(reviewId, updated_review) {
        var deferred = q.defer();
        ReviewModel.update(
            {_id : id}, 
            {$set : updated_review},
            function(err, results) {
                ReviewModel.find({_id : reviewId}, function(err, results) {
                    deferred.resolve(results);
                });
            });
        return deferred.promise;
    }
    
    return api;
    
};
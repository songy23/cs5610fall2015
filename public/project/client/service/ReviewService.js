(function() {
    angular.module("ReadingFun")
           .factory("ReviewService", ReviewService);
    
    function ReviewService($http, $q) {
        var service = {
            findReviewById : findReviewById,
            findAllReviews : findAllReviews,
            findReviewForUser : findReviewForUser,
            findReviewForBook : findReviewForBook,
            createReview : createReview,
            updateReview : updateReview,
            deleteReviewForUser : deleteReviewForUser,
            deleteReview : deleteReview
        };
        
        function findReviewById(reviewId) {
            var deferred = $q.defer();
            $http.get('/api/project/review/' + reviewId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findAllReviews() {
            var deferred = $q.defer();
            $http.get('/api/project/review/')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findReviewForUser(userId) {
            var deferred = $q.defer();
            $http.get('/api/project/user/' + userId + '/review')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findReviewForBook(isbn) {
            var deferred = $q.defer();
            $http.get('/api/project/book/isbn/' + isbn + '/review')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function createReview(newReview) {
            var deferred = $q.defer();
            $http.post('/api/project/review', newReview)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function updateReview(reviewId, updatedReview) {
            var deferred = $q.defer();
            $http.put('/api/project/review' + reviewId, updatedReview)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteReviewForUser(userId, reviewId) {
            var deferred = $q.defer();
            $http.delete('/api/project/user/' + userId + '/review/' + reviewId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteReview(reviewId) {
            // Admin privilege
            var deferred = $q.defer();
            $http.delete('/api/project/review/' + reviewId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        return service;
    }
})();
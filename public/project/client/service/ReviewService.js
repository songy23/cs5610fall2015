(function() {
    angular.module("ReadingFun")
           .factory("ReviewService", ReviewService);
    
    function ReviewService($http, $q) {
        var service = {
            findReviewById : findReviewById,
            findReviewByTitle : findReviewByTitle,
            findAllReviews : findAllReviews,
            findReviewForUser : findReviewForUser
        };
        
        function findReviewById(bookId) {
            
        }
        
        function findReviewByTitle(title) {
            
        }
        
        function findAllReviews() {
            
        }
        
        function findReviewForUser(userId) {
            
        }
        
        return service;
    }
})();
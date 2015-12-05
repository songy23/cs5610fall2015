(function() {
    angular
        .module("ReadingFun")
        .controller("ReviewController", ReviewController);
    
    function ReviewController($location, $rootScope, BookService, ReviewService) {
        var reviewModel = this;
        
        reviewModel.$location = $location;
        reviewModel.review = $rootScope.review;
        reviewModel.book = $rootScope.book;
    }
}) ();
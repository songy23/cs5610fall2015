(function() {
    angular
        .module("ReadingFun")
        .controller("ReviewController", ReviewController);
    
    function ReviewController($location, $rootScope, BookService, ReviewService, UserService) {
        var reviewModel = this;
        
        reviewModel.$location = $location;
        reviewModel.review = $rootScope.review;
        reviewModel.book = $rootScope.book;
        
        reviewModel.redirect = function() {
            if ($rootScope.user == null) {
                alert("You need to log in to view other's profile");
                return;
            }
            UserService.findUserByUsername(reviewModel.review.username).then(function(response) {
                $rootScope.profile_user = response;
                $location.url("/guestprofile");
            });
        }
    }
}) ();
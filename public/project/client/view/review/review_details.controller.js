(function() {
    angular
        .module("ReadingFun")
        .controller("ReviewController", ReviewController);
    
    function ReviewController($location, $rootScope, $routeParams, BookService, ReviewService, UserService) {
        var reviewModel = this;
        var reviewId = $routeParams.reviewId;
        reviewModel.$location = $location;
        reviewModel.review = $rootScope.review;
        reviewModel.book = $rootScope.book;
        
        if (reviewModel.review == null) {
            ReviewService.findReviewById(reviewId).then(function(response) {
                reviewModel.review = response;
                $("#title").append(reviewModel.review.title);
                for (var j = 0; j < response.rating; j++) {
                    $("#rating").append('<span class="glyphicon glyphicon-star"></span>')
                }
                if (reviewModel.book == null) {
                    BookService.findLocalBookByISBN(reviewModel.review.isbn).then(function(response) {
                        reviewModel.book = response;
                        $rootScope.book = response;
                    });
                }
            });
        } else {
            $("#title").append(reviewModel.review.title);
            for (var j = 0; j < reviewModel.review.rating; j++) {
                    $("#rating").append('<span class="glyphicon glyphicon-star"></span>')
                }
        }
        
        
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
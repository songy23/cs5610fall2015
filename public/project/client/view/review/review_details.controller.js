(function() {
    angular
        .module("ReadingFun")
        .controller("ReviewController", ReviewController);
    
    function ReviewController($location, $rootScope, BookService, ReviewService, UserService) {
        var reviewModel = this;
        
        reviewModel.$location = $location;
        reviewModel.review = $rootScope.review;
        reviewModel.book = $rootScope.book;
        
        if (reviewModel.book == null) {
            BookService.findBookByISBN(reviewModel.review.isbn).then(function(response) {
                $.ajax({
                    url: response,
                    dataType: "json",
                    success: setBook
                });
            });
        }
        
        function setBook(bookJSON) {
            reviewModel.book = bookJSON.docs[0];
            $rootScope.book = bookJSON.docs[0];
            $("#title").append(reviewModel.book.title);
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
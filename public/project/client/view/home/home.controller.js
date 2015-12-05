(function() {
    angular
        .module("ReadingFun")
        .controller("HomeController", HomeController);
    
    function HomeController($location, $rootScope, UserService, ReviewService, BookService) {
        var homeModel = this;
        homeModel.$location = $location;
        homeModel.userCount = 0;
        homeModel.reviewCount = 0;
        homeModel.books = [];
        var books = [];
        var coverUrl = "http://covers.openlibrary.org/b/isbn/";
        
        UserService.findAllUsers().then(function(response) {
            homeModel.userCount = response.length;
        });
        
        ReviewService.findAllReviews().then(function(reviews) {
            homeModel.reviewCount = reviews.length;
            var displayCnt = Math.min(25, reviews.length);
            for (var i = 0; i < displayCnt; i++) {
                BookService.findBookByISBN(reviews[i].isbn).then(function(response) {
                    retrieveaJSON(response);
                });
            }
        });
        
        function retrieveaJSON(response) {
            $.ajax({
                url: response,
                dataType: "json",
                success: setScope
            });
        }
        
        function setScope(bookJSON) {
            var cover = coverUrl + bookJSON.docs[0].isbn[0] + "-S.jpg";
            bookJSON.docs[0].cover = cover;
            books.push(bookJSON.docs[0]);
        }
        
        homeModel.display = function() {
            homeModel.books = books;
        }
        
        homeModel.redirect = function($index) {
            $rootScope.book = homeModel.books[$index];
            $location.url("/book/" + $rootScope.book.isbn[0]);
        }
    }
}) ();
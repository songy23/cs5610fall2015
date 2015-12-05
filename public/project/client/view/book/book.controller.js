(function() {
    angular
        .module("ReadingFun")
        .controller("BookController", BookController);
    
    function BookController($location, $rootScope, ReviewService) {
        var bookModel = this;
        
        bookModel.$location = $location;
        bookModel.book = $rootScope.book;
        bookModel.reviews = [];
        bookModel.coverUrl = "http://covers.openlibrary.org/b/isbn/" + bookModel.book.isbn[0] + "-M.jpg";
        
        ReviewService.findReviewForBook(bookModel.book.isbn[0]).then(function(response){
           bookModel.reviews = response; 
        });
    }
}) ();
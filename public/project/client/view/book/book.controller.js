(function() {
    angular
        .module("ReadingFun")
        .controller("BookController", BookController);
    
    function BookController($location, $rootScope, ReviewService, OrderService, UserService) {
        var bookModel = this;
        
        bookModel.$location = $location;
        bookModel.book = $rootScope.book;
        bookModel.reviews = [];
        bookModel.coverUrl = "http://covers.openlibrary.org/b/isbn/" + bookModel.book.isbn[0] + "-M.jpg";
        
        bookModel.createOrder = function() {
            if ($rootScope.user == null) {
                alert("Please log in first");
            } else {
                if (bookModel.quantity == null || bookModel.quantity <= 0) {
                    alert("Please enter a valid quantity");
                    return;
                }
                newOrder = {
                    userId : $rootScope.user._id,
                    bookTitle : bookModel.book.title,
                    date : new Date(),
                    price : 10,
                    quantity : bookModel.quantity
                };
                
                OrderService.createOrderForUser(newOrder).then(function(response) {
                    alert("You have bought this book!");
                    $rootScope.user.orders.push(response);
                });
            }
        };
        
        ReviewService.findReviewForBook(bookModel.book.isbn[0]).then(function(response){
            bookModel.reviews = response; 
        });
        
        bookModel.postReview = function() {
            if ($rootScope.user == null) {
                alert("Please log in first");
            } else {
                newReview = {
                    username : $rootScope.user.username,
                    isbn : bookModel.book.isbn[0],
                    date : new Date(),
                    content : bookModel.content,
                    rating : bookModel.rating
                };
                
                ReviewService.createReview(newReview).then(function(response) {
                    bookModel.reviews.push(response);
                });
            }
        };
        
        bookModel.redirect = function($index, destination) {
            $rootScope.review = bookModel.reviews[$index];
            if (destination == 'review') {
                $location.url("/review/" + bookModel.reviews[$index]._id);
            } else {
                if ($rootScope.user == null) {
                    alert("You need to log in to view other's profile");
                    return;
                }
                UserService.findUserByUsername($rootScope.review.username).then(function(response) {
                    $rootScope.profile_user = response;
                    $location.url("/guestprofile");
                });
            }
        };
    }
}) ();
(function() {
    angular
        .module("ReadingFun")
        .controller("AdminController", AdminController);
    
    function AdminController($location, $rootScope, UserService, ReviewService, BookService) {
        var adminModel = this;
        
        if ($rootScope.user == null || !$rootScope.user.isAdmin) {
            alert("You are not admin");
            $location.url("/home");
        }
        
        adminModel.reviews = [];
        adminModel.users = [];
        adminModel.books = [];
        
        UserService.findAllUsers().then(function(response) {
            adminModel.users = response;
        });
        
        ReviewService.findAllReviews().then(function(response) {
            adminModel.reviews = response;
        });
        
        BookService.findAllLocalBook().then(function(response) {
            adminModel.books = response;
        });
        
        adminModel.deleteUser = function($index) {
            UserService.deleteUserById(adminModel.users[$index]._id).then(function(response) {
                console.log(response);
            });
            adminModel.users.splice($index, 1);
        };
        
        adminModel.deleteReview = function($index) {
            ReviewService.deleteReview(adminModel.reviews[$index]._id).then(function(response) {
                console.log(response);
            });
            adminModel.reviews.splice($index, 1);
        };
        
        adminModel.deleteBook= function($index) {
            BookService.deleteLocalBookByISBN(adminModel.books[$index].isbn).then(function(response) {
                console.log(response);
            });
            adminModel.books.splice($index, 1);
        };
        
        adminModel.createUser = function() {
             var new_user = {
                    username : adminModel.username,
                    password : adminModel.password,
                    firstName : "",
                    lastName : "",
                    email : "",
                    dob : new Date(),
                    address : "",
                    orders : [],
                    isAdmin : false,
                    follow : []
                };
            
            UserService.createUser(new_user).then(function(response) {
                alert("Create a new user");
                adminModel.users.push(response);
                console.log(response._id + "  " + response.username);
            });
        }
    }
}) ();
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
            for (var i = 0; i < response.length; i++) {
                if (response[i]._id != $rootScope.user._id)
                  adminModel.users.push(response[i]);
            }
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
                    follow : [],
                    lastLogIn : new Date()
                };
            
            UserService.createUser(new_user).then(function(response) {
                alert("Create a new user");
                adminModel.users.push(response);
                console.log(response._id + "  " + response.username);
            });
        }
        
        adminModel.redirect = function ($index, type) {
            if (type == 'user') {
                $rootScope.profile_user = adminModel.users[$index];
                $location.url("/guestprofile");
            } else {
                $rootScope.review = adminModel.reviews[$index];
                $location.url("/review/" + adminModel.reviews[$index]._id);
            }
        };
    }
}) ();
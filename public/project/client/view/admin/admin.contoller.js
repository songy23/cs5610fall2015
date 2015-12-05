(function() {
    angular
        .module("ReadingFun")
        .controller("AdminController", AdminController);
    
    function AdminController($location, $rootScope, UserService, ReviewService) {
        var adminModel = this;
        
        adminModel.reviews = [];
        adminModel.users = [];
        
        UserService.findAllUsers().then(function(response) {
            adminModel.users = response;
        });
        
        ReviewService.findAllReviews().then(function(response) {
            adminModel.reviews = response;
        });
        
        adminModel.deleteUser = function($index) {
            UserService.deleteUserById(adminModel.users[$index]._id).then(function(response) {
                console.log(response);
                adminModel.users.splice($index, 1);
            });
        }
        
        adminModel.deleteReview = function($index) {
            ReviewService.deleteReview(adminModel.reviews[$index]._id).then(function(response) {
                console.log(response);
                adminModel.reviews.splice($index, 1);
            });
        }
        
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
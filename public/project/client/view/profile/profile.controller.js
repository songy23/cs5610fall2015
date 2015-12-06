(function() {
    angular
        .module("ReadingFun")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $location, $rootScope, UserService, ReviewService, OrderService) {
        var profileModel = this;
        profileModel.$location = $location;
        var current_user = $rootScope.user;
        
        if (current_user == null) {
            alert("Please log in first");
            $location.url("/login");
        }
        
        profileModel.user = current_user;
        profileModel.reviews = [];
        profileModel.orders = [];
        profileModel.follow = [];
        
        if (current_user != null) {
            profileModel.orders = current_user.orders;
            ReviewService.findReviewForUser(current_user.username).then(function(response) {
                profileModel.reviews = response;
            });
            for (var i = 0; i < current_user.follow.length; i++) {
                UserService.findUserByUsername(current_user.follow[i]).then(function(response) {
                    profileModel.follow.push(response);
                });
            }
        }
        
        profileModel.update = function() {
            if (current_user != null) {
                var updated_user = {
                    username : current_user.username,
                    password : profileModel.password,
                    firstName : profileModel.firstName,
                    lastName : profileModel.lastName,
                    email : profileModel.email,
                    dob : profileModel.dob,
                    address : profileModel.address,
                    orders : current_user.orders,
                    isAdmin : current_user.isAdmin,
                    follow : current_user.follow,
                    lastLogIn : current_user.lastLogIn
                };
                
                UserService.updateUser(current_user._id, updated_user).then(function(response){
                    console.log(response._id);
                    $rootScope.user = response;
                    alert("Profile Updated");
                    $location.url("/profile");
                });
            }
        }
        
        profileModel.redirect = function($index, destination) {
            switch (destination) {
                case 'user' : 
                    UserService.findUserByUsername(profileModel.follow[$index].username).then(function(response) {
                        $rootScope.profile_user = response;
                        $location.url("/guestprofile");
                    });
                    break;
                case 'order' :
                    $rootScope.order = profileModel.orders[$index];
                    $location.url("/user/" + profileModel.user._id + "/order/" + profileModel.orders[$index]._id);
                    break;
                case 'review' :
                    ReviewService.findReviewById(profileModel.reviews[$index]._id).then(function(response) {
                        $rootScope.review = response;
                        $location.url("/review/" + profileModel.reviews[$index]._id);
                    });
                    break;
            }
        }
    }
}) ();
(function() {
    angular
        .module("ReadingFun")
        .controller("GuestProfileController", GuestProfileController);
    
    function GuestProfileController($location, $rootScope, UserService, ReviewService) {
        var guestModel = this;
        guestModel.$location = $location;
        var profile_user = $rootScope.profile_user;
        var current_user = $rootScope.user;
        guestModel.user = profile_user;
        guestModel.follow_users = [];
        
        if (current_user == null) {
            alert("You need to log in first to view other's profile");
            $location.url("/login");
        }
        
        if (profile_user != null) {
            ReviewService.findReviewForUser(profile_user.username).then(function(response) {
                guestModel.reviews = response;
            });
            
            for (var i = 0; i < profile_user.follow.length; i++) {
                UserService.findUserByUsername(profile_user.follow[i]).then(function(response) {
                    console.log(response);
                    guestModel.follow_users.push(response);
                });
            }
        }
        
        guestModel.follow = function() {
            for (var i = 0; i < current_user.follow.length; i++) {
                if (current_user.follow[i] == profile_user.username) {
                    alert("You have already followed this user");
                    return;
                }
            }
            current_user.follow.push(profile_user.username);
            UserService.updateUser(current_user._id, current_user).then(function(response) {
                $rootScope.user = current_user;
                alert("You are following this user");
            });
        };
        
        guestModel.redirect = function($index) {
            UserService.findUserByUsername(guestModel.follow_users[$index].username).then(function(response) {
                $rootScope.profile_user = response;
                $location.url("/guestprofile");
            });
        }
    }
}) ();
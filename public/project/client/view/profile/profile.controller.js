(function() {
    angular
        .module("ReadingFun")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $location, $rootScope, UserService, ReviewService) {
        var profileModel = this;
        profileModel.$location = $location;
        var current_user = $rootScope.user;
        profileModel.user = current_user;
        profileModel.reviews = [];
        profileModel.orders = [];
        
        if (current_user != null) {
            profileModel.orders = current_user.orders;
            ReviewService.findReviewForUser(current_user.username).then(function(response) {
                profileModel.reviews = response;
            });
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
    }
}) ();
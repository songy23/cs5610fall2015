(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($location, $rootScope, UserService) {
        var profileModel = this;
        profileModel.$location = $location;
        var current_user = $rootScope.user;
        profileModel.user = current_user;
        
        profileModel.update = function() {
            
            var updated_user = {
                username : profileModel.username,
                password : profileModel.password,
                firstName : profileModel.firstName,
                lastName : profileModel.lastName,
                email : profileModel.email
            }
            
            if (current_user != null) {
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
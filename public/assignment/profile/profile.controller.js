(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        var current_user = $rootScope.user;
        
        $scope.update = function() {
            
            var updated_user = {
                username : $scope.username,
                password : $scope.password,
                firstName : $scope.firstName,
                lastName : $scope.lastName,
                email : $scope.email
            }
            
            if (current_user != null) {
                var user_found = UserService.findUserByUsernameAndPassword(current_user.username, current_user.password, callback1);
                if (user_found != null) {
                    UserService.updateUser(user_found.userId, updated_user, callback2);
                }
            }
            
//            alert("Profile Updated");
        }
    }
    
    function callback1(user) {
        console.log("callback1 succeeds");
        return user;
    }
    
    function callback2(users) {
        console.log("callback2 succeeds");
        return users;
    }
    
    
}) ();
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
                var user_found = null;
                UserService.findUserByUsernameAndPassword(current_user.username, current_user.password, function(user) {
                    console.log("callback1 succeeds");
                    user_found = user;
                });
                if (user_found != null) {
                    UserService.updateUser(user_found.userId, updated_user, function (users) {
                        console.log("callback2 succeeds");
                        $scope.current_users = users;
                    });
                }
            }
            
//            alert("Profile Updated");
        }
    }
    
}) ();
(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        
        var current_user = $rootScope.user;
        
        $scope.update = function(new_user) {
            
            var user_found = UserService.findUserByUsernameAndPassword(current_user.username, current_user.password, callback1);
            UserService.updateUser(user_found.userId, new_user, callback2);
            alert("update");
        }
    }
    
    function callback1(user) {
        return user;
    }
    
    function callback2(users) {
        return users;
    }
    
    
}) ();
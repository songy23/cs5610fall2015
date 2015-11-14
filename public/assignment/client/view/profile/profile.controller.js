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
                UserService.updateUser(current_user.id, updated_user).then(function(response){
                    console.log(current_user.id);
                    alert("Profile Updated");
                });
            }
            
            $location.url("/profile");
        }
    }
    
}) ();
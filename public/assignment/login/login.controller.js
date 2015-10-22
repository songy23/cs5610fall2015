(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location) {
        $scope.$location = $location;
        
        function login(user) {
            var u = ;
            
            $scope.$location = "#/profile";
        }
    }
}) ();
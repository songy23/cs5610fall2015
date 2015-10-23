(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($scope, $location) {
        $scope.$location = $location;
        
        var user = {};
        
        
        function login() {
            var u = null;
            //$rootScope;
            $scope.$location = "#/profile";
        }
    }
}) ();
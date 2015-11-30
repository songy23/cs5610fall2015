(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    
    function LoginController($location, $rootScope, UserService) {
        var loginModel = this;
        loginModel.$location = $location;
        if ($rootScope.user != null) {
            alert("You have already logged in!");
        }
        $rootScope.form = null;
        
        loginModel.login = function() {
            UserService.findUserByUsernameAndPassword(loginModel.username, loginModel.password).then(function(response) {
                if (response != null) {
                    alert("Log in successfully");
                    console.log(response._id + "  " + response.username); 
                    $rootScope.user = response;
                    $location.url("/profile");
                } else {
                    alert("Username and Password don't match!");
                }
            });
        }
    }
}) ();
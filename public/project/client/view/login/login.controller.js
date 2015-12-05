(function() {
    angular
        .module("ReadingFun")
        .controller("LoginController", LoginController);
    
    function LoginController($location, $rootScope, UserService) {
        var loginModel = this;
        loginModel.$location = $location;
        if ($rootScope.user != null) {
            alert("You have already logged in!");
        }
        
        loginModel.login = function() {
            UserService.findUserByUsernameAndPassword(loginModel.username, loginModel.password).then(function(response) {
                if (response != null) {
                    alert("Log in successfully");
                    $rootScope.user = response;
                    UserService.updateLastLogIn(new Date(), response).then(function(response2) {
                        console.log(response2);
                    });
                    $location.url("/profile");
                } else {
                    alert("Username and Password don't match!");
                }
            });
        }
    }
}) ();
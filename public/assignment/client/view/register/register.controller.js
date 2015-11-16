(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($location, $rootScope, UserService) {
        var registerModel = this;
        registerModel.$location = $location;
        $rootScope.form = null;
        registerModel.register = function() {
            if (registerModel.password == registerModel.passwordVerify) {
                var new_user = {
                    username : registerModel.username,
                    password : registerModel.password,
                    firstName : "",
                    lastName : "",
                    email : registerModel.email
                };

                UserService.createUser(new_user).then(function(response) {
                    alert("Register successfully");
                    console.log(response.id + "  " + response.username);
                    $rootScope.user = response;
                });
                $location.url("/profile");
            } else {
                alert("Password don't match!");
            }
        }
    }
}) ();
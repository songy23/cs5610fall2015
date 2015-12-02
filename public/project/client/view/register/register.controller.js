(function() {
    angular
        .module("ReadingFun")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $location, $rootScope) {
        var registerModel = this;
        registerModel.$location = $location;
        $rootScope.form = null;
        registerModel.register = function() {
            if (registerModel.password == registerModel.passwordVerify) {
                var new_user = {
                    username : registerModel.username,
                    password : registerModel.password,
                    firstName : registerModel.firstName,
                    lastName : registerModel.lastName,
                    email : registerModel.email
                };

                UserService.createUser(new_user).then(function(response) {
                    alert("Register successfully");
                    console.log(response._id + "  " + response.username);
                    $rootScope.user = response;
//                    console.log($rootScope.user);
                    $location.url("/profile");
                });
            } else {
                alert("Password don't match!");
            }
        }
        
    }
}) ();
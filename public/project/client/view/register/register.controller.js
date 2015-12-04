(function() {
    angular
        .module("ReadingFun")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($scope, $location, $rootScope, UserService) {
        var registerModel = this;
        registerModel.$location = $location;
        registerModel.register = function() {
            if (registerModel.password == registerModel.passwordVerify) {
                UserService.findUserByUsername(registerModel.username).then(function(response) {
                    if (response != null) {
                        alert("This username has already been registered!");
                        return;
                    }
                });
                var new_user = {
                    username : registerModel.username,
                    password : registerModel.password,
                    firstName : registerModel.firstName,
                    lastName : registerModel.lastName,
                    email : registerModel.email,
                    dob : registerModel.dob,
                    address : registerModel.address,
                    orders : [],
                    isAdmin : false,
                    friends : []
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
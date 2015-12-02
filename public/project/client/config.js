(function() {
    angular
        .module("ReadingFun")
        .config(function($routeProvider){
            $routeProvider
            .when("/", {
                templateUrl: "view/home/home.view.html"
            })
            .when("/home", {
                templateUrl: "view/home/home.view.html",
                controller: "HomeController"
            })
            .when("/profile", {
                templateUrl: "view/profile/profile.view.html",
                controller: "ProfileController as profileModel"
            })
            .when("/register", {
                templateUrl: "view/register/register.view.html",
                controller: "RegisterController as registerModel"
            })
            .when("/login", {
                templateUrl: "view/login/login.view.html",
                controller: "LoginController as loginModel"
            })
            .when("/admin", {
                templateUrl: "view/admin/admin.view.html",
                controller: "AdminController"
            })
            .when("/retrieve", {
                templateUrl: "view/retrieve_pwd/retrieve_pwd.view.html",
                controller: "RetrieveController"
            })
            .otherwise({
                redirectTo: "/"
            });
        });
}) ();
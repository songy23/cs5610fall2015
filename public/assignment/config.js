(function() {
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
            .when("/", {
                templateUrl: "home/home.view.html"
            })
            .when("/profile", {
                templateUrl: "profile/profile.view.html"
            })
            .when("/register", {
                templateUrl: "register/register.view.html"
            })
            .when("/login", {
                templateUrl: "login/login.view.html"
            })
            .when("/form", {
                templateUrl: "form/form.view.html"
            })
            .when("/admin", {
                templateUrl: "admin/admin.view.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        })
}) ();
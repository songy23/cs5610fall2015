(function() {
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
            .when("/", {
                templateUrl: "view/home/home.view.html"
            })
            .when("/home", {
                templateUrl: "view/home/home.view.html"
            })
            .when("/profile", {
                templateUrl: "view/profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/register", {
                templateUrl: "view/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "view/login/login.view.html",
                controller: "LoginController"
            })
            .when("/form", {
                templateUrl: "view/form/form.view.html",
                controller: "FormController"
            })
            .when("/field", {
                templateUrl: "view/fields/field.view.html",
                controller: "FieldController"
            })
            .when("/admin", {
                templateUrl: "view/admin/admin.view.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        })
}) ();
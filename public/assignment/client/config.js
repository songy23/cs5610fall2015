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
            .when("/form", {
                templateUrl: "view/form/form.view.html",
                controller: "FormController as formModel"
            })
            .when("/user", {
                templateUrl: "view/fields/field.view.html",
                controller: "FieldController as fieldModel"
            })
            .when("/admin", {
                templateUrl: "view/admin/admin.view.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        })
}) ();
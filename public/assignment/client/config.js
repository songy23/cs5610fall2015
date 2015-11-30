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
                controller: "ProfileController",
                controllerAs: "profileModel"
            })
            .when("/register", {
                templateUrl: "view/register/register.view.html",
                controller: "RegisterController",
                controllerAs: "registerModel"
            })
            .when("/login", {
                templateUrl: "view/login/login.view.html",
                controller: "LoginController",
                controllerAs: "loginModel"
            })
            .when("/form", {
                templateUrl: "view/form/form.view.html",
                controller: "FormController",
                controllerAs: "formModel"
            })
            .when("/user", {
                templateUrl: "view/fields/field.view.html",
                controller: "FieldController",
                controllerAs: "fieldModel"
            })
            .when("/user/:userId/form/:formId/fields", {
                templateUrl: "view/fields/field.view.html",
                controller: "FieldController",
                controllerAs: "fieldModel"
            })
            .when("/form/:formId/fields", {
                templateUrl: "view/fields/field.view.html",
                controller: "FieldController",
                controllerAs: "fieldModel"
            })
            .when("/admin", {
                templateUrl: "view/admin/admin.view.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        })
}) ();
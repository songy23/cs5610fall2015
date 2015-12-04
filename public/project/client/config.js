(function() {
    angular
        .module("ReadingFun")
        .config(function($routeProvider){
            $routeProvider
            .when("/home", {
                templateUrl: "view/home/home.view.html",
                controller: "HomeController"
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
            .when("/admin", {
                templateUrl: "view/admin/admin.view.html",
                controller: "AdminController",
                controllerAs: "adminModel"
            })
            .when("/retrieve", {
                templateUrl: "view/retrieve_pwd/retrieve_pwd.view.html",
                controller: "RetrieveController",
                controllerAs: "retrieveModel"
            })
            .when("/book/:bookId", {
                templateUrl: "view/book/book_detail.view.html",
                controller: "BookController",
                controllerAs: "bookModel"
            })
            .when("/review/:reviewId", {
                templateUrl: "view/review/review_detail.view.html",
                controller: "ReviewController",
                controllerAs: "reviewModel"
            })
            .when("/user/:userId/order/:orderId", {
                templateUrl: "view/order/order_detail.view.html",
                controller: "OrderController",
                controllerAs: "orderModel"
            })
            .otherwise({
                redirectTo: "/home"
            });
        });
}) ();
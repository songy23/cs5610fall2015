(function() {
    angular
        .module("ReadingFun")
        .controller("HomeController", HomeController);
    
    function HomeController($scope, $location, $rootScope, UserService, ReviewService) {
        $scope.$location = $location;
        $scope.userCount = 0;
        $scope.reviewCount = 0;
        
        UserService.findAllUsers().then(function(response) {
            $scope.userCount = response.length;
        });
        ReviewService.findAllReviews().then(function(response) {
            $scope.reviewCount = response.length;
        });
    }
}) ();
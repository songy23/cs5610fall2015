(function() {
    angular
        .module("ReadingFun")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
}) ();
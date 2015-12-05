(function() {
    angular
        .module("ReadingFun")
        .controller("ReviewController", ReviewController);
    
    function ReviewController($location, $rootScope) {
        var reviewModel = this;
        
        reviewModel.$location = $location;
    }
}) ();
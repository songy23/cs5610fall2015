(function() {
    angular
        .module("ReadingFun")
        .controller("RetrieveController", RetrieveController);
    
    function RetrieveController($location, $rootScope, UserService) {
        var retrieveModel = this;
        retrieveModel.$location = $location;
    }
}) ();
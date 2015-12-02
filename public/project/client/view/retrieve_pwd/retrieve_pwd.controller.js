(function() {
    angular
        .module("ReadingFun")
        .controller("RetrieveController", RetrieveController);
    
    function RetrieveController($location, $rootScope, UserService) {
        var retrieveModel = this;
        retrieveModel.$location = $location;
        
        retrieveModel.retrieve = function() {
            alert("An email has been sent to the given address");
            alert("Just kidding :)");
        }
    }
}) ();
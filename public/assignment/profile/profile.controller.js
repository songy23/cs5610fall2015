(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($scope, $location) {
        $scope.$location = $location;
        
        function update(user) {
            
        }
    }
}) ();
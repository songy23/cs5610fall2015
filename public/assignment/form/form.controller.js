(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($scope, $location) {
        $scope.$location = $location;
        
        var forms = [
            { formName : "Registration Form"},
            { formName : "Contact List"},
            { formName : "To Do List"}
        ];
        
        $scope.forms = forms;
        
        $scope.addForm = function() {
            
        }
        
        $scope.updateForm = function() {
            
        }
        
        $scope.deleteForm = function(index) {
            $scope.forms.splice(index, 1);
        }
        
        $scope.selectForm = function(index) {
            
        }
    }
}) ();
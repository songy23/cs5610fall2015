(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($scope, $location, $rootScope, UserService, FormService) {
        $scope.$location = $location;
        
        var current_user = $rootScope.user;
        $scope.forms = [];
        
        if (current_user != null) {
            FormService.findAllFormsForUser(current_user.userId, function (current_forms) { $scope.forms = current_forms; });
        }
        
        
        $scope.addForm = function(newForm) {
            if (current_user != null) {
                FormService.createFormForUser(current_user.userId, newForm, function(newForm) {
                    $scope.forms.push(newForm);
                    console.log("Successfully create new form. Current forms: " + $scope.forms.length);
                });
            }
        }
        
        $scope.updateForm = function(newForm) {
            
        }
        
        $scope.deleteForm = function(index) {
            var form_to_delete_Id = $scope.forms[index].formId;
            FormService.deleteFormById(form_to_delete_Id, function(current_forms) {
                console.log("Length of current_forms: " + current_forms.length);
                $scope.forms = current_forms;
            });
        }
        
        $scope.selectForm = function(index) {
            
        }
    }
}) ();
(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($scope, $location, $rootScope, UserService, FormService) {
        $scope.$location = $location;
        $scope.forms = [];
        $rootScope.form = null;
        var current_user = $rootScope.user;
        
        if (current_user != null) {
            FormService.findAllFormsForUser(current_user.id).then(function(response) {
                $scope.forms = response; 
            });
        }
        
        $scope.addForm = function(newForm) {
            if (current_user != null) {
                var passInForm = {
                    title : newForm.title,
                    userId : current_user.id,
                    fields : []
                };
                FormService.createFormForUser(current_user.id, passInForm).then(function(response) {
                    $scope.forms.push(response); 
                });
            }
        }
        
        $scope.updateForm = function(newForm) {
            
        }
        
        $scope.deleteForm = function(index) {
            var form_to_delete_Id = $scope.forms[index].id;
            $scope.forms.splice(index, 1);
            FormService.deleteFormById(form_to_delete_Id).then(function(response) {
                console.log("Length of current_forms: " + $scope.forms.length);
            });
        }
        
        $scope.selectForm = function(index) {
            
        }
        
        $scope.jumpToField = function(form) {
            $rootScope.form = form;
        }
    }
}) ();
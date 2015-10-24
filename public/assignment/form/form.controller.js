(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($scope, $location, $rootScope, UserService, FormService) {
        $scope.$location = $location;
        
        var current_user = $rootScope.user;
        
        FormService.getForms(function (current_forms) { $scope.forms = current_forms; });
        
        $scope.addForm = function(newForm) {
            var user_with_id = null;
            if (current_user != null) {
                console.log("current user is " + current_user.username);
                UserService.findUserByUsernameAndPassword(current_user.username, current_user.password, function(user_found) {
                    console.log("id of current user: " + user_found.userId);
                    user_with_id = user_found; 
                });
                if (user_with_id != null) {
                    FormService.createFormForUser(user_with_id, newForm, function(forms) {
                        console.log("Successfully create new form. Current forms: " + forms.length);
                        $scope.forms = forms;
                    });
                }
                
            }
        }
        
        $scope.updateForm = function(newForm) {
            
        }
        
        $scope.deleteForm = function(index) {
            var form_to_delete = $scope.forms.splice(index, 1);
            var form_to_delete_Id = null;
            FormService.findFormId(form_to_delete, function (id) {
                console.log("Id of form to be deleted : " + id);
                form_to_delete_Id = id;
            });
            FormService.deleteFormById(form_to_delete_Id, function(current_forms) {
                console.log("Length of current_forms: " + current_forms.length);
            });
        }
        
        $scope.selectForm = function(index) {
            
        }
    }
}) ();
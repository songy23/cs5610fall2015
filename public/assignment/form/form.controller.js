(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($scope, $location, $rootScope, UserService, FormService) {
        $scope.$location = $location;
        
        var current_user = $rootScope.user;
        
        var forms_2 = FormService.getForms();
        var forms = [
            { formName : "Registration Form"},
            { formName : "Contact List"},
            { formName : "To Do List"}
        ];
        
        $scope.forms = forms_2;
        
        $scope.addForm = function(newForm) {
            forms.push(newForm);
            if (current_user != null) {
                console.log("current user is " + current_user.username);
                var user_found = UserService.findUserByUsernameAndPassword(current_user.username, current_user.password, function(user) {
                    console.log(user_found.userId);
                    return user; 
                });
                if (user_found != null) {
                    FormService.createFormForUser(user_found, newForm, function(forms) {
                        console.log("Successfully create new form. Current forms: " + forms.length);
                    });
                }
                
            }
        }
        
        $scope.updateForm = function(newForm) {
            
        }
        
        $scope.deleteForm = function(index) {
            $scope.forms.splice(index, 1);
        }
        
        $scope.selectForm = function(index) {
            
        }
    }
}) ();
(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    
    function FormController($location, $rootScope, UserService, FormService) {
        var formModel = this;
        formModel.$location = $location;
        formModel.forms = [];
        formModel.user = $rootScope.user;
        $rootScope.form = null;
        var current_user = $rootScope.user;
        
        if (current_user != null) {
            FormService.findAllFormsForUser(current_user.id).then(function(response) {
                formModel.forms = response; 
            });
        }
        
        formModel.addForm = function(newForm) {
            if (current_user != null) {
                var passInForm = {
                    title : newForm.title,
                    userId : current_user.id,
                    fields : []
                };
                FormService.createFormForUser(current_user.id, passInForm).then(function(response) {
                    formModel.forms.push(response); 
                });
            }
        }
        
        formModel.updateForm = function(newForm) {
            
        }
        
        formModel.deleteForm = function(index) {
            var form_to_delete_Id = formModel.forms[index].id;
            formModel.forms.splice(index, 1);
            FormService.deleteFormById(form_to_delete_Id).then(function(response) {
                console.log("Length of current_forms: " + formModel.forms.length);
            });
        }
        
        formModel.selectForm = function(index) {
            
        }
        
        formModel.jumpToField = function(form) {
            $rootScope.form = form;
        }
    }
}) ();
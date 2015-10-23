(
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormService);
    
    function FormService() {
        var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById,
            getAllForms : getAllForms
        };
    
        var forms = [
            {formId : Guid.create(), userId : Guid.create(), formName : "Registration Form"},
            {formId : Guid.create(), userId : Guid.create(), formName : "Contact List"},
            {formId : Guid.create(), userId : Guid.create(), formName : "To Do List"}
        ];
        
        function createFormForUser(User, form, callback) {
            var newForm = {
                formId : Guid.create(),
                userId : User.userId,
                formName : form.formName
            };
            forms.push(newForm);
            return forms;
            $http.success(callback);
        }
        
        function findAllFormsForUser(userId, callback) {
            var userForms = [];
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].userId == userId) {
                    userForms.push(forms[i]);
                }
            }
            return userForms;
            $http.success(callback);
        }
        
        function deleteFormById(formId, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].formId == formId) {
                    forms.splice(i, 1);
                    break;
                }
            }
            $http.success(callback);
        }
        
        function updateFormById(formId, newForm, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].formId == formId) {
                    forms[i].formName = newForm.formName;
                    break;
                }
            }
            
            $http.success(callback);
        }
        
        function getAllForms() {
            return forms;
        }
    
        return service;
    }
) ();
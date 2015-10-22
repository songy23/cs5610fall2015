(
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormService());
    
    function FormService() {
        var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };
        var forms = [];
        
        function createFormForUser(userId, form, callback) {
            var newForm = {
                formId : Guid.create(),
                userId : userID,
                formName : form.formName,
                formFields : formFields
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
                    forms[i].formFields = newForm.formFields;
                }
            }
            
            $http.success(callback);
        }
        
        return service;
    }
) ();
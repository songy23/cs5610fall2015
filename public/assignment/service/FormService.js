(function() {
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
            callback(forms);
        }
        
        function findAllFormsForUser(userId, callback) {
            var userForms = [];
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].userId == userId) {
                    userForms.push(forms[i]);
                }
            }
            callback(userForms);
        }
        
        function deleteFormById(formId, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].formId == formId) {
                    forms.splice(i, 1);
                    break;
                }
            }
            callback(forms);
        }
        
        function updateFormById(formId, newForm, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].formId == formId) {
                    forms[i].formName = newForm.formName;
                    break;
                }
            }
            
            callback(forms);
        }
        
        function getAllForms() {
            return forms;
        }
    
        return service;
    }   
}) ();
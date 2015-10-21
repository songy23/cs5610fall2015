(
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormService());
    
    function FormService() {
        var service = {};
        var forms = [];
        
        service.createFormForUser = function(userId, form, callback) {
            var newForm = null;
            
            callback(newForm);
        }
        
        service.findAllFormsForUser = function(userId, callback) {
            var userForms = [];
            
            callback(userForms);
        }
        
        service.deleteFormById function(formId, callback) {
        
            callback(forms);
        }
        
        service.updateFormById = function(formId, newForm, callback) {
        
            var updatedForm = null;
            
            callback(updatedForm);
        }
        
        return service;
    }
) ();
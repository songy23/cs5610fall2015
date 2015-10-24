(function() {
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormService);
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    
    function FormService() {
        var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById,
            findFormId : findFormId
        };
        
        var current_forms = [];
        
        function createFormForUser(userId, form, callback) {
            var newForm = {
                formId : guid(),
                userId : userId,
                formName : form.formName
            };
            current_forms.push(newForm);
            callback(current_forms);
        }
        
        function findAllFormsForUser(userId, callback) {
            var userForms = [];
            for (var i = 0; i < current_forms.length; i++) {
                if (current_forms[i].userId == userId) {
                    userForms.push(current_forms[i]);
                }
            }
            callback(userForms);
        }
        
        function deleteFormById(formId, callback) {
            for (var i = 0; i < current_forms.length; i++) {
                if (current_forms[i].formId == formId) {
                    current_forms.splice(i, 1);
                    break;
                }
            }
            callback(current_forms);
        }
        
        function updateFormById(formId, newForm, callback) {
            for (var i = 0; i < current_forms.length; i++) {
                if (current_forms[i].formId == formId) {
                    current_forms[i].formName = newForm.formName;
                    break;
                }
            }
            
            callback(current_forms);
        }
        
        
        function findFormId(form, callback) {
            var formId = null;
            for (var i = 0; i < current_forms.length; i++) {
                if (current_forms[i].formName == form.formName) {
                    formId = current_forms[i].formId;
                    break;
                }
            }
            
            callback(formId);
        }
        
        return service;
    }   
}) ();
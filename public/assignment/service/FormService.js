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
            getForms : getForms,
            findFormId : findFormId
        };
        return service;
        
        var forms = [
            {formId : guid(), userId : guid(), formName : "Registration Form"},
            {formId : guid(), userId : guid(), formName : "Contact List"},
            {formId : guid(), userId : guid(), formName : "To Do List"}
        ];
        
        function getForms() {
            console.log(forms.length);
            return forms;
        }
        
        function createFormForUser(User, form, callback) {
            var newForm = {
                formId : guid(),
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
        
        
        function findFormId(form, callback) {
            var formId = null;
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].formName == form.formName) {
                    formId = forms[i].formId;
                    break;
                }
            }
            
            callback(formId);
        }
    }   
}) ();
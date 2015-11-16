var forms = require("./form.mock.json");
var Guid = require('guid');
module.exports = function(app) {
    
    var api = {
        createForm : createForm,
        findAllForm : findAllForm,
        findFormById : findFormById,
        updateForm : updateForm,
        deleteForm : deleteForm,
        findFormByTitle : findFormByTitle,
        findFormForUser : findFormForUser,
        findFieldForForm : findFieldForForm,
        addFieldForForm : addFieldForForm,
        updateFieldForForm : updateFieldForForm,
        deleteFieldForForm : deleteFieldForForm
    };
    
    function createForm(newForm) {
        var guid = Guid.create();
        var form_created = {
            "id" : guid, 
            "title" : newForm.title, 
            "userId" : newForm.userId,
            "fields" : newForm.fields
        };
        forms.push(form_created);
        return form_created;
    }
    
    function findAllForm() {
        return forms;
    }
    
    function findFormById(id) {
        var i = 0;
        for (i = 0; i < forms.length; i++) {
            if (forms[i].id == id) {
                return forms[i];
            } 
        }
        return null;
    }
    
    function updateForm(id, newForm) {
        var i = 0;
        for (i = 0; i < forms.length; i++) {
            if (forms[i].id == id) {
                forms[i].title = newForm.title;
                forms[i].userId = newForm.userId;
                forms[i].fields = newForm.fields;
                return forms[i];
            } 
        }
        return null;
    }
    
    function deleteForm(id) {
        var i = 0;
        for (i = 0; i < forms.length; i++) {
            if (forms[i].id == id) {
                forms.splice(i, 1);
            } 
        }
    }
    
    
    function findFormByTitle(title) {
        var i = 0;
        for (i = 0; i < forms.length; i++) {
            if (forms[i].title == title) {
                return forms[i];
            } 
        }
        return null;
    }
    
    function findFormForUser(userId) {
        var formsOfUser = [];
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].userId == userId) {
                formsOfUser.push(forms[i]);
            }
        }
        return formsOfUser;
    }
    
    function findFieldForForm(formId, fieldId) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == formId) {
                for (var j = 0; j < forms[i].fields.length; j++) {
                    if (forms[i].fields[j].id == fieldId) {
                        return forms[i].fields[j];
                    }
                }
            }
        }
        return null;
    }
    
    function addFieldForForm(formId, newFieldProperties) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == formId) {
                var newField = {
                    id : Guid.create(),
                    label : newFieldProperties.label,
                    type : newFieldProperties.type,
                    placeholder : newFieldProperties.placeholder
                };
                forms[i].fields.push(newField);
                return newField;
            }
        }
        return null;
    }
    
    function updateFieldForForm(formId, fieldId, newField) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == formId) {
                for (var j = 0; j < forms[i].fields.length; j++) {
                    if (forms[i].fields[j].id == fieldId) {
                        forms[i].fields[j].label = newField.label;
                        forms[i].fields[j].type = newField.type;
                        forms[i].fields[j].placeholder = newField.placeholder;
                        return forms[i].fields[j];
                    }
                }
            }
        }
        
        return null;
    }
    
    function deleteFieldForForm(formId, fieldId) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == formId) {
                for (var j = 0; j < forms[i].fields.length; j++) {
                    if (forms[i].fields[j].id == fieldId) {
                        forms[i].fields.splice(j, 1);
                    }
                }
                return forms[i];
            }
        }
        
        return null;
    }
    
    return api;
};
var forms = require("form.mock.json");

module.exports = function(app) {
    
    var api = {
        createForm : createForm,
        findAllForm : findAllForm,
        findFormById : findFormById,
        updateForm : updateForm,
        deleteForm : deleteForm,
        findFormByTitle : findFormByTitle
    };
    
    function createForm(newForm) {
        
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
            } 
        }
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
    
    return api;
};
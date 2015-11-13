(function() {
    angular
    .module("FormBuilderApp")
    .factory("FieldService", FieldService);
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    
    function FieldService() {
        var service = {
            createFieldForForm : createFieldForForm,
            getFieldsForForm : getFieldsForForm,
            getFieldForForm : getFieldForForm,
            deleteFieldFromForm : deleteFieldFromForm,
            updateField : updateField
        };
        
        function createFieldForForm(formId, field) {
            
        }
        
        function getFieldsForForm(formId) {
            
        }
        
        function getFieldForForm(formId, fieldId) {
            
        }
        
        function deleteFieldFromForm(formId, fieldId) {
            
        }
        
        function updateField(formId, fieldId, field) {
            
        }
        
        return service;
    }   
}) ();

/*

createFieldForForm(formId, field)
Use $http.post() to create a new field for form whose id is formId. Pass the field object as part of the post. Post to URL: /api/assignment/form/:formId/field

getFieldsForForm(formId)
Use $http.get() to retrieve fields belonging to a form object whose id is equal to the formId. Use URL /api/assignment/form/:formId/field

getFieldForForm(formId, fieldId)
Use $http.get() to retrieve a field object whose id is equal to the fieldId and belonging to a form object whose id is equal to the formId. Use URL /api/assignment/form/:formId/field/:fieldId

deleteFieldFromForm(formId, fieldId)
Use $http.delete() to remove a field object whose id is equal to the fieldId and belonging to a form object whose id is equal to the formId. Use URL /api/assignment/form/:formId/field/:fieldId

updateField(formId, fieldId, field)
Use $http.put() to update a field object whose id is equal to the fieldId and belonging to a form object whose id is equal to the formId so that its properties are the same as the property values of the field object parameter. Use URL: /api/assignment/form/:formId/field/:fieldId


*/
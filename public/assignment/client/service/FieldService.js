(function() {
    angular
    .module("FormBuilderApp")
    .factory("FieldService", FieldService);
    
    function FieldService($http, $q) {
        var service = {
            createFieldForForm : createFieldForForm,
            getFieldsForForm : getFieldsForForm,
            getFieldForForm : getFieldForForm,
            deleteFieldFromForm : deleteFieldFromForm,
            updateField : updateField
        };
        
        function createFieldForForm(formId, field) {
            var deferred = $q.defer();
            $http.post('/api/assignment/form/' + formId + '/field', field)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function getFieldsForForm(formId) {
            var deferred = $q.defer();
            $http.get('/api/assignment/form/' + formId + '/field')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function getFieldForForm(formId, fieldId) {
            var deferred = $q.defer();
            $http.get('/api/assignment/form/' + formId + '/field/' + fieldId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteFieldFromForm(formId, fieldId) {
            var deferred = $q.defer();
            $http.delete('/api/assignment/form/' + formId + '/field/' + fieldId)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function updateField(formId, fieldId, field) {
            var deferred = $q.defer();
            $http.put('/api/assignment/form/' + formId + '/field/' + fieldId, field)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
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
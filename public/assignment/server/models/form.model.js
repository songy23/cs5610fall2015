var q = require("q");
var Guid = require('guid');
module.exports = function(app, mongoose, db) {
    var FormSchema = require("./form.schema.js")(app, mongoose);
    var FormModel = mongoose.model("form", FormSchema);
    
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
        var deferred = q.defer();
        FormModel.create(newForm, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findAllForm() {
        var deferred = q.defer();
        FormModel.find({}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findFormById(id) {
        var deferred = q.defer();
        FormModel.findOne({_id : id}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function updateForm(id, newForm) {
        var deferred = q.defer();
        FormModel.update(
            {_id : id}, 
            {$set : {
                        title : newForm.title,
                        userId : newForm.userId,
                        fields : newForm.fields
                    }
            },
            function(err, results) {
                deferred.resolve(results);
            });
        return deferred.promise;
    }
    
    function deleteForm(id) {
        var deferred = q.defer();
        FormModel.remove({_id : id}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    
    function findFormByTitle(title) {
        var deferred = q.defer();
        FormModel.findOne({title : title}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findFormForUser(userId) {
        var deferred = q.defer();
        FormModel.find({userId : userId}, function(err, results) {
            deferred.resolve(results);
        });
        return deferred.promise;
    }
    
    function findFieldForForm(formId, fieldId) {
        var deferred = q.defer();
        FormModel.findOne({_id : formId}, function(err, results) {
            if (results == null) {
                deferred.resolve(null);
            } else {
                var form = results;
                for (var j = 0; j < form.fields.length; j++) {
                    if (form.fields[j].id == fieldId) {
                        deferred.resolve(form.fields[j]);
                    }
                }
                deferred.resolve(null);
            }
        });
        return deferred.promise;
    }
    
    function addFieldForForm(formId, newFieldProperties) {
        var deferred = q.defer();
        
        FormModel.findOne({_id : formId}, function(err, results) {
            if (results == null) {
                deferred.resolve(null);
            } else {
                var newField = null;
                if (newFieldProperties.type == "TEXT" || newFieldProperties.type == "TEXTAREA") {
                    newField = {
                        id : Guid.create(),
                        label : newFieldProperties.label,
                        type : newFieldProperties.type,
                        placeholder : newFieldProperties.placeholder
                    };
                } else if (newFieldProperties.type == "DATE") {
                    newField = {
                        id : Guid.create(),
                        label : newFieldProperties.label,
                        type : newFieldProperties.type
                    };
                } else {
                    newField = {
                        id : Guid.create(),
                        label : newFieldProperties.label,
                        type : newFieldProperties.type,
                        options : newFieldProperties.options
                    };
                }
                
                results.fields.push(newField);
                results.save(function(err, result) {
                    deferred.resolve(result);
                });
            }
        });
        return deferred.promise;
    }
    
    function updateFieldForForm(formId, fieldId, newFieldProperties) {
        var deferred = q.defer();
        FormModel.findOne({_id : formId}, function(err, results) {
            if (results == null) {
                deferred.resolve(null);
            } else {
                for (var j = 0; j < results.fields.length; j++) {
                    if (results.fields[j].id == fieldId) {
                        var newField = null;
                        if (newFieldProperties.type == "TEXT" || newFieldProperties.type == "TEXTAREA") {
                            newField = {
                                id : fieldId,
                                label : newFieldProperties.label,
                                type : newFieldProperties.type,
                                placeholder : newFieldProperties.placeholder
                            };
                        } else if (newFieldProperties.type == "DATE") {
                            newField = {
                                id : fieldId,
                                label : newFieldProperties.label,
                                type : newFieldProperties.type
                            };
                        } else {
                            newField = {
                                id : fieldId,
                                label : newFieldProperties.label,
                                type : newFieldProperties.type,
                                options : newFieldProperties.options
                            };
                        }
                        
                        results.fields[j] = newField;
                    }
                }
                results.save(function(err, result) {
                    deferred.resolve(result);
                });
            }
        });
        
        return deferred.promise;
    }
    
    function deleteFieldForForm(formId, fieldId) {
        var deferred = q.defer();
        
        FormModel.findOne({_id : formId}, function(err, results) {
            if (results == null) {
                deferred.resolve(null);
            } else {
                for (var j = 0; j < results.fields.length; j++) {
                    if (results.fields[j].id == fieldId) {
                        results.fields.splice(j, 1);
                    }
                }
                
                results.save(function(err, result) {
                    deferred.resolve(result);
                });
            }
        });
        
        return deferred.promise;
    }
    
    return api;
};
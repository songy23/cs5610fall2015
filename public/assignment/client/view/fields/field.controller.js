(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);
    
    function FieldController($scope, $location, $rootScope, $routeParams, FormService, FieldService) {
        $scope.$location = $location;
        $scope.fields = [];
        
        var current_user = $rootScope.user;
        var current_form = $rootScope.form;
        if (current_form != null) {
            FieldService.getFieldsForForm(current_form.id).then(function(response) {
                $scope.fields = response;
            });
        }
        
        $scope.removeField = function(index) {
            var field_to_delete = $scope.fields.splice(index, 1);
            if (current_form != null) {
                FieldService.deleteFieldFromForm(current_form.id, field_to_delete.id).then(function(response) {
                    $rootScope.form = response;
                });
            }
        }
        
        $scope.addField = function(fieldType) {
            var newField = null;
            
            if (fieldType == "Single Line Text") {
                newField = {"id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
            } else if (fieldType == "Multi Line Text") {
                newField = {"id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
            } else if (fieldType == "Date") {
                newField = {"id": null, "label": "New Date Field", "type": "DATE"};
            } else if (fieldType == "Dropdown") {
                newField = {"id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
                                {"label": "Option 1", "value": "OPTION_1"},
                                {"label": "Option 2", "value": "OPTION_2"},
                                {"label": "Option 3", "value": "OPTION_3"}
                            ]};
            } else if (fieldType == "Checkboxes") {
                newField = {"id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                                {"label": "Option A", "value": "OPTION_A"},
                                {"label": "Option B", "value": "OPTION_B"},
                                {"label": "Option C", "value": "OPTION_C"}
                            ]};
            } else if (fieldType == "Radio Buttons") {
                newField = {"id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
                                {"label": "Option X", "value": "OPTION_X"},
                                {"label": "Option Y", "value": "OPTION_Y"},
                                {"label": "Option Z", "value": "OPTION_Z"}
                            ]};
            }
            
            if (newField != null) {
                if (current_form != null) {
                    FieldService.createFieldForForm(current_form.id, newField).then(function(response) {
                        newField = response;
                        console.log(response);
                        console.log(current_form);
                    });
                }
                $scope.fields.push(newField);
            }
        }
    }
}) ();
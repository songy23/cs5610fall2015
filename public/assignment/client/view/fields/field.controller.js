(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);
    
    function FieldController($scope, $location, $rootScope, $routeParams, UserService, FormService, FieldService) {
        $scope.$location = $location;
        
        var current_user = $rootScope.user;
        var userId = $routeParams.userId;
        var formId = $routeParams.formId;
        
        $scope.addField(fieldType) {
            
        }
        
        Sscope.deleteField(field) {
            
        }
}) ();
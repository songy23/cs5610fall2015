(function() {
    angular
        .module("ReadingFun")
        .controller("SearchController", SearchController);
    
    function SearchController($scope, $location, $rootScope, BookService) {
        $scope.$location = $location;
        $scope.books = [];
        $scope.resultCount = 0;
        
        $scope.search = function(searchType, searchKey) {
            switch (searchType) {
              case "title":
                BookService.findBookByTitle(searchKey).then(function(response) {
                    retrieveaJSON(response);
                });
                break;
              case "isbn":
                BookService.findBookByISBN(searchKey).then(function(response) {
                    retrieveaJSON(response);
                });
                break;
              case "author":
                BookService.findBookByAuthor(searchKey).then(function(response) {
                    retrieveaJSON(response);
                });
                break;
              default:
                alert("Please select a search type");
            }
        }
        
        function retrieveaJSON(response) {
            $.ajax({
                url: response,
                dataType: "json",
                success: setScope
            });
        }
        
        function setScope(bookJSON) {
            $scope.books = bookJSON.docs;
            $scope.resultCount = bookJSON.numFound;
//            console.log($scope.books);
//            console.log(bookJSON);
        }
    }
}) ();
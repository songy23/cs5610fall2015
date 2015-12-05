(function() {
    angular
        .module("ReadingFun")
        .controller("SearchController", SearchController);
    
    function SearchController($location, $rootScope, BookService) {
        var searchModel = this;
        
        searchModel.$location = $location;
        searchModel.books = [];
        searchModel.resultCount = 0;
        
        searchModel.search = function(searchType, searchKey) {
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
            searchModel.books = bookJSON.docs;
            searchModel.resultCount = bookJSON.numFound;
        }
        
        searchModel.saveBook = function($index) {
            $rootScope.book = searchModel.books[$index];
        }
    }
}) ();
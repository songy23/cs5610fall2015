(function() {
    angular.module("ReadingFun")
           .factory("BookService", BookService);
    
    function BookService($http, $q) {
        var service = {
            findBookById : findBookById,
            findBookByTitle : findBookByTitle,
            findAllBooks : findAllBooks
        };
        
        function findBookById(bookId) {
            
        }
        
        function findBookByTitle(title) {
            
        }
        
        function findAllBooks() {
            
        }
        
        return service;
    }
})();
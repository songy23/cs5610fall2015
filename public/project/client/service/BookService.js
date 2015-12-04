(function() {
    angular.module("ReadingFun")
           .factory("BookService", BookService);
    
    function BookService($http, $q) {
        var service = {
            findBookByTitle : findBookByTitle,
            findBookByISBN : findBookByISBN,
            findBookByAuthor : findBookByAuthor
        };
        
        function findBookByTitle(title) {
            var deferred = $q.defer();
            $http.get('/api/project/book/title/' + title)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findBookByISBN(isbn) {
            var deferred = $q.defer();
            $http.get('/api/project/book/isbn/' + isbn)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findBookByAuthor(author) {
            var deferred = $q.defer();
            $http.get('/api/project/book/author/' + author)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        return service;
    }
})();
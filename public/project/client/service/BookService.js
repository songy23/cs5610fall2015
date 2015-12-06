(function() {
    angular.module("ReadingFun")
           .factory("BookService", BookService);
    
    function BookService($http, $q) {
        var service = {
            findBookByTitle : findBookByTitle,
            findBookByISBN : findBookByISBN,
            findBookByAuthor : findBookByAuthor,
            saveSearchedBook : saveSearchedBook,
            findAllLocalBook : findAllLocalBook,
            findLocalBookByISBN : findLocalBookByISBN,
            deleteLocalBookByISBN : deleteLocalBookByISBN
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
        
        function saveSearchedBook(book) {
            var deferred = $q.defer();
            $http.post('/api/project/book_local/', book)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findAllLocalBook() {
            var deferred = $q.defer();
            $http.get('/api/project/book_local/')
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function findLocalBookByISBN(isbn) {
            var deferred = $q.defer();
            $http.get('/api/project/book_local/isbn/' + isbn)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        
        function deleteLocalBookByISBN(isbn) {
            var deferred = $q.defer();
            $http.delete('/api/project/book_local/isbn/' + isbn)
                .success(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }

        return service;
    }
})();
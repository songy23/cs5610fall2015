(function() {
    angular
        .module("ReadingFun")
        .controller("SearchController", SearchController);
    
    function SearchController($location, $rootScope, BookService) {
        var searchModel = this;
        
        searchModel.$location = $location;
        
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
            var books = bookJSON.docs;
            var idx = 0;
            for (var i = 0; i < books.length; i++) {
                var temp_isbn = null;
                var temp_author = null;
                if (books[i].isbn != null)  
                    temp_isbn = books[i].isbn[0];
                if (books[i].author_name != null)  
                    temp_author = books[i].author_name[0];
                var book = {
                    isbn : temp_isbn,
                    title : books[i].title,
                    author : temp_author,
                    publishYear : books[i].first_publish_year,
                    publishPlace : books[i].publish_place,
                    subject : books[i].subject,
                    publisher : books[i].publisher,
                    language : books[i].language
                };
                if (temp_isbn != null)
                    BookService.saveSearchedBook(book).then(function(response) {});
                var tr_new = $("#template").clone();
                tr_new.find(".t1").html(idx);
                if (book.isbn != null)
                    tr_new.find(".t2").html('<a href="#/book/' + book.isbn + '">' + book.isbn + '</a>');
                tr_new.find(".t3").html(book.title);
                tr_new.find(".t4").html(book.author);
                $("#container").append(tr_new);
                idx++;
            }
            $("#results").html(bookJSON.numFound + " results found. Display the top 100 results.");
        }
        
        searchModel.redirect = function($index) {
            $rootScope.book = searchModel.books[$index];
            $location.url("/book/" + $rootScope.book.isbn[0]);
        }
    }
}) ();
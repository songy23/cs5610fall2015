module.exports = function(app, model) {
    var connection = "http://openlibrary.org/search.json?";
    
    app.get('/api/project/book/title/:title', function (req, res) {
        var title = req.params.title;
        res.jsonp(connection + "title=" + title);
    });
    
    app.get('/api/project/book/isbn/:isbn', function (req, res) {
        var isbn = req.params.isbn;
        res.jsonp(connection + "isbn=" + isbn);
    });
    
    app.get('/api/project/book/author/:author', function (req, res) {
        var author = req.params.author;
        res.jsonp(connection + "author=" + author);
    });
    
    app.get('/api/project/book_local/isbn/:isbn', function (req, res) {
        var isbn = req.params.isbn;
        model.findLocalBookByISBN(isbn).then(function(result) {
            res.jsonp(result);
        });
    });
    
    app.delete('/api/project/book_local/isbn/:isbn', function (req, res) {
        var isbn = req.params.isbn;
        model.deleteLocalBookByISBN(isbn).then(function(result) {
            res.jsonp(result);
        });
    });
    
    app.get('/api/project/book_local/', function (req, res) {
        model.findAllLocalBook().then(function(result) {
            res.jsonp(result);
        });
    });
    
    app.post('/api/project/book_local/', function (req, res) {
        var book = req.body;
        model.saveSearchedBook(book).then(function(result) {
            res.jsonp(result);
        });
    });
};
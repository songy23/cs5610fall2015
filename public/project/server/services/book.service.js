module.exports = function(app) {
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
};
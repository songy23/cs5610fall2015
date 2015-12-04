module.exports = function(app, model) {
    
    app.get('/api/project/book', function (req, res) {
        
    });
    
    app.get('/api/project/book/:id', function (req, res) {
        var bookId = req.params.id;
        model.findBookById(bookId).then(function(result) {
            res.jsonp(result); 
        })
    });
};
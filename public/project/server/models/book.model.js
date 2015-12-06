var q = require("q");
module.exports = function(app, mongoose, db) {
    var BookSchema = require("./book.schema.js")(app, mongoose);
    var BookModel = mongoose.model("project.book", BookSchema);
    
    var api = {
        saveSearchedBook : saveSearchedBook,
        findAllLocalBook : findAllLocalBook,
        findLocalBookByISBN : findLocalBookByISBN,
        deleteLocalBookByISBN : deleteLocalBookByISBN
    };
    
    function saveSearchedBook(book) {
        var deferred = q.defer();
        BookModel.findOne({isbn : book.isbn}, function(err, result) {
            if (result != null) {
                deferred.resolve(null);
            } else {
                BookModel.create(book, function(err, result) {
                    deferred.resolve(result);
                });
            }
        });
        return deferred.promise;
    }
    
    function findAllLocalBook() {
        var deferred = q.defer();
        BookModel.find({}, function(err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    function findLocalBookByISBN(isbn) {
        var deferred = q.defer();
        BookModel.findOne({isbn : isbn}, function(err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    function deleteLocalBookByISBN(isbn) {
        var deferred = q.defer();
        BookModel.remove({isbn : isbn}, function(err, result) {
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    return api;
    
};
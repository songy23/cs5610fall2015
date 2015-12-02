module.exports = function(app, mongoose) {
    
    var BookSchema = new mongoose.Schema({
        bookId : String,
        author : String,
        cover : String,
        publishDate : Date
    }, {collection : "order"});
    
    return BookSchema;
};
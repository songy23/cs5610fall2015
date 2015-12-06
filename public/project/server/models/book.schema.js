module.exports = function(app, mongoose) {
    
    var BookSchema = new mongoose.Schema({
        isbn : String,
        title : String,
        author : String,
        publishYear : Number
    }, {collection : "project.book"});
    
    return BookSchema;
};
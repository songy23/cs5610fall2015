module.exports = function(app, mongoose) {
    
    var ReviewSchema = new mongoose.Schema({
        userId : String,
        bookId : String,
        date : Date,
        content : String,
        star : Number
    }, {collection : "review"});
    
    return ReviewSchema;
};
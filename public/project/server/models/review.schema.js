module.exports = function(app, mongoose) {
    
    var ReviewSchema = new mongoose.Schema({
        userId : String,
        isbn : String,
        date : Date,
        content : String,
        star : Number
    }, {collection : "project.review"});
    
    return ReviewSchema;
};
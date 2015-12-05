module.exports = function(app, mongoose) {
    
    var ReviewSchema = new mongoose.Schema({
        username : String,
        isbn : String,
        date : Date,
        content : String,
        rating : Number
    }, {collection : "project.review"});
    
    return ReviewSchema;
};
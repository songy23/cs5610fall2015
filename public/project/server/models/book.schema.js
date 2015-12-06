module.exports = function(app, mongoose) {
    
    var BookSchema = new mongoose.Schema({
        isbn : String,
        title : String,
        author : {type : String, default : "Unknown"},
        publishYear : Number,
        publishPlace : {type : [String], default : ["Unknown"]},
        subject : {type : [String], default : ["Unknown"]},
        publisher : {type : [String], default : ["Unknown"]},
        language : {type : [String], default : ["eng"]}
    }, {collection : "project.book"});
    
    return BookSchema;
};
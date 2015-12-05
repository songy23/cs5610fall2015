module.exports = function(app, mongoose) {
    
    var OrderSchema = new mongoose.Schema({
        userId : String,
        bookTitle : String,
        date : Date,
        price : Number,
        quantity : Number
    }, {collection : "project.order"});
    
    return OrderSchema;
    // OrderSchema is embeded in UserSchema
};
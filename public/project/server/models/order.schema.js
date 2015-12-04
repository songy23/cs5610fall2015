module.exports = function(app, mongoose) {
    
    var OrderSchema = new mongoose.Schema({
        userId : String,
        bookId : String,
        date : Date,
        price : Double,
        quantity : Double
    }, {collection : "order"});
    
    return OrderSchema;
    // OrderSchema is embeded in UserSchema
};
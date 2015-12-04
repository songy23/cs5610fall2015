module.exports = function(app, mongoose) {
    var OrderSchema = require("./order.schema.js")(app, mongoose);
    
    var UserSchema = new mongoose.Schema({
        firstName : String,
        lastName : String,
        username : String,
        password : String,
        email : String,
        dob : Date,
        address : String,
        orders : [OrderSchema]
    }, {collection : "user"});
    
    return UserSchema;
};
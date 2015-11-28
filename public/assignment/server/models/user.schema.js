module.exports = function(app, mongoose) {
    
    var UserSchema = new mongoose.Schema({
        firstName : String,
        lastName : String,
        username : String,
        password : String
    }, {collection : "user"});
    var UserModel = mongoose.model("user", UserSchema);

    UserModel.create({
        firstName : "L",
        lastName : "M",
        username : "ddd",
        password : "ppp"
    }, function(err, results) {
        console.log(err);
        console.log(results);
    });
    
    var api = {
        
    };
    
    
    return api;
};
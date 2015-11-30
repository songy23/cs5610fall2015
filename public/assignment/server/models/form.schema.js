module.exports = function(app, mongoose) {
    var FieldSchema = require("./field.schema.js")(app, mongoose);
    var FormSchema = new mongoose.Schema({
        title : String,
        userId : String,
        fields : [FieldSchema]
    }, {collection : "form"});
    
    return FormSchema;
};
module.exports = function(app, mongoose) {
    
    var FieldSchema = new mongoose.Schema({
        id : String,
        type : {
            type : String,
            enum : ["TEXT", "TEXTAREA", "RADIOS", "CHECKBOXES", "OPTIONS", "DATE", "EMAIL"]
        },
        label : {type : String, default : "label"},
        placeholder : {type : String, default : "placeholder"},
        options : [
            {label : {type : String, default : "label"}, 
             value : {type : String, default : "value"}}
        ]
    }, {collection : "form"});
    
    return FieldSchema;
};
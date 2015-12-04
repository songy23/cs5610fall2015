module.exports = function(app, mongoose, db) {
    var userModel = require("./models/user.model.js")(app, mongoose, db);
    var bookModel = require("./models/book.model.js")(app, mongoose, db);
    var reviewModel = require("./models/review.model.js")(app, mongoose, db);
    require("./services/book.service.js")(app, bookModel);
    require("./services/user.service.js")(app, userModel);
    require("./services/order.service.js")(app, userModel);
    require("./services/review.service.js")(app, reviewModel);
};
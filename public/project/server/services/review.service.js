module.exports = function(app, model) {
    
    app.post('/api/project/:userId/review', function (req, res) {
        var userId = req.params.userId;
        var newReview = req.body;
        console.log(newReview);
        model.createReviewForUser(userId, newReview).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.get('/api/project/review', function (req, res) {
        model.findAllReview().then(function(results) {
            res.jsonp(results);
        });
    });
    
    app.get('/api/project/review/:id', function (req, res) {
        var reviewId = req.params.id;
        model.findReviewById(reviewId).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.get('/api/project/:userId/review', function (req, res) {
        var userId = req.params.userId;
        model.findReviewForUser(userId).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.delete('/api/project/:userId/review/:id', function (req, res) {
        var id = req.params.id;
        var userId = req.params.userId;
        model.deleteReview(id);
        model.findReviewForUser(userId).then(function(result) {
            res.jsonp(result); 
        });
    });
};
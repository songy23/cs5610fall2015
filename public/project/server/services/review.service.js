module.exports = function(app, model) {
    
    app.post('/api/project/review', function (req, res) {
        var newReview = req.body;
        model.createReview(newReview).then(function(result) {
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
    
    app.get('/api/project/:bookId/review', function (req, res) {
        var bookId = req.params.userId;
        model.findReviewForBook(bookId).then(function(result) {
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
        model.deleteReview(id).then(
            function(result) {
               model.findReviewForUser(userId).then(function(result) {
                    res.jsonp(result); 
                }); 
            });
    });
    
    app.delete('/api/project/review/:id', function (req, res) {
        var id = req.params.id;
        model.deleteReview(id).then(function(result) {
            // do nothing
        });
    });
    
    app.put('/api/project/review/:id', function (req, res) {
        var id = req.params.id;
        var updated_review = req.body;
        model.updateReview(id, updated_review).then(function(result) {
            res.jsonp(result); 
        });
    });
};
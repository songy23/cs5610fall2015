module.exports = function(app, model) {
    
    app.post('/api/project/:userId/order', function (req, res) {
        var userId = req.params.userId;
        var newOrder = req.body;
        model.createOrderForUser(userId, newOrder).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.get('/api/project/:userId/order/:id', function (req, res) {
        var userId = req.params.userId;
        var orderId = req.params.id;
        model.findOrderById(userId, orderId).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    // Orders don't need to be updated.
    
    app.delete('/api/project/:userId/order/:id', function (req, res) {
        var orderId = req.params.id;
        var userId = req.params.userId;
        model.deleteOrder(userId, orderId).then(function(result) {
            res.jsonp(result); 
        });
    });
};
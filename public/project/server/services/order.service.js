module.exports = function(app, model) {
    
    app.post('/api/project/:userId/order', function (req, res) {
        var userId = req.params.userId;
        var newOrder = req.body;
        console.log(newOrder);
        model.createOrderForUser(userId, newOrder).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.get('/api/project/order', function (req, res) {
        model.findAllOrder().then(function(results) {
            res.jsonp(results);
        });
    });
    
    app.get('/api/project/order/:id', function (req, res) {
        var orderId = req.params.id;
        model.findOrderById(orderId).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.get('/api/project/:userId/order', function (req, res) {
        var userId = req.params.userId;
        model.findOrderForUser(userId).then(function(result) {
            res.jsonp(result); 
        });
    });
    
    app.delete('/api/project/:userId/order/:id', function (req, res) {
        var id = req.params.id;
        var userId = req.params.userId;
        model.deleteOrder(id);
        model.findOrderForUser(userId).then(function(result) {
            res.jsonp(result); 
        });
    });
};
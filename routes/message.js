var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); 
    models.Message.create({
    	email: req.body.email,
    	content: req.body.content
    }, function(err, newMessage) {
    	if(err) {
    		res.send(err);
    	}
    	res.redirect('/');
    });
};
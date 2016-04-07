var mongoose = require('mongoose');

exports.view = function(req, res) {
	mongoose.model('Message').find(function(err,messages) {
    	if(err) {
    		res.render("index", {"data": "Error loading messages"});
    	}
   		res.render("index", {"data": messages});
	});
}

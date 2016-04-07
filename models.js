const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	email: String,
	content: String,
	created: { type: Date, default: Date.now }
});

exports.Message = mongoose.model('Message', MessageSchema);
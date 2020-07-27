import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
	local: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		tags: {
			type: [String],
			required: true
		},
		rating: Number,
		answersCount: Number,
		views: Number,
		dateAdded: Date,
		answers: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer'
		}],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
	}
}).index({ 'local.title': 'text', 'local.description': 'text' });

module.exports = mongoose.model('Question', questionSchema);
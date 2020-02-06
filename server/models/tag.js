import mongoose from 'mongoose';

var tagSchema = mongoose.Schema({
    name: String,
    description: String,
    questionCount: Number,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
}).index({ 'name': 'text', 'description': 'text' });

module.exports = mongoose.model('Tag', tagSchema);
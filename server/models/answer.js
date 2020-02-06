import mongoose from 'mongoose';

var answerSchema = mongoose.Schema({
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    rating: Number,
    dateAdded: Date
});

module.exports = mongoose.model('Answer', answerSchema);
const Question = require('../models/question');
const Answer  = require('../models/answer');

    exports.searchOneAnswer = async (req, res, next) => {
        Question.findById(req.params._id)
            .populate('local.answers')
            .exec((err, q) => {
                if (err) return console.error(err);
                res.header('Content-Type', 'application/json');
                res.send("{\"data\": " + JSON.stringify(q.local.answers) + "}");
            });
    };

    exports.postAnswer = async (req, res, next) => {
        Question.findById(req.body._question, (err, question) => {
            if (err) return console.error(err);

            let newAnswer = new Answer({
                '_question': question._id,
                '_user': req.body.user._id,
                'text': req.body.text,
                'rating': 0,
                'dateAdded': Date.now()
            });

            newAnswer.save();

            question.local.answers.push(newAnswer._id);
            question.local.answersCount++;

            question.save();

            res.header('Content-Type', 'application/json');
            res.send("{\"data\": " + JSON.stringify(newAnswer) + "}");
        });
    };
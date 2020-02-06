import Question from '../models/question';
import Answer from '../models/answer';
import User from '../models/user';
import Tag from '../models/tag';


    exports.searchOneQuestion = async (req, res, next) => {
        Question.findById(req.params._id, (err, question) => {
            if (err) return console.error(err);
            question.local.views++;
            question.save();
        }).populate('local.answers').populate('local.user')
            .exec(function (err, q) {
                if (err) return console.error(err);
                res.header('Content-Type', 'application/json');
                res.send("{\"data\": " + JSON.stringify(q) + "}");
            });
    };

    exports.getTopQuestions = async (req, res, next) => {
        Question.find({}, function (err, questions) {
            if (err) return console.error(err);
            res.header('Content-Type', 'application/json');
            res.send("{\"data\": " + JSON.stringify(questions) + "}")
        }).sort({'local.rating': -1}).limit(4);
    };

    exports.searchQuestions = async (req, res, next) => {
        res.header('Content-Type', 'application/json');
        if (req.params.criteria == 'new') {
            Question.find({}, function (err, questions) {
                if (err) return console.error(err);
                res.send("{\"data\": " + JSON.stringify(questions) + "}")
            }).sort({'local.dateAdded': -1}).skip((req.params.page - 1) * 10).limit(10);
        }
        else if (req.params.criteria == 'top') {
            Question.find({}, function (err, questions) {
                if (err) return console.error(err);
                res.send("{\"data\": " + JSON.stringify(questions) + "}")
            }).sort({'local.rating': -1}).skip((req.params.page - 1) * 10).limit(10);
        }
        else if (req.params.criteria == 'unanswered') {
            Question.find({'local.answersCount': 0}, function (err, questions) {
                if (err) return console.error(err);
                res.send("{\"data\": " + JSON.stringify(questions) + "}")
            }).sort({'local.date': -1}).skip((req.params.page - 1) * 10).limit(10);
        }
        else {
            Question.find({}, function (err, questions) {
                if (err) return console.error(err);
                res.send("{\"data\": " + JSON.stringify(questions) + "}")
            }).skip((req.params.page - 1) * 10).limit(10);
        }
    };

    exports.voteQuestions = async (req, res, next) => {
        Question.findById(req.params._id, function (err, question) {
            if (err) return console.error(err);

            User.findById(req.body.user, function (err, user) {
                if (err) return console.error(err);
                user.ratedQuestions.push(question._id);
                user.save();
            });

            if (req.body.upDown >= 0) question.local.rating++;
            else question.local.rating--;
            question.save();
            res.sendStatus(200);
        });
    };

    exports.askQuestion = async (req, res, next) => {
        let newQuestion = new Question();
        newQuestion.local.title = req.body.title;
        newQuestion.local.description = req.body.description;
        newQuestion.local.tags = req.body.tags;
        newQuestion.local.rating = req.body.rating;
        newQuestion.local.answersCount = req.body.answersCount;
        newQuestion.local.views = req.body.views;
        newQuestion.local.user = req.body.user._id;
        newQuestion.local.dateAdded = Date.now();

        newQuestion.save(function (err, q) {
            if (err) throw err;
            else {
                User.findById(req.body.user._id, function (err, user) {
                    if (err) return console.error(err);
                    user.questions.push(q._id);
                    user.save();
                });
            }
        });

        res.header('Content-Type', 'application/json');
        res.send("{\"data\": " + JSON.stringify(newQuestion) + "}");
    };
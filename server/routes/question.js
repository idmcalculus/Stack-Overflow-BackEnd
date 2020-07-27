const express = require('express');
const questionController = require('../controllers/question');

const router = express.Router();

router.post('/post-question', questionController.askQuestion);
router.get('/question/:_id', questionController.searchOneQuestion);
router.get('/top-questions', questionController.getTopQuestions);
router.get('/questions/:criteria/:page', questionController.searchQuestions);
router.put('/question/:_id/rate', questionController.voteQuestions);


module.exports = router;
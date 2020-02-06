import express from 'express';
import questionCtrl from '../controllers/question';

const router = express.Router();

router.post('/post-question', questionCtrl.askQuestion);
router.get('/question/:_id', questionCtrl.searchOneQuestion);
router.get('/top-questions', questionCtrl.getTopQuestions);
router.get('/questions/:criteria/:page', questionCtrl.searchQuestions);
router.put('/question/:_id/rate', questionCtrl.voteQuestions);


module.exports = router;
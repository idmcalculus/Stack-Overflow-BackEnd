import express from 'express';
import questionCtrl from '../controllers/question';

const router = express.Router();

router.get('/question/:_id', questionCtrl.searchOneQuestion);
router.get('/top-questions', questionCtrl.getTopQuestions);

module.exports = router;
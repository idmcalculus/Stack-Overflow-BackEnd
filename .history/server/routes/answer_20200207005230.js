import express from 'express';
import answerCtrl from '../controllers/answer';

const router = express.Router();

router.post('/post-answer/', answerCtrl.postAnswer);
router.get('/answers/:_id', answerCtrl.searchOneAnswer);

module.exports = router;
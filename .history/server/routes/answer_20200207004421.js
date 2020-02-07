import express from 'express';
import answerCtrl from '../controllers/answer';

const router = express.Router();

router.get('/answers/:_id', answerCtrl.searchOneAnswer);

module.exports = router;
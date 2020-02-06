import express from 'express';
import questionCtrl from '../controllers/question';

const router = express.Router();

router.get('/question/:_id', questionCtrl.searchOneQuestion);

module.exports = router;
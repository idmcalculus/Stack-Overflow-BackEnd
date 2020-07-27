const express = require('express');
const answerController = require('../controllers/answer');

const router = express.Router();

router.post('/post-answer/', answerController.postAnswer);
router.get('/answers/:_id', answerController.searchOneAnswer);

module.exports = router;
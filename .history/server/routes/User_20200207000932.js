import express from 'express';
import userCtrl from '../controllers/User';

const router = express.Router();

router.post('/users', userCtrl.userSignup);
router.post('/users/login', userCtrl.userLogin);
router.get('/users', userCtrl.searchUser);

module.exports = router;
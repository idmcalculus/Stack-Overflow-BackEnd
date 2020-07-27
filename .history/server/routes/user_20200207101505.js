import express from 'express';
import userCtrl from '../controllers/user';

const router = express.Router();

router.post('/users', userCtrl.userSignup);
router.post('/users/login', userCtrl.userLogin);
router.get('/users', userCtrl.searchUser);

module.exports = router;
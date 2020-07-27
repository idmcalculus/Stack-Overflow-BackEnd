import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.post('/users/signup', userController.userSignup);
router.post('/users/login', userController.userLogin);
router.get('/users', userController.searchUser);

module.exports = router;
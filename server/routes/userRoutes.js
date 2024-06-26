const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authenticate, authorize(['admin']), registerUser);
router.post('/login', loginUser);
router.get('/users', authenticate, authorize(['admin']), getUsers);

module.exports = router;
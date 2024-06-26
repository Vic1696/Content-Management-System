const express = require('express');
const { createContent, getContent, updateContent, deleteContent } = require('../controllers/contentController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/content', authenticate, authorize(['admin', 'editor']), createContent);
router.get('/content', authenticate, authorize(['admin', 'editor', 'viewer']), getContent);
router.put('/content/:id', authenticate, authorize(['admin', 'editor']), updateContent);
router.delete('/content/:id', authenticate, authorize(['admin']), deleteContent);

module.exports = router;
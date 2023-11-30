const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Updated route for pagination
router.get('/:postId/comments', commentController.getCommentsForPost);

module.exports = router;

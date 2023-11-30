const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Add a new comment to a post
router.post('/:postId/comments', commentController.addCommentToPost);

// Get all comments for a specific post with pagination
router.get('/:postId/comments', commentController.getCommentsForPost);

// Update a comment by ID within a post
router.put('/:postId/comments/:commentId', commentController.updateCommentInPost);

// Delete a comment by ID within a post
router.delete('/:postId/comments/:commentId', commentController.deleteCommentInPost);

module.exports = router;

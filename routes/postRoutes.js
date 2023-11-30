const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Create a new post
router.post('/', postController.createPost);

// Get all posts with pagination
router.get('/', postController.getAllPosts);

// Get a specific post by ID
router.get('/:postId', postController.getPostById);

// Update a post by ID
router.put('/:postId', postController.updatePostById);

// Delete a post by ID
router.delete('/:postId', postController.deletePostById);

module.exports = router;

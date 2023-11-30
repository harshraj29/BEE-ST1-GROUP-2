const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Updated route for pagination
router.get('/', postController.getAllPosts);

module.exports = router;

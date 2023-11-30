const Post = require('../model/postModel');

// Create a new post
const createPost = async (req, res, next) => {
  try {
    const { title, content, author, tags } = req.body;

    const newPost = new Post({
      title,
      content,
      author,
      tags,
    });

    const savedPost = await newPost.save();

    res.json(savedPost);
  } catch (error) {
    next(error);
  }
};

// Get all posts with pagination
const getAllPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;

    const posts = await Post.find()
      .skip(skip)
      .limit(pageSize);

    res.json(posts);
  } catch (error) {
    next(error);
  }
};

// Get a specific post by ID
const getPostById = async (req, res, next) => {
  try {
    const postId = req.params.postId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
};

// Update a post by ID
const updatePostById = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const { title, content, author, tags } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, author, tags },
      { new: true } // Return the modified document rather than the original
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

// Delete a post by ID
const deletePostById = async (req, res, next) => {
  try {
    const postId = req.params.postId;

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};

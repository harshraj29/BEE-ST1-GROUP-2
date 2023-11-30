const Comment = require('../model/commentModel');

// Add a new comment to a post
const addCommentToPost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const { content, author } = req.body;

    const newComment = new Comment({
      content,
      author,
      postId,
    });

    const savedComment = await newComment.save();

    res.json(savedComment);
  } catch (error) {
    next(error);
  }
};

// Get all comments for a specific post with pagination
const getCommentsForPost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;

    const comments = await Comment.find({ postId })
      .skip(skip)
      .limit(pageSize);

    res.json(comments);
  } catch (error) {
    next(error);
  }
};

// Update a comment by ID within a post
const updateCommentInPost = async (req, res, next) => {
  try {
    const { postId, commentId } = req.params;
    const { content, author } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { content, author },
      { new: true } // Return the modified document rather than the original
    );

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(updatedComment);
  } catch (error) {
    next(error);
  }
};

// Delete a comment by ID within a post
const deleteCommentInPost = async (req, res, next) => {
  try {
    const { postId, commentId } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCommentToPost,
  getCommentsForPost,
  updateCommentInPost,
  deleteCommentInPost,
};

const Comment = require('../model/commentModel');


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

module.exports = {
  getCommentsForPost,
};

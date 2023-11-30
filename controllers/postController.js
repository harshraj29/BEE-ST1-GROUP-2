// Update the require statement for the correct path
const Post = require('../model/postModel');

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



module.exports = {
  getAllPosts,
};

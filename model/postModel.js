const mongoose = require('../config/db'); // Change this line

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 255 },
  content: { type: String, required: true, maxLength: 5000 },
  author: { type: String, required: true },
  tags: [{ type: String, maxLength: 50 }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

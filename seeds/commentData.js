const { Comment } = require("../models");
//array of sample data to seed comment table
const commentData = [
  {
    comment_text: "Love this post!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Great post!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Okay post.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "I disagree.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I do not like this post.",
    user_id: 5,
    post_id: 1,
  },
];
//function to seed comments table with sample data
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

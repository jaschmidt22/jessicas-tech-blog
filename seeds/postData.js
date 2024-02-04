const { Post } = require("../models");
//array of sample data to seed post table
const postData = [
  {
    title: "First Blog Post",
    content: "I love this product.",
    user_id: 1,
  },
  {
    title: "Second Blog Post",
    content: "This product is great.",
    user_id: 2,
  },
  {
    title: "Third Blog Post",
    content: "This product is okay.",
    user_id: 3,
  },
  {
    title: "Fourth Blog Post",
    content: "I don't like this product.",
    user_id: 4,
  },
  {
    title: "Fifth Blog Post",
    content: "I hate this product.",
    user_id: 5,
  },
];
//function to seed posts table with sample data
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

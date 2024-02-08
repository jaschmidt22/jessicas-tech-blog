//import the necessary models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//define the relationships between the models
User.hasMany(Post, {
  foreignKey: "user_id", //set up the foreign key relationship
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

//export the models
module.exports = { User, Post, Comment };

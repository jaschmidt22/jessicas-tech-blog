//import packages and models
const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//get all posts with associated username
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get one post by ID with associated username
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment, //include comments with associated username
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with that id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//create a new post with authenticated user
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
//update an existing post with authenticated user
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedPost) {
      res.status(404).json({ message: "No post found with that id" });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a post with authenticated user
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // delete all comments related to the post
    await Comment.destroy({
      where: { post_id: req.params.id },
    });

    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });

    if (!deletedPost) {
      res.status(404).json({ message: "No post found with that id" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//export the router
module.exports = router;

//import packages and models
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// route to render homepage
router.get("/", async (req, res) => {
  try {
    //find all posts woth particular username
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    //change post data to plain JavaScript object
    const posts = postData.map((post) => post.get({ plain: true }));
    //render homepage
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//route to render post by id
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    //find post by ID with associated username and comments with associated usernames
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    //change post data to plain JavaScript object
    const post = postData.get({ plain: true });
    //render post data and login status
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//route to render dashboard page with all posts by current user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });
    //convert post data to plain JavaScript object
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//route to render login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard"); //if user is logged in, redirect to dashboard
    return;
  }
  res.render("login");
});
//route to render signup page
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard"); //if user is logged in, redirect to dashboard
    return;
  }
  res.render("signup");
});

//render the new post page
router.get("/newpost", (req, res) => {
  if (req.session.logged_in) {
    res.render("newpost");
    return;
  }
  res.redirect("/login");
});

//render the edit post page
router.get("/editpost/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    //convert post data to plain JavaScript object
    const post = postData.get({ plain: true });

    res.render("editpost", {
      //render edit post page
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// module exports router
module.exports = router;

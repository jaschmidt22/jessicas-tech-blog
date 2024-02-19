//import the required modules
const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

//set up the routes
router.use("/users", userRoutes); //routes for user functionality
router.use("/posts", postRoutes); //routes for post functionality
router.use("/comments", commentRoutes); //routes for comment functionality

//export the router
module.exports = router;

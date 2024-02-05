//import the necessary modules and routes

const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

//set up routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

//xxport the router
module.exports = router;

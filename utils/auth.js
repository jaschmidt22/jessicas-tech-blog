//middleware to check if user is logged in
const withAuth = (req, res, next) => {
  //if user is not logged in redirect to login page
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    //if user is logged in use function that will render the page
    next();
  }
};

//export the function
module.exports = withAuth;

//Importing required dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
//Creating express app and setting port

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

//Set up session object with secret, cookie, and store
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//use session middleware
app.use(session(sess));

//parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//serving static files such as images from public directory
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//use session middleware to create session object and store
// app.use(
//   session({
//     secret: process.env.SECRET,
//     store: new SequelizeStore({ db: sequelize }),
//     resave: false,
//     saveUninitialized: false,
//   })
// );
//use routes from controller
app.use(routes);
//sync sequelize models with database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

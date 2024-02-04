//import the seed data functions
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

//import the sequelize connection
const sequelize = require("../config/connection");

//function to seed all data
const seedAll = async () => {
  //sync the sequelize models
  await sequelize.sync({ force: true });

  //call each of the seed data functions
  await seedUsers();
  await seedPosts();
  await seedComments();

  //exit the process
  process.exit(0);
};

//call the seedAll function to seed the database
seedAll();

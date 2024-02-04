const { User } = require("../models");

//array of sample data to seed user table
const userData = [
  {
    username: "user1",
    email: "user1@techblog.com",
    password: "password1",
  },
  {
    username: "user2",
    email: "user2@techblog.com",
    password: "password2",
  },
  {
    username: "user3",
    email: "user3@techblog.com",
    password: "password3",
  },
  {
    username: "user4",
    email: "user4@techblog.com",
    password: "password4",
  },
  {
    username: "user5",
    email: "user5@techblog.com",
    password: "password5",
  },
];
//function to seed users table with sample data
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

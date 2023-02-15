const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

console.log(process.env.SEQUELIZE_DB)

const sequelize = new Sequelize(process.env.SEQUELIZE_DB, process.env.SEQUELIZE_USER, process.env.SEQUELIZE_PASSWORD, {
    host: process.env.SEQUELIZE_HOST,
    dialect: "mysql",
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });


  
  const UserList = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
    uuID: {
      type: DataTypes.STRING
    },
  });


  sequelize
  .sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });


  module.exports = {
    UserList: UserList,
  }
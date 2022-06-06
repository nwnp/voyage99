const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const User = require("./user");

const db = {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: process.env.DB_PORT,
  dialect: config.dialect,
};

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
});

db.sequelize = sequelize;

db.User = User;

module.exports = db;

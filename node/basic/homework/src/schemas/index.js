const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true);
  mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_MANAGER}`,
    { dbName: process.env.DB_DATABASE },
    (err) => {
      if (err) {
        console.error("db connection error", err);
      } else {
        console.log("mongodb connection success");
      }
    }
  );
};

mongoose.connection.on("disconnected", () => {
  console.error("mongodb disconnected");
  connect();
});

module.exports = connect;

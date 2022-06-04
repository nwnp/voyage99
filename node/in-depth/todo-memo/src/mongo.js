const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    `mongodb://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@localhost:${process.env.MONGO_PORT}/${process.env.MONGO_USER}`,
    {
      dbName: process.env.MONGO_DATABASE,
    },
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("mongodb connection success");
      }
    }
  );
};

mongoose.connection.on("error", (err) => {
  console.error("connection error", err);
});

module.exports = connect;

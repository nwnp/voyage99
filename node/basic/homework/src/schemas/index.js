const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true);

  mongoose.connect(
    "mongodb://mongo:mongo@localhost:27017/admin",
    { dbName: "hw_first" },
    (err) => {
      if (err) {
        console.error("db connection error", err);
      } else {
        console.log("mongodb connection success");
      }
    }
  );
};

mongoose.connection.on("error", (err) => {
  console.error("mongodb connection error", err);
});

mongoose.connection.on("disconnected", () => {
  console.error("mongodb disconnected");
  connect();
});

module.exports = connect;

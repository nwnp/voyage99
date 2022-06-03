const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true);
  mongoose.connect(
    "mongodb://mongo:mongo@localhost:27017/admin",
    {
      dbName: "spa_mall",
      ignoreUndefined: true,
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

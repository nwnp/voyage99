const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb://mongo:mongo@localhost/admin",
    {
      dbName: "shopping-demo",
    },
    (err) => {
      if (err) {
        console.log("db connection error");
      } else {
        console.log("db connection success");
      }
    }
  );
};

module.exports = connect;

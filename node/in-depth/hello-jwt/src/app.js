const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connect = require("./schemas/index");

dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT || 8080;

const userRouter = require("./routes/user");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("src/assets"));

app.use("/api", express.urlencoded({ extended: false }), [userRouter]);

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중....");
});

const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connect = require("./mongo");

dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT;
const indexRouter = require("./routes/index");
const todoRouter = require("./routes/todo");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("src/assets"));

app.use("/", indexRouter);
app.use("/api", todoRouter);
// app.use("/api");

app.listen(PORT, () => {
  console.log(`서버(${PORT})가 켜졌어요!`);
});

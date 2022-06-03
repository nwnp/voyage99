const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts");
const connect = require("./schemas/index");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// connection
connect();

app.use(morgan("dev"));
app.use(express.json());

/** middleware */
// 모든 요청에 대해서 로그를 남김
app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl, " - ", new Date());
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>hello world!</h1>");
});

app.use("/api", [goodsRouter, cartsRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트에서 대기 중...");
});

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const goodsRouter = require("./routes/goods");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

/** middleware */
// 모든 요청에 대해서 로그를 남김
app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl, " - ", new Date());
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>hello world!</h1>");
});

app.use("/api", goodsRouter);

app.listen(PORT, () => {
  console.log(PORT, "포트에서 대기 중...");
});

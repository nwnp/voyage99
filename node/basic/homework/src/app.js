const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const config = require("./config/env/development");
const connect = require("./schemas/index");

connect();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const secret = process.env.COOKIE_SECRET;

const indexRouter = require("./routes/index");
const commentRouter = require("./routes/comment");
const postRouter = require("./routes/posts");

app.set("views", "src/views");
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use("/public", express.static("src/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser(secret));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: config.sessionSecret,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/", indexRouter);
app.use("/api", [commentRouter, postRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트에서 대기 중....");
});

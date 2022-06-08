const expres = require("express");
const Http = require("http");
const socketIo = require("socket.io");

const app = expres();
const http = Http.createServer(app);

const io = socketIo(http, {
  cors: {
    origin: "*",
  },
  methods: ["GET", "POST"],
});

io.on("connection", (socket) => {
  console.log("connection success");
  socket.send("The server sent a message: connection success");
  socket.emit("customEventName", "new event?");
});

app.get("/test", (req, res, next) => {
  res.send("test");
});

http.listen(8080, () => {
  console.log("The server is on");
});

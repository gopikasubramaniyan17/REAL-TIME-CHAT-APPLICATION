const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

let messages = [];

io.on("connection", (socket) => {
  socket.emit("messageHistory", messages);

  socket.on("sendMessage", (data) => {
    messages.push(data);
    socket.broadcast.emit("receiveMessage", data);
  });
});

server.listen(5000, () =>
  console.log("Server running on port 5000")
);

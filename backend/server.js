import express from "express";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import { Server } from "socket.io";
import authRouter from "./routes/auth.routes.js";
import messRouter from "./routes/message.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import reactionRouter from "./routes/reaction.routes.js";
import publicationRouter from "./routes/publication.routes.js";

dotenv.config();

const app = express();
const port = 5000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

app.use("/user", authRouter);
app.use("/message",messRouter)
app.use("/reaction",reactionRouter)
app.use("/publication",publicationRouter)
app.use("/uploads",express.static("uploads"));

//  Middleware d'auth Socket.IO
io.use((socket, next) => {
  const token = socket.handshake.auth?.token;
  if (!token) return next(new Error("auth error"));

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = user;
    next();
  } catch {
    next(new Error("auth error"));
  }
});

//  Connexion Socket.IO
io.on("connection", (socket) => {
  console.log(` User connected: ${socket.user.username}`);

  socket.on("sendMessage", (msg) => {
    console.log(" Message reçu:", msg);
    io.emit("newMessage", {
      user: socket.user.username,
      text: msg,
      date: new Date(),
    });
  });

  socket.on("disconnect", () => {
    console.log(` User disconnected: ${socket.user.username}`);
  });
});

server.listen(port, () => {
  console.log(` Serveur en ligne sur le port ${port}`);
});

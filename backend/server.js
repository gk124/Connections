import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app=express();  //--.after integrating socket.io in server, it is imported from socket.js file, for real time
const PORT = process.env.PORT;

const __dirname = path.resolve();

dotenv.config();
app.use(express.json()); // to parse the incoming request with json payloads
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB;
  console.log(`Server running at port ${PORT}`);
});

// app.listen(PORT,()=>{
//     connectToMongoDB;
//     console.log(`Server running at port ${PORT}`);
// });

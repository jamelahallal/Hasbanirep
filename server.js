import express from "express";
import path from "path";
import cors from "cors";
import productsRoutes from "./backend/routes/products.js";
import adminRoutes from "./backend/routes/admin.js";
import dotenv from "dotenv";
import authRoutes from "./backend/routes/auth.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://hasbani.netlify.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/products", productsRoutes);
app.use("/admin", adminRoutes);

import fs from "fs";
app.get("/debug/uploads", (req, res) => {
  const uploadsPath = path.resolve("uploads");
  if (!fs.existsSync(uploadsPath)) {
    return res.json({ message: "Uploads folder does NOT exist!" });
  }

  const files = fs.readdirSync(uploadsPath);
  res.json({ message: "Uploads folder exists", files });
});

app.get("/debug/image/:filename", (req, res) => {
  const filePath = path.resolve("uploads", req.params.filename);
  console.log("Trying to serve file:", filePath);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found!");
  }

  res.sendFile(filePath);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

import productsRoutes from "./backend/routes/products.js";
import adminRoutes from "./backend/routes/admin.js";
import authRoutes from "./backend/routes/auth.js";

dotenv.config();

const app = express();

// =====================
// Middleware
// =====================

// CORS: allow your frontend
app.use(
  cors({
    origin: "https://hasbani.netlify.app",
    credentials: true,
  })
);

// JSON body parser
app.use(express.json());

// =====================
// Routes
// =====================

app.use("/auth", authRoutes);
app.use("/products", productsRoutes);
app.use("/admin", adminRoutes);

// Serve uploaded files
app.use("/uploads", express.static(path.resolve("uploads")));

// =====================
// Debug Routes
// =====================

// Simple backend alive check
app.get("/debug", (req, res) => {
  res.json({ message: "Backend is alive!" });
});

// List uploads folder
app.get("/debug/uploads", (req, res) => {
  const uploadsPath = path.resolve("uploads");
  if (!fs.existsSync(uploadsPath)) {
    return res.json({ message: "Uploads folder does NOT exist!" });
  }

  const files = fs.readdirSync(uploadsPath);
  res.json({ message: "Uploads folder exists", files });
});

// Serve single image for debug
app.get("/debug/image/:filename", (req, res) => {
  const filePath = path.resolve("uploads", req.params.filename);
  console.log("Trying to serve file:", filePath);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found!");
  }

  res.sendFile(filePath);
});

// =====================
// Start server
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

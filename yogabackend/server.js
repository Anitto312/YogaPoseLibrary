const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors({ origin: ["https://yoga-pose-library.vercel.app/"], credentials: true }));
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI).then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
    res.send("Yoga Pose Guide Backend is Running...");
});

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

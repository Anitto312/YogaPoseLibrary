const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use(cors({ origin: "https://yoga-pose-library.vercel.app", credentials: true }));

app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB Connection Error:", err));
app.get("/", (req, res) => {
  res.send("Yoga Pose Guide Backend is Running...");
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

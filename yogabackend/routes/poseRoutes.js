const express = require("express");
const router = express.Router();
const Pose = require("../models/PoseModel"); // MongoDB Model

// GET all yoga poses
router.get("/poses", async (req, res) => {
    try {
        const poses = await Pose.find();
        res.json(poses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

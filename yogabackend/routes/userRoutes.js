import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "You are authorized to view this page!" });
});

export default router;

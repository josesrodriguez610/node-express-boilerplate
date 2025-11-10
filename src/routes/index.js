import express from "express";
import example1Routes from "../modules/example1/example1.routes.js";
import example2Routes from "../modules/example2/example2.routes.js";

const router = express.Router();

// Root health check
router.get("/", (req, res) => {
  res.json({ message: "🚀 API is running" });
});

// Mount module routes
router.use("/example1", example1Routes);
router.use("/example2", example2Routes);

export default router;

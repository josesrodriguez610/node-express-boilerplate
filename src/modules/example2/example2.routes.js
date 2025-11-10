import express from "express";
import { getExample2, createExample2 } from "./example2.controller.js";

const router = express.Router();

// GET /api/example2
router.get("/", getExample2);

// POST /api/example2
router.post("/", createExample2);

export default router;

import express from "express";
import { getExample1, createExample1 } from "./example1.controller.js";

const router = express.Router();

router.get("/", getExample1);
router.post("/", createExample1);

export default router;

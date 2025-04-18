import express from "express";
import {
  testRoute,
  getAllJobs,
  addJob,
  deleteJob,
  getAJob,
  updateJob,
} from "../controllers/jobController.js";

const router = express.Router();

// Test
router.get("/test", testRoute);

// GET
router.get("/", getAllJobs);

// GET a Job
router.get("/:id", getAJob);

// POST
router.post("/", addJob);

// PUT
router.put("/:id", updateJob);

// DELETE
router.delete("/:id", deleteJob);

export default router;

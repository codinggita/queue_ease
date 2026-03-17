import express from "express";
import {
  getQueueStatus,
  getCurrentToken,
  getAllTokens,
  nextToken,
  createService,
  getServices,
} from "../controllers/queueController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Queue Routes
router.route("/status").get(getQueueStatus);
router.route("/current").get(getCurrentToken);
router.route("/services").get(getServices);

// Admin Routes (handled via the same router for simplicity or separate, but prefix might dictate)
router.route("/tokens").get(protect, admin, getAllTokens);
router.route("/next-token").put(protect, admin, nextToken);
router.route("/service").post(protect, admin, createService);

export default router;

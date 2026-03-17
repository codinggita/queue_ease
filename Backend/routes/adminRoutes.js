import express from "express";
import {
  getAllTokens,
  nextToken,
  createService,
} from "../controllers/queueController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/tokens").get(protect, admin, getAllTokens);
router.route("/next-token").put(protect, admin, nextToken);
router.route("/service").post(protect, admin, createService);

export default router;

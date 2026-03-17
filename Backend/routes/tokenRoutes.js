import express from "express";
import {
  bookToken,
  getUserTokens,
  cancelToken,
} from "../controllers/tokenController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/book").post(protect, bookToken);
router.route("/").get(protect, getUserTokens);
router.route("/cancel/:id").put(protect, cancelToken);

export default router;

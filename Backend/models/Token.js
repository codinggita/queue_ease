import mongoose from "mongoose";

const tokenSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Service",
    },
    tokenNumber: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["waiting", "serving", "completed", "cancelled"],
      default: "waiting",
    },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model("Token", tokenSchema);
export default Token;

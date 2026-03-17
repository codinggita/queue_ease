import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;

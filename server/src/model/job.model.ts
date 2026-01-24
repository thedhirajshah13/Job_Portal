import mongoose, { ObjectId } from "mongoose";
import userModel from "./user.model.js";

interface jobs {
  title: string;
  company: string;
  location: string;
  employment_type: string;
  seniority_level: string;
  experience: string;
  min_exp: number;
  max_exp: number;
  country: string;
  companytype: string;
  isActive: boolean;
  createdBy: ObjectId;
}

const jobSchema = new mongoose.Schema<jobs>(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      index: true,
    },

    employment_type: {
      type: String,
      required: true,
    },
    seniority_level: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },
    min_exp: {
      type: Number,
      default: 0,
    },
    max_exp: {
      type: Number,
      default: 0,
    },

    country: {
      type: String,
      required: true,
    },
    companytype: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },

  { timestamps: true },
);

const jobModel = mongoose.model("jobs", jobSchema);

export default jobModel;

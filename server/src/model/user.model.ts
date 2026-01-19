import mongoose from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
  role: "applicant" | "recruiter";
}

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["applicant", "recruiter"],
    required: true,
  },
});

const userModel = mongoose.model<User>("users", userSchema);
export default userModel;

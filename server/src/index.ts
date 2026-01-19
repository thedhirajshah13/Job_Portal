import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

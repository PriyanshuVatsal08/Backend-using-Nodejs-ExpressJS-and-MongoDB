import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({})

console.log(
  "MongoDB URI loaded:",
  Boolean(process.env.MONGODB_URI)
);



connectDB()
// db/index.js
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async (app) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("Database connected successfully");

    app.on("error", (error) => {
      console.log("App error:", error);
      throw error;
    });
  } catch (error) {
    console.error("Error connecting to DB:", error);
    throw error;
  }
};

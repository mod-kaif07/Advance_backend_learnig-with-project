import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("Database connected successfully");

    app.on("error", (error) => {
      console.log("App error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to DB or starting server:", error);
    throw error;
  }
})();

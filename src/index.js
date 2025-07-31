import express from "express";
import { connectDB } from "./db/index.js";

const app = express();

const startServer = async () => {
  try {
    await connectDB(app);

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();

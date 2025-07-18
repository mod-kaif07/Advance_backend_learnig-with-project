import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Configure dotenv to load variables from .env
dotenv.config({
  path: "./.env",
});

// Call the database connection function
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is listernig ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

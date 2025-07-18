// Importing required packages
import express from "express"; // Core Express framework to build the backend
import cors from "cors";       // CORS middleware to allow cross-origin requests
import cookieParser from "cookie-parser"; // Middleware to parse cookies from incoming requests

// Creating an Express app instance
const app = express();

// Enable CORS for requests from allowed origins
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests only from this origin
    credentials: true                // Allow credentials (cookies, authorization headers, etc.)
}));

// Middleware to parse incoming JSON payloads with size limit
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data (like form submissions)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Enable cookie parsing for incoming requests
app.use(cookieParser());

// Export the app to be used in other files (like index.js)
export { app };

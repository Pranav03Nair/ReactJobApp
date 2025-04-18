import dotenv from "dotenv";
dotenv.config();

import express, { urlencoded } from "express";
import cors from "cors";
import connectToDb from "./config/mongoDb.js";
import jobRoutes from "./routes/jobRoutes.js";
// Port
const port = process.env.PORT;
const app = express();

// DB
connectToDb();

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
// ErrorHandler

// Routes
app.use("/api/jobs", jobRoutes);

// Server running - Listen
app.listen(port, () =>
  console.log(`Server runnning on Port - http://localhost:${port}/`)
);

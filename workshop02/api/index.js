import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is up and running at port ${PORT}`)
});
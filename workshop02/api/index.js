import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DB_NAME } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.716de.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

mongoose.connect(MONGO_URI, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("MongoDB Connected!");
    app.listen(PORT, HOST, () => {
      console.log(`Server is up and running at port ${PORT}`)
    });
  }
});
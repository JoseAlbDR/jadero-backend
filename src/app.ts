import "express-async-errors";
import "dotenv/config";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import express from "express";

import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import projectRouter from "./routes/projectRoutes";
import dbConnect from "./db/connect";

// Extra security
import helmet from "helmet";
import cors from "cors";
// import rateLimiter from "express-rate-limit";
import xss from "./middleware/xssMiddleware";

const app = express();

// const apiLimiter = rateLimiter({
//   windowMs: 15 * 60 * 1000,
//   message:
//     "Too many API request from this IP, please try again after fifteen minutes",
//   max: 100,
//   standardHeaders: true,
//   legacyHeaders: false,
// });

// middleware
app.set("trust proxy", 1);
app.use(express.static("./src/public"));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);
app.use(xss);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("/api/v1/projects", projectRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await dbConnect();
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

void start();

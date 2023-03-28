import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import courseRouter from "./Routes/courseRoutes.js";

const app = express();
dotenv.config();

//db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route middlewares
app.get("/api", function (req, res) {
  res.send("GET request to the api");
});

app.use("/api/course", courseRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);

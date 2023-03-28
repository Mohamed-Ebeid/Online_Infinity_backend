import express from "express";
import { courses, postCourse } from "../controllers/courseController.js";

const courseRouter = express.Router();

//api for getting all courses
courseRouter.get("/", courses);
courseRouter.post("/", postCourse);

export default courseRouter;

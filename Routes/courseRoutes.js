import express from "express";
import {
  courses,
  postCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const courseRouter = express.Router();

//api for getting all courses
courseRouter.get("/", courses);
courseRouter.post("/", postCourse);
courseRouter.delete("/:courseId", deleteCourse);

export default courseRouter;

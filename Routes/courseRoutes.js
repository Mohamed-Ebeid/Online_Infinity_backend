import express from "express";
import {
  courses,
  course,
  postCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController.js";

const courseRouter = express.Router();

//api for getting all courses
courseRouter.get("/", courses);
courseRouter.get("/:courseId", course);
courseRouter.post("/", postCourse);
courseRouter.delete("/:courseId", deleteCourse);
courseRouter.put("/:courseId", updateCourse);

export default courseRouter;

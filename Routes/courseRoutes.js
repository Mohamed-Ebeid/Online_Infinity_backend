import express from "express";
import {
  courses,
  course,
  postCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController.js";

const courseRouter = express.Router();

//api courses
courseRouter.get("/", courses); //all
courseRouter.get("/:courseId", course); //single
courseRouter.post("/", postCourse); //add
courseRouter.delete("/delete/:courseId", deleteCourse); //delete
courseRouter.put("/add/:courseId", updateCourse); //update

export default courseRouter;

//creating the courses models for mongoDB

import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var courseSchema = new Schema(
  {
    //creating collections
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: String, required: true },
    numberOfSeats: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;

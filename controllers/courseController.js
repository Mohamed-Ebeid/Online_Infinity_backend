import Course from "../Models/courseModel.js";

//Getting all the courses
export const courses = async (req, res) => {
	try {
		const courses = await Course.find();
		//authorization, we could have used it as middleware but since it's a small backend I didn't see the need to
		if (req.headers && req.headers.auth !== "admin") {
			return res.status(401).send("Unauthorized access!");
		}
		if (courses.length === 0) {
			return res.status(404).send("No courses were found!");
		} else {
			return res.send(courses);
		}
	} catch (e) {
		return res.status(400).send(e.message);
	}
};

//Adding a new curse
export const postCourse = async (req, res) => {
	if (req.headers && req.headers.auth !== "admin") {
		return res.status(401).send("Unauthorized access!");
	}
	try {
		const course = await new Course({
			...req.body,
		}).save();
		res.json(course);
	} catch (e) {
		return res.status(400).send(e.message);
	}
};

//Deleting a course
export const deleteCourse = async (req, res) => {
	if (req.headers && req.headers.auth !== "admin") {
		return res.status(401).send("Unauthorized access!");
	}
	try {
		const deleted = await Course.findByIdAndRemove(req.params.courseId);
		res.json("Deleted successfully! ");
	} catch (e) {
		return res.status(400).send(e.message);
	}
};

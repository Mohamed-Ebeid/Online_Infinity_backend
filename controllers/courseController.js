import Course from "../Models/courseModel.js";

export const courses = async (req, res) => {
	try {
		const courses = await Course.find();
		if (req.headers && req.headers.auth !== "admin") {
			return res.status(401).send("Unauthorized access!");
		}
		if (courses.length === 0) {
			return res.status(404).send("No courses were found!");
		} else {
			return res.send(courses);
		}
	} catch (e) {
		return res.status(400).send("Error. Try again.");
	}
};

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
		return res.status(400).send("Error. Try again.");
	}
};

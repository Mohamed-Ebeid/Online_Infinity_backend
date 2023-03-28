import Course from "../Models/courseModel.js";

export const courses = async (req, res) => {
	try {
		const courses = await Course.find();
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
	try {
		const course = await new Course({
			...req.body,
		}).save();
		res.json(course);
	} catch (e) {
		return res.status(400).send("Error. Try again.");
	}
};

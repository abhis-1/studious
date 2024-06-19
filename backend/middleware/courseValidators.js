// the course will have a course id, name, description, and a set of topics
// each track will belong to a topic and will have a track id and it will be a pdf file

const courseSchema = z.object({
  courseId: z.string().uuid("Invalid course ID"),
  name: z.string().min(3, "Course name must be at least 3 characters").max(50, "Course name must be at most 50 characters"),
  description: z.string().max(500, "Description must be at most 500 characters"),
  topics: z.array(z.string().uuid("Invalid topic ID")).min(1, "Course must have at least 1 topic")
});

const trackSchema = z.object({
  trackId: z.string().uuid("Invalid track ID"),
  topicId: z.string().uuid("Invalid topic ID"),
  name: z.string().min(3, "Track name must be at least 3 characters").max(50, "Track name must be at most 50 characters"),
  file: z.string().url("Invalid file URL")
});

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map(err => ({ msg: err.message })) });
  }
};

module.exports = {
  courseSchema,
  trackSchema,
  validate
};
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    setoftopics: { type: [String], required: true },
    courseId: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Course', CourseSchema);

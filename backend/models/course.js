const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseId: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    courseImg: { type: String, required: true }, // New field for the course image URL
    setOfTracks: { type: [String], required: true },
});

module.exports = mongoose.model('Course', CourseSchema);


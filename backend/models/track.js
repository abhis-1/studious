const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    trackId: { type: String, unique: true, required: true },
    courseId: { type: String, required: true },
    pdf: { type: String, required: true } // URL or path to the PDF
});

module.exports = mongoose.model('Track', TrackSchema);

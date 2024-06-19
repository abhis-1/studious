const Track = require('../models/track');

exports.createTrack = async (req, res) => {
    try {
        const { trackId, courseId, pdf } = req.body;
        const track = new Track({ trackId, courseId, pdf });
        await track.save();
        res.status(201).json(track);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTrackById = async (req, res) => {
    try {
        const track = await Track.findOne({ trackId: req.params.trackId });
        if (!track) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.json(track);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTrack = async (req, res) => {
    try {
        const track = await Track.findOneAndUpdate(
            { trackId: req.params.trackId },
            req.body,
            { new: true }
        );
        if (!track) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.json(track);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTrack = async (req, res) => {
    try {
        const track = await Track.findOneAndDelete({ trackId: req.params.trackId });
        if (!track) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.json({ message: 'Track deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

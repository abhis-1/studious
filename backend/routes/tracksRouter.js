const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

router.post('/', trackController.createTrack);
router.get('/:trackId', trackController.getTrackById);
router.put('/:trackId', trackController.updateTrack);
router.delete('/:trackId', trackController.deleteTrack);

module.exports = router;

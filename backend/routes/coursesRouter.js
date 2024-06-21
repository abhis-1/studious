// Description: Router for courses.
// This router will handle all the routes for courses.
// It will use the courseController to handle the logic for each route.
// The courseController will use the course model to interact with the database.
// The courseValidator will be used to validate the course data before it is sent to the controller.
// The isUser, isAdmin, isNotLoggedIn middleware will be used to protect the routes and ensure that only authorized users can access them.
const Course = require("../models/course");
const User = require("../models/user");
const isUser = require("../middleware/isUser");
const isAdmin = require("../middleware/isAdmin");
const isNotLoggedIn = require("../middleware/isNotLoggedIn");


const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/', courseController.createCourse);
router.get('/:courseId', courseController.getCourseById);
router.put('/:courseId', courseController.updateCourse);
router.delete('/:courseId', courseController.deleteCourse);

module.exports = router;

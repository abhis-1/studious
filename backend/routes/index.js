const express = require("express");
const userRouter = require("./userRouter");
const coursesRouter = require("./coursesRouter");
const tracksRouter = require("./tracksRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/courses", coursesRouter);
router.use("/tracks", tracksRouter);

module.exports = router;

const express = require("express");
const userRouter = require("./userRouter");
const coursesRouter = require("./coursesRouter");
const topicsRouter = require("./topicsRouter");

const router = express.Router();

router.use("/user", userRouter);
// router.use("/courses", coursesRouter);
// router.use("/topics", topicsRouter);

module.exports = router;

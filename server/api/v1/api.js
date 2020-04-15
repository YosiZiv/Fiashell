const express = require("express");
const userRoutes = require("./routes/userRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const router = express.Router();

router.use("/user", userRoutes);
router.use("/session", sessionRoutes);
module.exports = router;

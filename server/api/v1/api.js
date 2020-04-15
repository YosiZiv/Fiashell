const express = require("express");
const publicRoutes = require("./routes/publicRoutes");

const router = express.Router();

router.use("/public", publicRoutes);

module.exports = router;

require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./api/api");
const PORT = process.env.PORT || 4000;
const helmet = require("helmet");
const morgan = require("morgan");

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", api);
app.use(express.static("public/build"));

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: error.message,
    stack: error.stack,
  });
});

app.get("*", (req, res, next) => {
  if (req.path === "/api") {
    next();
  }
  res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => console.log("Server is running on Port: " + PORT));

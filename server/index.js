const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./api/api");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);
app.use(express.static("public/build"));

app.get("*", (req, res) => {
  if (req.path === "/api") {
    next();
  }
  res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => console.log("Server is running on Port: " + PORT));

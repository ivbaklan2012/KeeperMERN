require("dotenv").config();
const express = require("express");
const path = require("path");
const notesRoutes = require("./routes/notes");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/notes", notesRoutes);
app.use("/api/user", userRoutes);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Up and running! Port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

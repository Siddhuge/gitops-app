const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GitOps App Version 1 🚀");
});

app.listen(3000, () => console.log("Running on port 3000"));
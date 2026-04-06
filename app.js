const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GitOps App Version 2 is Live using GitOps 🚀");
});

app.listen(3000, () => console.log("Running on port 3000"));

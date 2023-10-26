const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the local server!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const appListen = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "jokes.html"));
});
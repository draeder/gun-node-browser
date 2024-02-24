const express = require("express");
const Gun = require("gun");

const app = express();
const port = 3000;

// Serve your static files (HTML, CSS, JS, etc.)
app.use(express.static("public"));

// Use Gun middleware
app.use(Gun.serve);

// Start the server
const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Attach Gun to the server
Gun({ web: server });

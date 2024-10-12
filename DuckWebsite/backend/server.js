// server.js

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: false }));

// Route to handle form submissions
app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Save form data to a file
  const dataToSave = JSON.stringify(formData);

  // You can use fs to write data to a file (data.txt or similar)
  fs.writeFile("form-data.txt", dataToSave, (err) => {
    if (err) {
      console.error("Error saving form data:", err);
      return res.status(500).send("Failed to save data");
    }
    console.log("Form data saved successfully");
    res.send("Form data saved successfully");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

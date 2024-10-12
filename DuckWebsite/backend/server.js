const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
const cors = require("cors");

// Use CORS middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));s
// Middleware to parse JSON body
app.use(bodyParser.json()); // Add this line to parse JSON input

// Route to handle form submissions
app.post("/submit-form", (req, res) => {
  const formData = req.body;
  // Save form data to a file
  const dataToSave = JSON.stringify(formData, null, 2); // Pretty print JSON

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
  console.log(`Server running on http://localhost:${port}/shop`);
});

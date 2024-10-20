const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
const cors = require("cors");

// Use CORS middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Route to handle form submissions
app.post("/shop/submit-form", (req, res) => {
  console.log("Form data received:", req.body);
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

// 404 error handling (Place this AFTER all other routes)
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

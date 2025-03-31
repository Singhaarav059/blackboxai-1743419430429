const express = require('express');
const multer = require('multer');
const path = require('path');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Load disease solutions
const diseaseData = require('./diseases.json');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No image uploaded');
    }

    // Simulate model prediction (replace with actual model in production)
    const diseases = Object.keys(diseaseData);
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    const solution = diseaseData[randomDisease];

    res.render('results', {
      disease: randomDisease.replace(/_/g, ' '),
      diseaseData: diseaseData,
      solutions: solution.solutions,
      prevention: solution.prevention,
      imageURL: `data:image/png;base64,${req.file.buffer.toString('base64')}`
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing image');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
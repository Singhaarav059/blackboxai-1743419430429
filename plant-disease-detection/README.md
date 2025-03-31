# Plant Disease Detection System

A complete AI-powered web application for detecting plant diseases and providing treatment solutions.

## Features
- Image upload interface with drag-and-drop support
- Disease detection (simulated in this demo)
- Detailed treatment solutions
- Prevention recommendations
- Printable results

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Add background image:
- Place your background image at `public/images/background.jpg`
- Recommended size: 1920x1080 pixels

3. For production use:
- Replace the simulated detection in `server.js` with actual TensorFlow.js model
- Place your model files in `public/models/`
- Update the model loading code in `server.js`

4. Run the application:
```bash
npm start
```

5. Access the application at:
```
http://localhost:3000
```

## Project Structure
```
plant-disease-detection/
├── public/            # Static files
│   ├── images/        # Background/UI images
│   └── models/        # ML model files
├── views/             # EJS templates
├── diseases.json      # Disease database
├── server.js          # Express server
└── package.json       # Dependencies
```

## Demo Notes
This demo uses simulated disease detection. To implement real AI detection:
1. Train a model using TensorFlow/Keras
2. Convert to TensorFlow.js format
3. Place model files in `public/models/`
4. Update the prediction logic in `server.js`
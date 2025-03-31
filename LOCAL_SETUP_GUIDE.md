# Local Setup Guide for Plant Disease Detection

## Requirements
- Node.js (v16+ recommended)
- npm (comes with Node.js)
- Git (optional)

## Installation Steps

1. **Get the project files**:
   - Download and unzip the project folder
   - OR clone with Git:
   ```bash
   git clone https://github.com/your-repo/plant-disease-detection.git
   ```

2. **Install dependencies**:
```bash
cd plant-disease-detection
npm install
```

3. **Run the application**:
```bash
npm start
```

4. **Access the application**:
- Open browser to: http://localhost:3000
- Or double-click `open-app.html`

## Windows Users
- Use Task Manager to end Node.js processes if port is busy
- For command issues, use PowerShell instead of CMD

## Troubleshooting
- Port 3000 busy? Run:
  ```bash
  npx kill-port 3000
  npm start
  ```
- Missing modules? Run:
  ```bash
  npm install
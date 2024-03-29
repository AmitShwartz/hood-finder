#!/bin/bash
#go to FrontEnd folder
cd FrontEnd

# Run npm install
npm i

# Define the path to the file
file_path="./node_modules/rn-range-slider/index.tsx"

# Check if the file exists
if [ -f "$file_path" ]; then
  # Modify the file content using Node.js onStartShouldSetPanResponderCapture from false to true
  node -e " \
        const fs = require('fs'); \
        let content = fs.readFileSync('$file_path', 'utf8'); \
        content = content.replace(/onStartShouldSetPanResponderCapture: falseFunc/g, 'onStartShouldSetPanResponderCapture: trueFunc'); \
        fs.writeFileSync('$file_path', content); \
        console.log('Code in $file_path modified successfully.'); \
    "
else
  echo "Error: File $file_path not found."
fi

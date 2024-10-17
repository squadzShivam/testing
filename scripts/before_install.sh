#!/bin/bash

# Navigate to the application directory
cd /home/ubuntu/dist

# Install dependencies (if applicable)
echo "Installing dependencies..."

rm -rf /home/ubuntu/dist
# Replace with the appropriate command for your application, e.g., for Node.js:
sudo npm install -force

echo "After install tasks completed."

// GitHub Actions Pipeline for Deploying Webpages
// File: .github/workflows/deploy.yml

name: Deploy Webpages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'

    - name: Install Dependencies
      run: npm install

    - name: Run Tests
      run: npm test

    - name: Build Project
      run: npm run build

    - name: Deploy to Firebase
      uses: w9jds/firebase-action@v1
      with:
        args: deploy
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}

// HTML for Login Page
// File: login.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  <style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 8px;
}

input {
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

  </style>
    <div class="login-container">
        <form id="login-form">
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <button type="button" id="send-otp">Send OTP</button>

            <label for="otp">OTP:</label>
            <input type="text" id="otp" name="otp" required>

            <button type="submit">Login</button>
        </form>
    </div>

    <script>
    document.getElementById('send-otp').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    // Simulate sending OTP (replace with actual Firebase logic)
    console.log(`Sending OTP to ${email}`);
    alert('OTP sent to your email!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;

    if (!otp) {
        alert('Please enter the OTP.');
        return;
    }

    // Simulate OTP verification (replace with actual Firebase logic)
    console.log(`Verifying OTP: ${otp}`);
    alert('Login successful!');
});

    </script>
</body>
</html>


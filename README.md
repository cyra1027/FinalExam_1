<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Registration</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #e8f5e9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            display: flex;
            gap: 40px;
        }
        .form-container {
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 128, 0, 0.2);
            width: 350px;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        h1 {
            text-align: center;
            color: #388e3c;
        }
        label {
            margin-bottom: 8px;
            color: #2e7d32;
        }
        input {
            margin-bottom: 16px;
            padding: 10px;
            border: 1px solid #81c784;
            border-radius: 4px;
        }
        button {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #388e3c;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form id="login-form">
                <h1>Login</h1>
                <label for="login-email">Email:</label>
                <input type="email" id="login-email" name="email" required>

                <button type="button" id="send-otp">Send OTP</button>

                <label for="login-otp">OTP:</label>
                <input type="text" id="login-otp" name="otp" required>

                <button type="submit">Login</button>
            </form>
        </div>

        <div class="form-container">
            <form id="registration-form">
                <h1>Register</h1>
                <label for="reg-name">Full Name:</label>
                <input type="text" id="reg-name" name="name" required>

                <label for="reg-email">Email:</label>
                <input type="email" id="reg-email" name="email" required>

                <label for="reg-password">Password:</label>
                <input type="password" id="reg-password" name="password" required>

                <button type="submit">Register</button>
            </form>
        </div>
    </div>

    <script>
        document.getElementById('send-otp').addEventListener('click', function() {
            const email = document.getElementById('login-email').value;
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            console.log(`Sending OTP to ${email}`);
            alert('OTP sent to your email!');
        });

        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const otp = document.getElementById('login-otp').value;
            if (!otp) {
                alert('Please enter the OTP.');
                return;
            }
            console.log(`Verifying OTP: ${otp}`);
            alert('Login successful!');
        });

        document.getElementById('registration-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            if (!name || !email || !password) {
                alert('Please fill in all fields.');
                return;
            }
            console.log(`Registering user: ${name}, Email: ${email}`);
            alert('Registration successful!');
        });
    </script>
</body>
</html>

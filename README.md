<!-- File: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up and Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Sign Up / Login</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="forms">
            <h1>Sign Up</h1>
            <form id="signup-form">
                <label for="signup-username">Username:</label>
                <input type="text" id="signup-username" required>

                <label for="signup-email">Email:</label>
                <input type="email" id="signup-email" required>

                <label for="signup-password">Password:</label>
                <input type="password" id="signup-password" required>

                <button type="submit">Sign Up</button>
            </form>

            <h1>Login</h1>
            <form id="login-form">
                <label for="login-username">Username:</label>
                <input type="text" id="login-username" required>

                <label for="login-password">Password:</label>
                <input type="password" id="login-password" required>

                <button type="submit">Login</button>
            </form>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>

<!-- File: about.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Sign Up / Login</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h1>About Us</h1>
            <p>Welcome to our website! We are dedicated to providing the best service to our users.</p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>

<!-- File: contact.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Sign Up / Login</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="contact">
            <h1>Contact Us</h1>
            <form id="contact-form">
                <label for="contact-name">Name:</label>
                <input type="text" id="contact-name" required>

                <label for="contact-email">Email:</label>
                <input type="email" id="contact-email" required>

                <label for="contact-message">Message:</label>
                <textarea id="contact-message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>

<!-- File: styles.css -->
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header {
    background: #333;
    color: #fff;
    padding: 10px 0;
}

header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

header ul li {
    margin: 0 15px;
}

header ul li a {
    color: #fff;
    text-decoration: none;
}

form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form label {
    display: block;
    margin-bottom: 5px;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    display: block;
    width: 100%;
    background: #333;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background: #555;
}

/* File: script.js */
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const contactForm = document.getElementById('contact-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign up form submitted!');
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login form submitted!');
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
}

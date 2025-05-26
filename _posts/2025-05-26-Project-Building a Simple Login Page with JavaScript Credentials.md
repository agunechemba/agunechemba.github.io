# 🧑‍💻 Project: Building a Simple Login Page with JavaScript Credentials

<p style="text-align: center;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_little_girl_opening_a_large_door.jpeg" style="width: 100%;">
</p>

In this tutorial, you'll learn how to build a basic login page using **HTML**, **CSS**, and **JavaScript** with hardcoded credentials stored in a separate file.

---

## 🗂️ File Structure

```
login-page-with-credentials/
├── index.html
├── credentials.js
└── script.js
```

---

## 📄 Step 1: Create the HTML Form

**index.html**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <style>
/* General Styles */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #333;
}

/* Container for the Form */
.login-container {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

/* Form Title */
.login-container h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #2575fc;
}

/* Input Fields */
.login-container input {
    width: 100%;
    padding: 0.75rem;
    margin: 0.5rem 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
}

.login-container input:focus {
    border-color: #2575fc;
}

/* Submit Button */
.login-container button {
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
    background: #2575fc;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.login-container button:hover {
    background: #1a5bbf;
}

/* Error Message */
#error-message {
    margin-top: 1rem;
    color: #ff4d4d;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 480px) {
    .login-container {
        padding: 1.5rem;
    }

    .login-container h1 {
        font-size: 1.5rem;
    }
}
</style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form id="login-form">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p id="error-message"></p>
    </div>

    <!-- Include credentials.js first -->
    <script src="credentials.js"></script>
    <!-- Include your main JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
```

This form has:

* Two input fields for username and password.
* A button to submit the login form.
* A paragraph (`#message`) to display the result.

---

## 🔐 Step 2: Store Valid Credentials

**credentials.js**

```
// credentials.js
const credentials = [
    { username: "admin", password: "adminpass" },
    { username: "user1", password: "userpass1" },
    { username: "user2", password: "userpass2" },
    { username: "test1", password: "testpass1" }
];
```

These are the correct username and password. Anyone who enters them correctly will be allowed in.

---

## 🧠 Step 3: Validate Credentials with JavaScript

**script.js**

```
// script.js
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both username and password.';
    } else {
        const validLogin = credentials.find(cred => cred.username === username && cred.password === password);
        if (validLogin) {
            console.log('Login successful!');
            window.location.href = 'https://google.com'; // Redirect to another page
        } else {
            errorMessage.textContent = 'Incorrect username or password.';
        }
    }
});
```

Here's what the script does:

* Listens for form submission.
* Prevents the default page reload.
* Compares user input with the stored values.
* Displays a success or error message.

---

## ✅ How to Run It

1. Save all files in the same folder.
2. Use a local server (e.g., with VS Code Live Server) to run `index.html`.
3. Try logging in with:

   * Username: `admin`
   * Password: `password123`

If correct → "Login successful!"
If wrong → "Invalid credentials!"


**[Source: Github](https://github.com/agunechemba/login-page-with-credentials/tree/main)**

---

## 🧪 Practice Questions

1. Where are the valid credentials stored?
2. Why do we use `type="module"` in the script tag?
3. What happens when you enter incorrect credentials?
4. How would you add more users and passwords?
5. Is this login method safe for real applications? Why or why not?

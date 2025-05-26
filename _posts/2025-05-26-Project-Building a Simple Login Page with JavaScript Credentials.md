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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login Page</title>
</head>
<body>
  <h2>Login</h2>
  <form id="loginForm">
    <input type="text" id="username" placeholder="Username" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <p id="message"></p>

  <script type="module" src="script.js"></script>
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
export const validUsername = "admin";
export const validPassword = "password123";
```

These are the correct username and password. Anyone who enters them correctly will be allowed in.

---

## 🧠 Step 3: Validate Credentials with JavaScript

**script.js**

```
import { validUsername, validPassword } from './credentials.js';

const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  if (enteredUsername === validUsername && enteredPassword === validPassword) {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid credentials!";
    message.style.color = "red";
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

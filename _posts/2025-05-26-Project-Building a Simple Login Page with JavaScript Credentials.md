# 💻 Project: Building a Simple Login Page with JavaScript Credentials

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_little_girl_opening_a_large_door.jpeg" alt="A little girl opening a large door" style="width: 100%;">


In this tutorial, you'll learn how to create a beautiful and functional login form using HTML, CSS, and JavaScript. We'll even add simple login credentials stored in a separate JavaScript file.

> By the end, you'll understand how front-end login logic works and get to try it out yourself with five practice questions!

---

## 🧱 Step 1: Create the HTML Structure

We start by creating a basic HTML structure with a `form`, two `input` fields, a `button`, and a place to show error messages.

### 🔤 `index.html`

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

        .login-container {
            background: #fff;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .login-container h1 {
            margin-bottom: 1.5rem;
            font-size: 2rem;
            color: #2575fc;
        }

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

        #error-message {
            margin-top: 1rem;
            color: #ff4d4d;
            font-size: 0.9rem;
        }

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

    <script src="credentials.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

---

## 🎫 Step 2: Add Your Login Credentials (Hardcoded for Demo)

Create a new file called `credentials.js`. Inside it, we define a list of valid usernames and passwords.

### 🗝 `credentials.js`

```
const credentials = [
    { username: "admin", password: "adminpass" },
    { username: "user1", password: "userpass1" },
    { username: "user2", password: "userpass2" },
    { username: "test1", password: "testpass1" }
];
```

> This is **not** how you do login for real apps—it's just for learning! Real authentication happens on the server.

---

## 🧠 Step 3: Write the JavaScript Logic

Now let’s validate the login form using JavaScript. We'll check if the entered details match any in our credentials array.

### 🧪 `script.js`

```
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both username and password.';
    } else {
        const validLogin = credentials.find(
            cred => cred.username === username && cred.password === password
        );

        if (validLogin) {
            console.log('Login successful!');
            window.location.href = 'https://google.com'; // Replace this with your real dashboard
        } else {
            errorMessage.textContent = 'Incorrect username or password.';
        }
    }
});
```

---

## ✅ How It Works

1. The user enters their **username** and **password**.
2. JavaScript listens for the form's `submit` event.
3. It **prevents the default** form submission.
4. It checks if the input matches any object in the `credentials` array.
5. If yes, redirect them to Google (just for demo).
6. If not, show an error message.

---

## 🧠 Practice Time!

Try these to test your understanding:

### 📝 Practice Questions

1. **Validation Upgrade:**
   Add a check that alerts the user if their password is less than 6 characters.

2. **Redirect Trick:**
   Instead of redirecting to Google, make it show a message like *"Welcome, \[username]!"* inside the page.

3. **Add a Show Password Toggle:**
   Use a checkbox that lets users show/hide the password.

4. **Case Insensitive Login:**
   Make the username check ignore capital letters.

5. **Separate Admins from Users:**
   Modify the credentials to include a `role` property. If the user is an "admin", redirect to `admin.html`, otherwise to `dashboard.html`.

---

## 🎯 Conclusion

You’ve just built a working login form with HTML, styled it with CSS, and made it functional using JavaScript. It’s not secure enough for real apps (because credentials are visible in JS), but it’s a great way to **practice input validation and event handling**.

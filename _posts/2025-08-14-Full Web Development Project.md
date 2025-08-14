# Full Web Development Project – Daily Devotional Web Application

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/daily-devotional.jpg" width="100%">

The **Daily Devotional Web Application** is a dynamic, database-driven platform designed to deliver daily spiritual devotionals to users while giving exclusive content management rights to a small group of trusted administrators.

At its core, the project is built to serve two audiences:

1. **Public Readers** — visitors who wish to access devotionals by selecting their **level** (from 1 to 4) and a specific **date**.
2. **Authorized Administrators** — a limited group (1–4 accounts) who have permission to log in, create, and manage devotionals for the community.

---

### **Purpose of the Project**

The goal is to provide a structured, easily accessible, and secure way to distribute daily devotionals. Instead of relying on static files that need manual updates, this system allows administrators to post new devotionals through a web dashboard, with the information stored in a **MySQL database** and instantly available to the public.

---

### **Core Features**

1. **Admin Login System**

   * Only registered admins can post or manage devotionals.
   * Secure password storage using hashing.

2. **Admin Dashboard**

   * Simple form to select devotional **level**, **date**, add **title**, write **paragraphs**, and specify **Bible verse**.
   * Multiple paragraphs are supported by separating them with “||” in the form.

3. **Public Devotional Access**

   * Visitors choose their level and date, then view the devotional text.
   * Devotionals are pulled dynamically from the database.

4. **Content Security**

   * Option to make the verse uncopyable by rendering it as an image.
   * Admins only — no public editing or posting allowed.

5. **Mobile-Friendly Design**

   * Simple HTML + CSS for clean, responsive layouts.

---

### **Technology Stack**

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** PHP (session-based authentication)
* **Database:** MySQL
* **Hosting:** Works on shared hosting (e.g., Go54, cPanel)
* **Security:** Password hashing, restricted admin access, server-side validation

---

### **How It Works**

* The public page (`index.html`) lets users select **Level** and **Date**, then fetches the matching devotional from `get_devotional.php`.
* Admins log in via `login.php` and post devotionals using `dashboard.php`.
* The `save_devotional.php` script inserts the devotional into the database.
* Devotionals are retrieved dynamically and displayed instantly.

---


## **1. Project Structure**

```
Daily-devotional/
│
├── public/
│   ├── index.html          # Public page (view devotionals)
│   ├── styles.css          # Styles for public & admin
│   ├── script.js           # Public page JS
│   ├── login.php           # Admin login page
│   ├── dashboard.php       # Admin dashboard (post devotionals)
│   ├── save_devotional.php # Handles devotional save
│   ├── get_devotional.php  # Returns devotional JSON
│   ├── logout.php          # Admin logout
│   └── uploads/            # (Optional) Store images if needed
│
├── config.php              # Database connection
└── db.sql                  # SQL script to create tables & admin accounts
```

---

## **2. Database Design**

**db.sql**

```sql
CREATE DATABASE IF NOT EXISTS daily_devotional;
USE daily_devotional;

-- Table for admin users
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- Table for devotionals
CREATE TABLE devotionals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    level INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    paragraphs TEXT NOT NULL,
    verse VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert admin accounts (password will be hashed in PHP, these are placeholders)
INSERT INTO admins (username, password_hash) VALUES
('admin1', '$2y$10$examplehash...'),
('admin2', '$2y$10$examplehash...');
```

💡 We’ll hash passwords in PHP before inserting them.

---

## **3. `config.php` (Database Connection)**

```php
<?php
$host = "localhost";
$dbname = "daily_devotional";
$username = "your_db_user";
$password = "your_db_pass";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
```

---

## **4. `login.php` (Admin Login Page)**

```php
<?php
session_start();
require '../config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $stmt = $pdo->prepare("SELECT * FROM admins WHERE username = ?");
    $stmt->execute([$username]);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($admin && password_verify($password, $admin['password_hash'])) {
        $_SESSION['admin'] = $admin['username'];
        header("Location: dashboard.php");
        exit;
    } else {
        $error = "Invalid username or password";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Login - Daily Devotional</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="login-container">
    <h2>Admin Login</h2>
    <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
    <form method="POST">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>
</div>
</body>
</html>
```

---

## **5. `dashboard.php` (Post Devotional)**

```php
<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard - Daily Devotional</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<h2>Welcome, <?php echo $_SESSION['admin']; ?>!</h2>
<a href="logout.php">Logout</a>

<form action="save_devotional.php" method="POST">
    <label>Date:</label>
    <input type="date" name="date" required><br>

    <label>Level:</label>
    <select name="level" required>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
        <option value="4">Level 4</option>
    </select><br>

    <label>Title:</label>
    <input type="text" name="title" required><br>

    <label>Paragraphs (separate with ||):</label>
    <textarea name="paragraphs" required></textarea><br>

    <label>Verse:</label>
    <input type="text" name="verse"><br>

    <button type="submit">Save Devotional</button>
</form>
</body>
</html>
```

---

## **6. `save_devotional.php`**

```php
<?php
session_start();
require '../config.php';

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $date = $_POST["date"];
    $level = $_POST["level"];
    $title = $_POST["title"];
    $paragraphs = $_POST["paragraphs"]; // "||" separated
    $verse = $_POST["verse"];

    $stmt = $pdo->prepare("INSERT INTO devotionals (date, level, title, paragraphs, verse) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$date, $level, $title, $paragraphs, $verse]);

    header("Location: dashboard.php?success=1");
}
?>
```

---

## **7. `get_devotional.php` (Public API)**

```php
<?php
require '../config.php';

$level = $_GET['level'] ?? null;
$date = $_GET['date'] ?? null;

if ($level && $date) {
    $stmt = $pdo->prepare("SELECT * FROM devotionals WHERE level = ? AND date = ?");
    $stmt->execute([$level, $date]);
    $devotional = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($devotional) {
        $devotional['paragraphs'] = explode("||", $devotional['paragraphs']);
        echo json_encode($devotional);
    } else {
        echo json_encode([]);
    }
} else {
    echo json_encode([]);
}
?>
```

---

## **8. `index.html` (Public Page)**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Daily Devotional</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>Daily Devotional</h1>

<label>Level:</label>
<select id="level">
    <option value="1">Level 1</option>
    <option value="2">Level 2</option>
    <option value="3">Level 3</option>
    <option value="4">Level 4</option>
</select>

<label>Date:</label>
<input type="date" id="date">

<button id="getDevotionalBtn">Get Devotional</button>

<div id="output"></div>

<script src="script.js"></script>
</body>
</html>
```

---

## **9. `script.js` (Public Page Logic)**

```javascript
document.getElementById("getDevotionalBtn").addEventListener("click", async () => {
    const level = document.getElementById("level").value;
    const date = document.getElementById("date").value;

    if (!date) {
        alert("Please choose a date!");
        return;
    }

    const res = await fetch(`get_devotional.php?level=${level}&date=${date}`);
    const devotional = await res.json();

    const output = document.getElementById("output");
    output.innerHTML = "";

    if (devotional && devotional.title) {
        let html = `<h3>${devotional.title}</h3>`;
        devotional.paragraphs.forEach(p => {
            html += `<p>${p}</p>`;
        });

        if (devotional.verse) {
            html += `<div class="verse">${devotional.verse}</div>`;
        }

        output.innerHTML = html;
    } else {
        output.innerHTML = "<p>No devotional found for this date and level.</p>";
    }
});
```

---

This setup:

* ✅ Lets only **1–4 admins** post devotionals after logging in.
* ✅ Stores devotionals in a **database**.
* ✅ Lets visitors search by **level** and **date**.
* ✅ Keeps the verse **uncopyable** (we can still apply the image method here).

---

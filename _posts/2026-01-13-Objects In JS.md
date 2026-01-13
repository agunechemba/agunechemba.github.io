# Grouping Data with Objects in JavaScript

<img src="https://i.ibb.co/Whr5Vhq/objects.png" width="100%">

Imagine your school bag. You don’t throw your books in one house, your pencils in another, and your lunch in a third place. You put them **together** in one bag so they’re easy to carry and find.

In programming, **objects** are like that school bag. They help us **group related information together** in one neat place. As programs grow bigger, writing separate variables for everything becomes messy. Objects help us:

* Keep data organized
* Name things clearly
* Update and use information easily

By the end of this lesson, you’ll understand objects fully and build an **interactive User Profile Card** using **vanilla HTML, CSS, and JavaScript**.

---

## Why Do We Need Objects?

Think about a game. Each character has:

* Name
* Health points
* Strength
* Level

Without objects, you’d have variables like:

```js
let name = "Hero";
let health = 100;
let strength = 50;
let level = 3;
```

If your game has 10 characters, this becomes confusing fast.
Instead, we can use objects:

```js
const character = {
  name: "Hero",
  health: 100,
  strength: 50,
  level: 3
};
```

Everything about **one character** is now in **one neat object**. Easy to manage and scale!

---

## Key Terms and Their Friendly Meanings

To really understand objects, let’s look at **all the important words**:

### 1. Object

A **container for related information**.
Analogy: Your pencil case or school bag.

---

### 2. Key

A **label** used to name a piece of data.
Example: `name` in `name: "Ada"`.
Think: “What do we call this thing?”

---

### 3. Value

The **actual information** stored under a key.
Example: `"Ada"` in `name: "Ada"`.
Think: “What is inside the box?”

---

### 4. Key–Value Pair

A single **labeled piece of data**.
Example: `age: 12`

* Key → `age`
* Value → `12`

---

### 5. Property

Another word for a **key–value pair**.
Objects are made of properties.

---

### 6. Dot Notation

The **method to access or update object data**.
Example: `userProfile.name`

* Dot → a path to reach the property inside the object.

---

### 7. Updating a Property

Changing the value stored in a key.

```js
userProfile.age = 13;
```

---

### 8. Variable

A **named storage space** in memory that can hold data, including objects.
Example: `const userProfile = {...};`

---

### 9. Structure

How information is **organized and arranged**.
Objects provide a neat structure for your code.

---

### 10. Data Model

A **plan for organizing information**.
Example: Deciding that a user object should have `name`, `age`, `hobby` before writing code.

---

### 11. Configuration

Settings that **control how something behaves**.
Example: An object storing app theme, language, or sound preferences.

---

### 12. Interactive Property Update

Objects aren’t static—they can **change when users interact with the page**.
This makes apps dynamic and fun.

---

## Creating Objects in JavaScript

Objects are made using **curly braces** `{}`:

```js
const userProfile = {
  name: "Ada",
  age: 12,
  hobby: "Learning JavaScript"
};
```

* Each piece of data is a **key–value pair**.
* Keys are usually words, and values can be numbers, strings, booleans, arrays, or even other objects.

---

## Accessing Object Data

Use **dot notation**:

```js
console.log(userProfile.name); // Ada
console.log(userProfile.age);  // 12
```

You can also **update data**:

```js
userProfile.age += 1; // age becomes 13
```

---

## Practice Mini-Projects

Before the big project, try these **mini-exercises**:

1. **Character Stats**

```js
const hero = {
  name: "Knight",
  health: 100,
  strength: 50
};
```

* Update `health` when the hero gets hit.
* Increase `strength` after leveling up.

2. **App Settings Object**

```js
const settings = {
  theme: "dark",
  sound: true,
  language: "English"
};
```

* Change the theme to `light`.
* Turn off sound.

3. **Product Info Card**

```js
const product = {
  name: "Laptop",
  price: 1200,
  stock: 5
};
```

* Reduce stock after a purchase.
* Update price for a sale.

---

## Big Project: Interactive User Profile Card

Now we’ll combine **HTML, CSS, and JS** to make an interactive webpage. The user can **grow older** and **change hobbies and name** live.

### Full Code (Single File)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive User Profile</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      padding: 40px;
    }

    .card {
      background: white;
      padding: 20px;
      max-width: 350px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      margin: auto;
    }

    h2 { margin-top: 0; color: #333; }
    p { margin: 8px 0; color: #555; }
    input {
      padding: 5px;
      width: calc(100% - 12px);
      margin-bottom: 10px;
    }
    button {
      padding: 8px 12px;
      border: none;
      background: #4CAF50;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 5px;
    }
    button:hover { background: #45a049; }
  </style>
</head>
<body>

  <div class="card">
    <h2 id="name"></h2>
    <p id="age"></p>
    <p id="hobby"></p>

    <input type="text" id="newName" placeholder="Enter new name">
    <input type="text" id="newHobby" placeholder="Enter new hobby"><br>

    <button onclick="updateAge()">Grow Older</button>
    <button onclick="changeName()">Change Name</button>
    <button onclick="changeHobby()">Change Hobby</button>
  </div>

  <script>
    // Object storing user profile
    const userProfile = {
      name: "Ada",
      age: 12,
      hobby: "Learning JavaScript"
    };

    // Function to display data
    function displayProfile() {
      document.getElementById("name").textContent = userProfile.name;
      document.getElementById("age").textContent = "Age: " + userProfile.age;
      document.getElementById("hobby").textContent = "Hobby: " + userProfile.hobby;
    }

    // Initial display
    displayProfile();

    // Update age
    function updateAge() {
      userProfile.age += 1;
      displayProfile();
    }

    // Change name
    function changeName() {
      const newName = document.getElementById("newName").value;
      if (newName) {
        userProfile.name = newName;
        displayProfile();
        document.getElementById("newName").value = "";
      }
    }

    // Change hobby
    function changeHobby() {
      const newHobby = document.getElementById("newHobby").value;
      if (newHobby) {
        userProfile.hobby = newHobby;
        displayProfile();
        document.getElementById("newHobby").value = "";
      }
    }
  </script>

</body>
</html>
```

This webpage lets you:

* See the user profile stored in one **object**
* Grow the user older with a click
* Change the name or hobby live
* Practice **reading, updating, and interacting** with objects

---

## Summary: What You Learned

* Objects **group related data** into one container
* Each **property** is a **key–value pair**
* Use **dot notation** to access or update properties
* Objects can store numbers, strings, booleans, arrays, and even other objects
* You can make objects **interactive**, powering real apps
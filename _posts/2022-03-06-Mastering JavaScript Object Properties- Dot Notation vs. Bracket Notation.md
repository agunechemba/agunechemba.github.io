# 🔍 Mastering JavaScript Object Properties: Dot Notation vs. Bracket Notation

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2026/02/1_lne8barkrwogynfy0mpfua.jpg" width="100%">

Alright — imagine you just joined a game where players can build their own **digital identity cards**.
Every player can create labels like:

* Name
* Level
* Favorite food
* Even crazy ones like **“Best Snack 🍿”**

Behind the game engine, JavaScript is using something called **objects** to store all that information.

Today, you’re learning how JavaScript reads those labels — and why sometimes you must use a different method to access them.

---

# 🧱 JavaScript Objects — Your Digital Locker

Think of an object like a locker with labeled sections.

```js
const player = {
  name: "Ken",
  level: 10
};
```

### 🧠 What Each Part Means

| Code            | Meaning                                                      |
| --------------- | ------------------------------------------------------------ |
| `const`         | Keyword to create a constant variable (cannot be reassigned) |
| `player`        | Variable name storing the object                             |
| `{ }`           | Creates an object                                            |
| `name`, `level` | Keys (labels)                                                |
| `"Ken"`, `10`   | Values (stored data)                                         |

---

# 🚪 Method 1 — Dot Notation (The Front Door)

This is the easiest way to access object data.

```js
player.name = "Ken";
```

### 🧠 How It Reads

* `player` → go to the object
* `.` → enter inside
* `name` → select that property

---

## ✅ Dot Notation Works When Keys Are “Clean”

```js
player.age = 20;
player.user_1 = "Online";
player.$coins = 500;
```

---

## ❌ Dot Notation Fails When Keys Are Weird

If keys contain:

* Spaces
* Emojis
* Special symbols

Dot notation breaks.

```js
player.favorite food = "Rice"; // ❌ ERROR
```

Because JavaScript thinks:

* `favorite` is property
* `food` is unexpected extra word

---

# 🧰 Method 2 — Bracket Notation (The Master Key)

Bracket notation can use **any string** as a key.

```js
player["favorite food"] = "Rice";
```

---

## 🧠 Why It Works

Because inside brackets, JavaScript treats everything as a **string key**.

---

## ✅ Works With Anything

```js
player["Best Snack 🍿"] = "Popcorn";
player["home address"] = "Lagos";
player["score-per-level"] = 50;
```

---

# 🔢 Numbers as Keys (JavaScript Secret)

You can do this:

```js
const obj = {};
obj[123] = "Hello";
```

But JavaScript secretly converts number keys into strings.

So these are the same:

```js
obj[123];
obj["123"];
```

---

# 🧪 Expressions Inside Brackets (Magic Feature)

JavaScript can calculate keys first.

```js
const obj = {};

obj["12" + "3"] = "Hi";
obj[120 + 3] = "Hello";
```

---

## 🧠 Step-by-Step

### First Line

```js
"12" + "3"
```

Both are strings → JavaScript joins them → `"123"`

So becomes:

```js
obj["123"] = "Hi";
```

---

### Second Line

```js
120 + 3
```

Math happens → `123`

Then JavaScript converts to string → `"123"`

So becomes:

```js
obj["123"] = "Hello";
```

---

## 🤯 Final Result

Second value overwrites first.

```js
{
  "123": "Hello"
}
```

---

# 🎮 Real Life Example — Game Inventory

```js
const inventory = {};

inventory["Magic Sword ⚔"] = 1;
inventory["Health Potion 🧪"] = 5;

let newItem = "Dragon Egg 🐉";
inventory[newItem] = 2;

console.log(inventory);
```

---

## 🧠 Syntax Explained Simply

### `const`

Creates a variable that shouldn’t be reassigned.

---

### `{ }`

Creates an object container.

---

### `[ ]`

Used to access keys using strings or calculations.

---

### `=`

Stores a value.

---

### `console.log()`

Prints output to screen.

---

# 🆚 Dot vs Bracket — Simple Rule

| Situation                | Use     |
| ------------------------ | ------- |
| Simple property names    | Dot     |
| Spaces / Emojis          | Bracket |
| Dynamic keys (variables) | Bracket |
| Calculated keys          | Bracket |

---

# 🎯 Golden Rule Story

If your key is **clean and simple**, use dot notation.
If your key is **crazy, user-made, or calculated**, use bracket notation.

---

# 📝 Review Questions

### 1️⃣ Why will this cause an error?

```js
player.favorite food = "Rice";
```

---

### 2️⃣ What will this output and why?

```js
const obj = {};
obj[456] = "Hello";

console.log(obj["456"]);
```

---

### 3️⃣ What is the final object?

```js
const obj = {};
obj["10" + "0"] = "A";
obj[50 + 50] = "B";
```

---

### 4️⃣ Rewrite this correctly using bracket notation:

```js
const user = {};
user.best color = "Blue";
```

---

### 5️⃣ In a website where users create custom profile fields like:

* `"Dream Car 🚗"`
* `"Best Food 🍲"`

Which notation should you use and why?


### 6️⃣ What will this output and why?

```js
const obj = {};

let key = "user";
obj[key + "Name"] = "Ken";

console.log(obj["userName"]);
```

👉 Explain step by step how the key was formed.

---

### 7️⃣ Predict the output:

```js
const data = {};

data[200] = "First";
data["200"] = "Second";

console.log(data[200]);
```

👉 Which value will print and why?

---

### 8️⃣ Find and Fix the Error:

```js
const game = {};

game.player score = 50;
```

👉 Rewrite it so it works correctly.

---

### 9️⃣ What will be inside the object?

```js
const obj = {};

obj["5" * 2] = "Result";

console.log(obj);
```

👉 Hint: `"5" * 2` is NOT string joining.

---

### 🔟 Real Thinking Question

You are building a form where users can create custom fields like:

* `"My Pet Name 🐕"`
* `"Favorite Quote ❤️"`
* `"Best Teacher Ever ⭐"`

Users type these names themselves.

👉 Which notation should you use?
👉 Why would dot notation be risky here?

---

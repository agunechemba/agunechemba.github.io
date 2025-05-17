# 🔡 Understanding `toLowerCase()` in JavaScript

![toLowerCase Method](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/09/6015105009924031172.jpg?w=1024)

---

## 💡 What is `toLowerCase()`?

In JavaScript, the `.toLowerCase()` method helps you **convert all uppercase letters** in a string to **lowercase**. Super useful for:

* 🔍 Case-insensitive comparisons
* 🧼 Cleaning up user input
* 🛠️ Standardizing text

---

## 🛠️ How it Works

**Syntax:**

```js
string.toLowerCase();
```

* `string` is your text (a literal or variable).
* It **returns** a new string.
* Original string stays unchanged.

---

## 🧪 Example

```js
const originalString = "Hello, World!";
const lowercaseString = originalString.toLowerCase();

console.log(lowercaseString); // Output: "hello, world!"
```

✅ All letters are now lowercase.
⛔ Original string is untouched.

---

## 🎯 Why Use It?

* 🔐 Comparing usernames, emails, etc.
* 🧹 Cleaning text before saving or displaying.
* 📐 Making UI text consistent.

---

## 🧠 Mini Quiz

**What’s the output?**

```js
const originalString = "Hello, World!";
const lowercaseString = originalString.toLowerCase();
console.log(lowercaseString);
```

### Options:

A. `"Hello, World!"`
B. `"hello, WORLD!"`
C. `"hello, world!"`
D. `"HELLO, WORLD!"`

💬 Drop your answer in the comments!

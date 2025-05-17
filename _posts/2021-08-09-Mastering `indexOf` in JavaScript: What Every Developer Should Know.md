# 🔍 Mastering `indexOf` in JavaScript: What Every Developer Should Know

![indexOf in JavaScript](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/10/6015105009924031168.jpg?w=1024)

If you’re learning JavaScript, the `indexOf` method is one you’ll use often. It’s a simple but powerful way to find the position of an item in a **string** or an **array**.

> 🧠 Pro Tip: JavaScript counts from **zero**—the first item is always at index `0`.

---

### 🔎 How `indexOf` Works

`indexOf` searches from **left to right** and returns the index of the **first match**. If no match is found, it returns `-1`.

#### ✅ Examples:

**In Strings:**

```js
let text = "Hello world";
let index = text.indexOf("world"); // 6
```

**In Arrays:**

```js
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("banana"); // 1
```

**When Not Found:**

```js
let index = fruits.indexOf("grape"); // -1
```

---

### 🤔 Why Start at Zero?

In JavaScript (and most languages), counting begins at **0**. So:

* `0` is the first item
* `1` is the second item
* and so on...

Keep this in mind to avoid off-by-one bugs!

---

### 🚀 Why You Should Care

Whether you're searching user input, filtering data, or building logic—`indexOf` is a go-to method that helps keep your code clean and efficient.

Next time you need to check if something exists, let `indexOf` do the detective work.

---

### 🧠 Quick Quiz

**1. What does `indexOf` return if the value isn't found?**

* a) The first element
* b) -1
* c) The length of the array
* d) Undefined

**2. What will this return?**

```
let animals = ["cat", "dog", "elephant"];
let index = animals.indexOf("dog");
```

* a) 0
* b) 1
* c) 2
* d) -1

---

✌️ Keep coding. Keep learning. More bite-sized JavaScript tips coming soon!

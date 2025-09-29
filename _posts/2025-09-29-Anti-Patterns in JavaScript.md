# 🚫 Anti-Patterns in JavaScript: Good Patterns Are Like Following Road Rules — Everyone Gets Home Safer, And The Journey Is Smoother

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/chaotic-lagos-bus-scene.jpg" width="100%">

You’re watching a Nollywood movie where the main character is making all the wrong choices. Instead of solving the problem, every decision makes life harder. That’s exactly what **anti-patterns** are in programming.

An **anti-pattern** is a **common coding practice that looks like a solution but actually causes more harm than good**. Unlike a simple bug, an anti-pattern is *intentional* — it’s code that “works” but leads to confusion, errors, or maintenance nightmares later.

In this lesson, we’ll look at what anti-patterns are, why they’re dangerous, and examples of common ones in JavaScript.

---

## 🌍 What are Anti-Patterns?

* **Patterns** are best practices — proven ways of solving problems (like using `forEach` to loop through arrays).
* **Anti-patterns** are the opposite — bad habits that look useful at first but create long-term problems.

👉 They usually arise because developers want a **quick fix** or don’t know a better alternative.

---

## ⚠️ Why Avoid Anti-Patterns?

1. They make code **harder to read**.
2. They introduce **hidden bugs**.
3. They increase **maintenance costs**.
4. They create **performance issues**.
5. They confuse new team members (because the code looks weird or inconsistent).

---

## 🔑 Common JavaScript Anti-Patterns

### 1. **Using Global Variables Everywhere**

```javascript
name = "Ada";  // Implicit global
```

This works, but it pollutes the **global scope**. Any script can accidentally overwrite `name`.

✅ Better: Always declare variables with `let`, `const`, or `var`.

```javascript
let name = "Ada";
```

---

### 2. **Modifying Built-in Objects**

```javascript
Array.prototype.myMethod = function() {
  return "dangerous!";
};
```

Looks clever, but this can break other libraries relying on `Array`.

✅ Better: Use utility functions or standalone helpers instead of changing built-ins.

---

### 3. **Using `eval()`**

```javascript
let result = eval("2 + 3 * 5");
```

It works, but `eval` is insecure, slow, and hard to debug.

✅ Better: Use direct operations or safe alternatives like `JSON.parse()` or libraries for dynamic evaluation.

---

### 4. **With Statement**

```javascript
with (obj) {
  console.log(name);
}
```

This makes code ambiguous — `name` could come from `obj` or somewhere else.

✅ Better: Access properties directly:

```javascript
console.log(obj.name);
```

---

### 5. **Magic Numbers & Strings**

```javascript
if (userRole === 7) { /* ... */ }
```

What does `7` mean? Without context, future developers are lost.

✅ Better: Use named constants.

```javascript
const ADMIN_ROLE = 7;
if (userRole === ADMIN_ROLE) { /* ... */ }
```

---

### 6. **Callback Hell**

```javascript
getData(function(a) {
  process(a, function(b) {
    save(b, function(c) {
      notify(c, function() {
        console.log("done");
      });
    });
  });
});
```

This “pyramid of doom” is messy and unreadable.

✅ Better: Use **Promises** or `async/await`.

```javascript
async function main() {
  const a = await getData();
  const b = await process(a);
  const c = await save(b);
  await notify(c);
  console.log("done");
}
```

---

### 7. **Copy-Paste Programming**

Repeating the same logic in multiple places.

✅ Better: Create reusable functions or modules.

---

## 🎯 The Mindset Shift

Avoiding anti-patterns isn’t just about writing “fancy” code. It’s about writing **clean, maintainable, and predictable code**.

Think of it like driving in Lagos traffic:

* You *can* drive against one-way and reach your destination faster (a quick hack).
* But long term, it causes chaos, accidents, and penalties (anti-patterns).

Good patterns are like following road rules — everyone gets home safer, and the journey is smoother.

---

## ✅ Summary

* **Anti-patterns** = bad coding practices that seem helpful but cause long-term harm.
* Common ones include: global variables, modifying built-ins, using `eval()`, `with` statements, magic numbers, callback hell, and copy-paste coding.
* The solution is to use **modern, safe, and clean alternatives**.
* Avoiding anti-patterns makes your code more **readable, maintainable, and secure**.

---

## 📝 Review – Fill in the Gaps

1. An anti-pattern is a common but ______ solution that causes long-term problems.
2. Declaring variables without `let` or `const` creates unwanted ______ variables.
3. Changing `Array.prototype` is considered an anti-pattern because it can break other ______.
4. The `eval()` function is dangerous because it’s slow and a ______ risk.
5. The `with` statement makes code ______ and confusing.
6. Using numbers like `7` to represent roles is called using ______ numbers.
7. Callback hell is also called the pyramid of ______.
8. A better alternative to callback hell is using ______ or `async/await`.
9. Repeating the same logic in multiple places is known as copy-______ programming.
10. Avoiding anti-patterns makes code more clean, ______, and secure.
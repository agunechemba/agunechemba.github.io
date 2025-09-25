# 🐞 Debugging Techniques in JavaScript: Techniques To Understanding Your Program

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/debugging-lagos-bus-adventure.jpg" width="100%">

If you’ve ever built a JavaScript application, you already know one truth: **bugs happen**. Code doesn’t always run the way you expect, and sometimes it feels like the browser is playing tricks on you. That’s why debugging is such an important skill.

Luckily, modern browsers give us a rich set of **debugging tools and techniques** that can help you find, understand, and fix those errors quickly.

Let’s walk through some of the most powerful debugging strategies in JavaScript.

---

## 🎯 Interactive Interpreter Variables

When you open the **browser developer console** (press `F12` or `Ctrl+Shift+I`), you’ll discover a few magical helper variables:

* **`$_`** → Stores the result of the last evaluated expression.

  ```javascript
  "foo"   // "foo"
  $_      // "foo"
  ```

* **`$0` - `$4`** → Refer to DOM elements selected in the Elements/Inspector tab.

  * `$0` is the most recently selected element.
  * `$1` is the one before that, and so on up to `$4`.

* **`$$()`** → Shortcut for `document.querySelectorAll()`.

  ```javascript
  var images = $$("img"); // Returns all <img> elements
  ```

⚠️ Availability may differ by browser, but these shortcuts are a huge time-saver.

---

## ⛔ Breakpoints

Sometimes, sprinkling `console.log()` everywhere just isn’t enough. That’s where **breakpoints** come in. A breakpoint is like pressing the “pause” button on your code so you can examine what’s happening.

There are three common ways to set breakpoints:

1. **`debugger;` Statement**

   ```javascript
   function test() {
     debugger; // Execution will pause here if DevTools are open
     console.log("Hello Debugging!");
   }
   ```

2. **In Browser Developer Tools**

   * Open the **Sources** (Chrome) or **Debugger** (Firefox) tab.
   * Click on the line number where you want to pause.
   * Use **Pretty Print** (`{}` icon) to format minified code.

3. **In IDEs like Visual Studio Code**

   * Click next to the line numbers in your code.
   * Run in Debug mode (`F5`).

👉 Pro tip: Use **conditional breakpoints** so code only pauses when a certain condition is met (e.g., in a loop, only stop when `i === 5`).

---

## 🔄 Stepping Through Code

Once your code is paused at a breakpoint, you can walk through it step by step:

* **Resume (F8)** → Continue running until the next breakpoint.
* **Step Over (F10)** → Run the current line. If it’s a function call, skip inside it.
* **Step Into (F11)** → Dive into the function being called.
* **Step Out (Shift+F11)** → Finish the current function and return to the caller.

All of this works together with the **Call Stack panel**, which shows how you got to the current line of code.

---

## 🕵️ Using Setters and Getters for Debugging

What if a variable keeps changing, and you don’t know why? You can use **getters and setters** to trap access to an object’s property.

Example:

```
// Rename original property
otherObject._name = otherObject.name;

// Intercept with a getter/setter
Object.defineProperty(otherObject, "name", {
  set: function(name) {
    debugger;   // Code will pause whenever "name" changes
    this._name = name;
  },
  get: function() {
    return this._name;
  }
});
```

Now every time `name` is modified, the debugger jumps in and shows you where it happened.

---

## 🛠 Other Debugging Tools & Techniques

### 1. **Using the Console**

* `console.log()` → Print values and messages.
* `console.error()`, `console.warn()`, `console.table()` → For more structured output.
* Always check if `console` exists in older browsers before calling it:

  ```javascript
  if (window.console) console.log("Debugging safely!");
  ```

---

### 2. **Pause on Exception**

In Chrome, you can enable “Pause on Exception” so execution stops immediately when an error happens. No more guessing where it broke.

You can also pause when **a DOM node is modified** — perfect for catching layout or style changes.

---

### 3. **Elements Inspector**

Select an element on the page, and it automatically gets assigned to `$0` in the console. From there, you can manipulate it directly:

```javascript
$0.style.border = "2px solid red";
```

---

### 4. **Break on Function Call**

If you know which function is causing issues, you can use:

```javascript
debug(myFunction);
```

The debugger will pause the moment that function is called.

---

## ✅ Summary

Debugging in JavaScript isn’t just about fixing errors — it’s about **understanding your program**. With tools like:

* Interactive console helpers (`$_`, `$0`, `$$()`)
* Breakpoints in DevTools, IDEs, or `debugger;` statements
* Stepping controls (Resume, Step Over, Step Into, Step Out)
* Setters and getters to trap property changes
* Console tricks, Pause on Exception, and function call debugging

…you have a powerful toolkit to track down even the trickiest bugs.

---

## 📝 Review – Fill in the Gaps

1. The console variable `$_` stores the value of the last ______ evaluated.
2. `$0` in the console refers to the most recently selected ______ in the Elements tab.
3. `$$('div')` is a shortcut for `document.______(‘div’)`.
4. A ______ is a marker that pauses code execution for inspection.
5. The `debugger;` statement only works when ______ tools are open.
6. A conditional breakpoint pauses execution only when a certain ______ is met.
7. The debugging control **Step Into** (F11) moves inside a ______ call.
8. You can use getters and setters with `Object.defineProperty()` to intercept changes to an object’s ______.
9. Chrome’s “Pause on Exception” feature stops code execution whenever an ______ occurs.
10. Using `debug(functionName)` causes the debugger to pause the next time that ______ runs.

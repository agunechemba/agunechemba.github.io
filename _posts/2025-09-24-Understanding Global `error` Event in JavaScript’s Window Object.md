# 🌐 Understanding Global `error` Event in JavaScript’s Window Object

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/javascript-error-alert.jpg" width="100%">

Errors are an inevitable part of programming. Whether it’s a typo in your code, a missing resource, or an unexpected runtime bug, your scripts will sometimes break. The good news is that JavaScript gives us tools to detect and respond to those errors. One of the most important of these is the **`error` event** on the `Window` object.

In this lesson, we’ll explore how the `error` event works, how it differs depending on how you attach handlers, and how you can use it in your applications.

---

## 📌 What is the `error` Event?

The `error` event fires on the **`Window` object** whenever something goes wrong, such as:

* A script failing to load.
* A script encountering an execution error during runtime.

👉 Important note:
This only applies to synchronous errors (those that occur immediately during execution). If an error happens inside a `Promise` without a `.catch()` or `try...catch` around it, you won’t get an `error` event — instead, you’ll see an **`unhandledrejection`** event.

---

## 🧾 Syntax

There are two main ways to listen for the `error` event:

1. Using **`addEventListener()`**:

```
window.addEventListener("error", (event) => {
  console.log("Error event fired!", event);
});
```

2. Using the **`onerror` handler property**:

```
window.onerror = (message, source, lineno, colno, error) => {
  console.log(`Message: ${message}`);
  console.log(`Source: ${source}`);
  console.log(`Line: ${lineno}`);
  console.log(`Column: ${colno}`);
  console.log(`Error object:`, error);

  return true; // prevents error from appearing in console
};
```

🔍 Notice something interesting? Unlike most event handlers, `onerror` receives **five separate arguments**, while the `addEventListener` callback receives a single `ErrorEvent` object.

---

## 🎯 Event Object

When an error occurs, JavaScript gives you access to useful information:

* **`message`** → A human-readable error description.
* **`source`** → The script URL where the error happened.
* **`lineno`** → Line number of the error.
* **`colno`** → Column number of the error.
* **`error`** → The actual `Error` object (if available).

This extra context is what makes debugging easier.

---

## ❌ Cancelling the Default Behavior

Normally, when an error occurs, the browser logs it to the console. But you can suppress that by returning `true` from `window.onerror`:

```
window.onerror = () => {
  console.log("Error suppressed.");
  return true; // prevents error from showing in console
};
```

⚠️ However, note that the script will still stop executing where the error occurred. You can hide the noise, but you can’t magically ignore logic errors.

---

## 🔬 Example in Action

Here’s a fun example where we intentionally cause an error and listen for it:

```
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```
const log = document.querySelector(".event-log-contents");

// Listen for errors
window.addEventListener("error", (event) => {
  log.textContent += `${event.type}: ${event.message}\n`;
  console.log(event);
});

// Trigger a fake error when button is clicked
document.querySelector("#script-error").addEventListener("click", () => {
  const badCode = "const s;"; // invalid JS!
  eval(badCode); // causes a syntax error
});
```

Here’s what happens:

1. When you click the button, it tries to `eval()` some broken JavaScript.
2. That triggers the `error` event.
3. The listener logs the error type and message into the `<textarea>` and console.

This is a great way to build debugging tools or log client-side issues back to a server.

---

## 📚 Quick Recap

* The `error` event fires on `window` when scripts fail.
* `addEventListener("error")` gets an `ErrorEvent` object.
* `window.onerror` receives five separate arguments.
* Returning `true` in `onerror` suppresses the error in the console.
* For async errors in Promises, use `unhandledrejection`.

With these tools, you can monitor errors more effectively in your web apps.

---

## 📝 Review Fill-in-the-Gap Questions

1. The `error` event is fired on the \_\_\_\_\_\_\_\_\_\_ object when a script fails or encounters an execution error.
2. Errors inside a `Promise` without a handler trigger the \_\_\_\_\_\_\_\_\_\_ event instead of `error`.
3. Using `addEventListener("error")`, the handler receives a single \_\_\_\_\_\_\_\_\_\_ object.
4. The `window.onerror` handler is special because it receives \_\_\_\_\_\_\_\_\_\_ arguments.
5. Returning \_\_\_\_\_\_\_\_\_\_ from `window.onerror` prevents errors from appearing in the browser console.
6. The `error` event object contains properties like `message`, `source`, `lineno`, `colno`, and \_\_\_\_\_\_\_\_\_\_.
7. The `source` argument of `window.onerror` provides the \_\_\_\_\_\_\_\_\_\_ of the script that caused the error.
8. In HTML, setting `<body onerror="...">` actually attaches the handler to the \_\_\_\_\_\_\_\_\_\_ object.
9. The error won’t be logged to the console if the handler returns true, but the script execution will still \_\_\_\_\_\_\_\_\_\_.
10. To manually trigger a script error in the example, the code used the \_\_\_\_\_\_\_\_\_\_ function with invalid JavaScript.
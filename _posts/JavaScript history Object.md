# 🧭 JavaScript history Object: Controlling the Browser's Past

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/history.jpg" width="100%">

Imagine building an app like Gmail or Twitter. You click links, change sections, the URL updates—but the page **never reloads**.
That’s the History API behind the scenes, making things smooth and snappy.
Let’s dive in, one step at a time.

---

### ✅ Step 1: Meet the `history` Object

Open your browser console and try typing:

```
console.log(history);
```

You'll see a whole object with methods that let you jump, push, replace, and peek into the user’s browsing history.

It’s like giving your web app its own remote control to the browser’s Back and Forward buttons.

---

### 🔙 Back in Time with `history.back()`

Say you’re on Page C, and you want to go back to Page B (just like hitting the back button):

```
history.back();
```

🧠 **Try this:** Navigate between a few pages, then run `history.back()` in the console.
See how it takes you back without clicking the back button?

---

### 🔜 Forward with `history.forward()`

If you’ve gone back and want to return forward:

```
history.forward();
```

🧪 **Try it now:** Go back, then run `history.forward()`.

---

### 🔁 Skip Around with `history.go(n)`

You want to skip backward or forward multiple steps?

```
history.go(-2); // Two steps back
history.go(1);  // One step forward
```

🧠 **Challenge:** Try `history.go(0)` — What happens? (We’ll review it at the end!)

---

## 🎯 Now, Let’s Talk Single Page Apps (SPAs)

In SPAs, we don't reload the page—but we still want URLs to reflect state (like `/dashboard`, `/profile`, etc.).
That’s where `pushState()` and `replaceState()` shine.

---

### ✨ `history.pushState()`

You add a new history entry **without a full reload**.

```js
history.pushState({ page: 1 }, "Profile Page", "/profile");
```

📦 What’s inside?

* **`{ page: 1 }`** → Your custom state object (can be anything: user IDs, tab state, etc.)
* **`"Profile Page"`** → Optional title (not widely used)
* **`"/profile"`** → The new URL that appears in the address bar

🧪 **Try it out:** Copy and paste the code in your console. Notice the URL change—no reload!

---

### ✏️ `history.replaceState()`

This one’s similar, but it **overwrites the current entry**.

```
history.replaceState({ page: 2 }, "Settings Page", "/settings");
```

Use it when you *don’t* want users to go "Back" to the previous state.

📚 **Example:** You're auto-logging someone in after a redirect—you replace the `/login` history with `/dashboard`.

---

## 🎧 Reacting to Changes: `popstate` Event

When the user hits Back or Forward in the browser, your app needs to respond.
You can listen for it:

```
window.addEventListener("popstate", function (event) {
  console.log("User navigated to: " + document.location.pathname);
  console.log("State object: ", event.state);
});
```

---

## 🧠 Recap Cheat Sheet

| Method                            | What it does                              |
| --------------------------------- | ----------------------------------------- |
| `history.back()`                  | Go back one page                          |
| `history.forward()`               | Go forward one page                       |
| `history.go(n)`                   | Move n pages in history (can be negative) |
| `pushState(state, title, url)`    | Add a new state + update URL              |
| `replaceState(state, title, url)` | Replace current state + URL               |
| `popstate`                        | Event that fires when the user navigates  |

---

## 🧪 Let's Practice!

---

### 1. 🚀 What’s the difference between `pushState()` and `replaceState()`?

---

### 2. 🔀 How do you move the browser forward two pages using the History API?


---

### 3. 🧑‍💻 Write code that adds a new history entry with the URL `/profile` and state `{ userId: 123 }`.


---

### 4. 💬 How does the `popstate` event help in single-page applications?


---

### 5. 🔄 What will `history.go(0)` do?
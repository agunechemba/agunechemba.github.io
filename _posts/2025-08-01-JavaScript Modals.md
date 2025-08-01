# 🪟 JavaScript Modals: alert, prompt, confirm.

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/coding.jpg" width="100%">

### 🧾 What Are Modals?

In simple terms, **modals are built-in dialog boxes** that **pause the browser** and wait for the user to interact. They’re great for alerts, getting input, or asking for confirmation.

Here are the 3 main types:

| Modal Type | Function    | Description                                                       |
| ---------- | ----------- | ----------------------------------------------------------------- |
| Alert      | `alert()`   | Shows a message and waits for the user to click "OK".             |
| Prompt     | `prompt()`  | Shows a message, waits for input, and returns the text entered.   |
| Confirm    | `confirm()` | Shows a message and returns `true` for OK and `false` for Cancel. |

Let’s look at each of them in action.

---

### 🔔 1. `alert()`: The Megaphone 📢

The `alert()` function simply **displays a message box** with an OK button.

```
alert("Hello, world!");
```

✅ Use this when you want to notify the user of something simple.

---

### 📥 2. `prompt()`: The Input Collector

This one is fun! It asks the user to enter some data.

```
let name = prompt("What is your name?");
alert("Hello, " + name + "!");
```

Here’s what happens:

* A box appears with a message and a text input.
* The user types something and clicks OK or Cancel.
* If they click OK, the value is returned as a string.
* If they click Cancel, it returns `null`.

You can even set a **default value**:

```js
let country = prompt("Where are you from?", "Nigeria");
```

---

### ✅ 3. `confirm()`: The Decision Maker

`confirm()` is like asking: “Are you sure?”

```
let isSure = confirm("Do you really want to delete this file?");
if (isSure) {
  alert("Deleted!");
} else {
  alert("Canceled.");
}
```

* If the user clicks OK, `confirm()` returns `true`.
* If the user clicks Cancel, it returns `false`.

It’s super useful for **final checks**, especially before destructive actions like deleting or logging out.

---

### ⚠️ Heads Up: These are Blocking!

All these modal functions **pause script execution** until the user responds. That’s why they can feel a bit “old-school” and disruptive.

Modern developers often replace them with **custom modal dialogs** using HTML, CSS, and JavaScript. But for quick demos, simple tasks, or beginner learning—they’re still gold.

---

### 💡 When Should You Use Modals?

* ✅ For debugging (e.g. `alert("Reached here!")`)
* ✅ For gathering quick input (`prompt("Enter password")`)
* ✅ For confirmation before risky actions (`confirm("Are you sure?")`)
* ❌ Not ideal for professional apps or smooth user experiences.

---

### 👨🏽‍💻 Bonus: Prompt Input Check

Here’s a quick code that uses `prompt()` and checks the value:

```
let age = prompt("What is your age?");
if (age !== null) {
  if (Number(age) >= 18) {
    alert("You can enter.");
  } else {
    alert("Sorry, come back later.");
  }
} else {
  alert("No age entered.");
}
```

We used `Number(age)` to convert the prompt input (which is a string) into a number.

---

## 🧠 Summary

JavaScript modals are your go-to tools when you need:

* To **alert** the user: `alert()`
* To **get input**: `prompt()`
* To **confirm actions**: `confirm()`

While they’re not flashy or stylish, they’re reliable for basic interactivity.

---

## ✅ Review and Practice Questions

1. **What is the main difference between `prompt()` and `confirm()` in JavaScript?**
2. **What will the following code return if the user clicks Cancel?**

   ```js
   let color = prompt("Favorite color?");
   ```
3. **Write a script that asks the user if they want to subscribe, and displays an appropriate message based on the response.**
4. **Can `alert()` return any value? Why or why not?**
5. **Why might developers avoid using `prompt()` and `confirm()` in production applications?**
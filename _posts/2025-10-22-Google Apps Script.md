# 🧭 Google Apps Script: Building A Custom Menu In Google Docs

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" alt="Google App Script" style="width: 100%;">

What if your Google Docs could have its own **custom menu** — sitting proudly on the toolbar beside “File,” “Edit,” and “View” — and when clicked, it runs your own function?
Sounds cool, right?

That’s exactly what we’re doing today!

In this blog-lesson, we’ll learn how to create a **custom menu in Google Docs** using Google Apps Script, and then make it display a **friendly “Hello World!”** alert.

Let’s dive into this elegant combination of code and creativity.

---

## 🧠 THE BIG IDEA

You’re about to build two things:

1. A **menu item** that appears in Google Docs (just like “Insert” or “Format”).
2. A **function** that runs when you click that menu item — showing a greeting popup.

So, the flow looks like this:

```
📄 Open Google Doc → 🧩 See new menu "PACKT" → 👆 Click "Greeting" → 💬 Popup says "Hello World!"
```

Beautiful and interactive — just like a small app living inside your document.

---

## 💻 THE CODE

Here’s our complete script:

```javascript
function createMenu() {
  DocumentApp.getUi()
    .createMenu("PACKT")
    .addItem("Greeting", "greeting")
    .addToUi();
}

function greeting() {
  var ui = DocumentApp.getUi();
  ui.alert("Greeting", "Hello World!", ui.ButtonSet.OK);
}
```

Now, let’s walk through it piece by piece.

---

## 🧩 PART 1 — Creating the Menu

```javascript
function createMenu() {
  DocumentApp.getUi()
    .createMenu("PACKT")
    .addItem("Greeting", "greeting")
    .addToUi();
}
```

This function creates a **custom menu** inside the Google Docs user interface (UI).

Let’s unpack each part.

---

### 🔹 `DocumentApp.getUi()`

* `DocumentApp` is the built-in Google Apps Script **service for Google Docs**.
* `.getUi()` means “get the user interface of the currently open document.”

Think of it as reaching into the document’s toolbar and saying,

> “Hey UI, I want to add something up there!”

---

### 🔹 `.createMenu("PACKT")`

This creates a **new menu** and names it **PACKT**.

You could name it anything you like:

* `"Pepe Hub"`
* `"My Tools"`
* `"Custom Commands"`

So when this function runs, you’ll see **PACKT** appear at the top of your Google Docs, beside the standard menus like “Tools” and “Help.”

---

### 🔹 `.addItem("Greeting", "greeting")`

This line adds a **menu item** to your new PACKT menu.

* `"Greeting"` → is the **label** users will see in the menu.
* `"greeting"` → is the **name of the function** that should run when the user clicks it.

So, when someone clicks **PACKT → Greeting**, the script calls the function named `greeting()` (which we’ll explain in Part 2).

---

### 🔹 `.addToUi()`

Finally, this line **attaches your new menu** to the Google Docs toolbar — making it visible and ready for use.

Without `.addToUi()`, the menu would be created in memory but never actually appear in the document.

---

### 🪄 When Does It Run?

You need to run `createMenu()` **once** to register the menu.
After that, you can also set it to run automatically when the document opens by adding a **trigger**:

```javascript
function onOpen() {
  createMenu();
}
```

This ensures that every time someone opens the document, the **PACKT** menu appears automatically.

---

## 🧩 PART 2 — The Greeting Function

```javascript
function greeting() {
  var ui = DocumentApp.getUi();
  ui.alert("Greeting", "Hello World!", ui.ButtonSet.OK);
}
```

This is the function that runs when you click the **Greeting** menu item.

Let’s dissect it.

---

### 🔹 `var ui = DocumentApp.getUi();`

Again, we’re accessing the **Google Docs user interface**.
We store it inside a variable named `ui` so we can easily call its methods later.

---

### 🔹 `ui.alert("Greeting", "Hello World!", ui.ButtonSet.OK);`

This creates an **alert dialog box** — a popup window right inside Google Docs.

It takes three arguments:

1. **Title:** `"Greeting"` → appears at the top of the alert box.
2. **Message:** `"Hello World!"` → the content inside the alert box.
3. **Button Set:** `ui.ButtonSet.OK` → defines what buttons appear (in this case, just an **OK** button).

So when it runs, you’ll see:

```
--------------------------
| Greeting               |
--------------------------
| Hello World!           |
|        [OK]            |
--------------------------
```

A simple but delightful greeting from your code!

---

## 🧩 HOW IT ALL WORKS TOGETHER

Let’s visualize the sequence:

1. You run the `createMenu()` function.
2. A new menu named **PACKT** appears in your Google Docs toolbar.
3. Inside that menu, you’ll find one item — **Greeting**.
4. When you click **PACKT → Greeting**, it runs the `greeting()` function.
5. The `greeting()` function displays an alert box with your **“Hello World!”** message.

A perfect example of how to blend **user interface design** and **script automation** inside Google Docs.

---

## 🧩 WHY THIS IS USEFUL

Custom menus are powerful! They let you transform an ordinary Google Doc into a mini-application.

You can use them to:

✅ Run formatting scripts
✅ Insert templates or custom text
✅ Generate reports
✅ Trigger add-ons or automations
✅ Offer users friendly, clickable commands

Basically, your own **personal command center** inside Google Docs.

---

## 🎓 SUMMARY

| Code Component                     | Purpose                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------- |
| `DocumentApp.getUi()`              | Access the document’s user interface                                       |
| `.createMenu("PACKT")`             | Creates a new menu named PACKT                                             |
| `.addItem("Greeting", "greeting")` | Adds a clickable menu item that triggers the `greeting` function           |
| `.addToUi()`                       | Displays the new menu in Google Docs                                       |
| `ui.alert()`                       | Shows a popup alert message                                                |
| `ui.ButtonSet.OK`                  | Adds an OK button to the alert                                             |
| **Result:**                        | Adds a new menu in Docs with a “Greeting” option that shows “Hello World!” |

---

## ✍️ REVIEW: 10 FILL-GAP QUESTIONS

1. The `DocumentApp` service allows scripts to interact with __________.
2. The method `.getUi()` retrieves the document’s __________ interface.
3. The `.createMenu("PACKT")` method creates a new __________ named PACKT.
4. The `.addItem("Greeting","greeting")` line adds a menu item labeled __________.
5. The second argument `"greeting"` in `.addItem()` refers to the name of a __________.
6. The `.addToUi()` method attaches the new menu to the Google Docs __________.
7. The `ui.alert()` method displays a __________ box.
8. The third argument `ui.ButtonSet.OK` adds a single __________ button.
9. To make the menu appear automatically when a document opens, wrap `createMenu()` inside an `__________` function.
10. When you click **PACKT → Greeting**, the alert box shows the message `"__________"`.
# 🧾  Google Apps Script: Displaying “HELLO WORLD!” As A Toast Message

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" alt="Google App Script" style="width: 100%;">

Instead of popping up a dialog box that interrupts your work, your script quietly slides a neat little notification into the corner of your Google Sheet — friendly, elegant, and non-intrusive.

That, my dear coder, is called a **Toast Message**.
And in today’s lesson, we’ll explore how to create one using Google Apps Script.

Let’s begin our warm, buttery toast of code:

---

## 🍞 The Code

```javascript
function greeting() {
  SpreadsheetApp.getActiveSpreadsheet()
    .toast("Hello World!", "Greeting");
}
```

Short, smooth, and deliciously efficient.
At first glance, it looks similar to our earlier `Browser.msgBox()` example, but the experience it creates inside Google Sheets is quite different.

So, what’s really going on behind those two lines? Let’s peel the layers.

---

## 🧩 Step 1: The Function Declaration

```javascript
function greeting() {
```

This line declares a function named `greeting`.

* The keyword `function` is the command to define a reusable block of code.
* The name `greeting` is how we’ll refer to this function whenever we want to call it.

No parameters are passed — meaning this function doesn’t need any input to run.

When you call `greeting()`, everything inside the curly braces `{ ... }` runs.

---

## 🧩 Step 2: Accessing the Spreadsheet

```javascript
SpreadsheetApp.getActiveSpreadsheet()
```

This is the line that **connects your script to the actual Google Sheet** that’s open right now.

Let’s break that chain down:

### 🔹 `SpreadsheetApp`

This is the Google Apps Script **service** that gives your code the ability to talk to and manipulate Google Sheets.

It can do all sorts of things — create new sheets, read or write data, change formatting, and much more.

### 🔹 `getActiveSpreadsheet()`

This method tells the script:

> “Give me the spreadsheet that’s currently open and active.”

So, at this point, your function is literally “grabbing” the current Google Sheet so it can do something inside it.

---

## 🧩 Step 3: The `.toast()` Method

Now here’s the hero of the story:

```javascript
.toast("Hello World!", "Greeting");
```

This is a **method** — a built-in function attached to the spreadsheet object you just accessed.

In plain English, it means:

> “Show a short notification on this spreadsheet.”

### 🧈 Toast messages in Google Sheets

A **toast** is a small pop-up notification that appears in the bottom-right corner of your Google Sheet — it doesn’t block your work or require any button click.

You might’ve seen similar ones like:

> “File saved.”
> “Copy completed.”
> “Form submitted successfully.”

They’re perfect for quick, friendly feedback without disturbing the user.

---

## 🧩 Step 4: The Toast Arguments

The `toast()` method takes **two main arguments** (though it can take more):

```javascript
.toast(message, title)
```

So in our example:

```javascript
.toast("Hello World!", "Greeting");
```

### 🥇 `"Hello World!"` – The Message

This is what the toast actually says — the main content of the little notification box.
You can change it to anything like:

> `"Data Updated Successfully!"` or `"Welcome to Pepe Programming Hub!"`

### 🥈 `"Greeting"` – The Title

This is the **heading** displayed above the message. It appears in bold text and helps categorize the notification.

So your toast might look like this in the corner of your Google Sheet:

```
Greeting
Hello World!
```

Short, friendly, and non-disruptive.

---

## 🧩 Step 5: What Happens When It Runs

When you click **Run** in your Google Apps Script editor (while connected to a Google Sheet), this function:

1. Connects to your currently open spreadsheet.
2. Displays a short toast message in the lower-right corner of the screen.
3. Shows:

   * Title: **Greeting**
   * Message: **Hello World!**

And then… it quietly disappears after a few seconds — no clicks needed!

It’s one of those tiny touches that make your spreadsheet feel smart and responsive.

---

## 🧩 Step 6: Why Use `.toast()` Instead of `Browser.msgBox()`?

Both show messages — but they serve different purposes.

| Feature                 | `Browser.msgBox()`          | `SpreadsheetApp.toast()`   |
| ----------------------- | --------------------------- | -------------------------- |
| Type                    | Popup dialog box            | Non-intrusive notification |
| User must click “OK”?   | ✅ Yes                       | ❌ No                       |
| Appears where?          | Center of screen            | Bottom-right of Sheet      |
| Stops script execution? | ✅ Yes (until user responds) | ❌ No (runs in background)  |
| Best used for           | Confirmations or decisions  | Quick feedback or info     |

So, when you want a **gentle notification** — use `.toast()`.
When you want **interaction or confirmation** — use `.msgBox()`.

---

## 🧩 Step 7: Practical Uses

Here are a few cool ways you might use toast messages:

✅ Show a completion message:

```javascript
toast("Data saved successfully!", "Done");
```

✅ Display progress during long tasks:

```javascript
toast("Sorting data...", "Please wait");
```

✅ Greet the user when the sheet opens:

```javascript
toast("Welcome to Pepe Hub Sheet!", "Hello");
```

✅ Notify about errors (in a friendly way):

```javascript
toast("Oops! Something went wrong.", "Error");
```

---

## 🧠 Summary

Let’s summarize today’s little Google Sheet snack:

| Code Component           | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `SpreadsheetApp`         | Gives access to Google Sheets services                                 |
| `getActiveSpreadsheet()` | Refers to the open spreadsheet                                         |
| `.toast()`               | Displays a short notification message                                  |
| `"Hello World!"`         | The message text                                                       |
| `"Greeting"`             | The title of the toast                                                 |
| **Result:**              | A “Hello World!” toast appears in the bottom-right corner of the Sheet |

---

## ✍️ Review: 10 Fill-Gap Questions

1. The keyword used to define a function is `__________`.
2. The service that allows interaction with Google Sheets is `__________`.
3. The method `getActiveSpreadsheet()` retrieves the currently __________ spreadsheet.
4. The `.toast()` method displays a small __________ in the Sheet.
5. The first argument in `.toast()` is the __________ of the message.
6. The second argument in `.toast()` is the __________ shown in bold.
7. Toast messages appear at the __________ of the Google Sheet window.
8. Unlike `Browser.msgBox()`, `.toast()` does not require the user to click __________.
9. `.toast()` is perfect for showing __________ feedback or quick updates.
10. In the example, the message shown to the user is `"__________"`.
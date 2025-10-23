# 💬 Google Apps Script: Your First “HELLO WORLD!” In A Popup

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" alt="Google App Script" style="width: 100%;">

Have you ever wanted your script to talk back to you?
Imagine your code greeting you politely with a friendly “Hello World!” popping up on your screen. That’s exactly what today’s little Google Apps Script adventure is about.

In this lesson, we’re going to explore one of the simplest yet most satisfying pieces of code you can ever write in **Google Apps Script** — a **message box** that says “Hello World!”. Don’t be deceived by its simplicity; this is your first step into creating interactive, user-friendly scripts in the Google Workspace environment.

---

## 🌟 Meet the Code

Here’s the magic spell we’ll be casting today:

```javascript
function greeting() {
  Browser.msgBox("Greeting", "Hello World!", Browser.Buttons.OK);
}
```

Looks short? Oh yes, it is — but every single part of it has a job to do.
Let’s unpack it line by line, like opening a neatly wrapped tech gift.

---

## 🧩 Step 1: The Function Declaration

The first line:

```javascript
function greeting() {
```

introduces us to **function declaration** in JavaScript (and by extension, Google Apps Script).

* The keyword `function` tells the script that what follows is a **block of reusable code**.
* The name `greeting` is what we’ll use whenever we want to **call** or **execute** this piece of code.

So whenever we write `greeting()` somewhere else in our script, Google Apps Script will know:

> “Ah! Run that piece of code that shows the greeting message box!”

The parentheses `()` are empty right now, meaning the function doesn’t take any input — no arguments, no parameters.

---

## 🧩 Step 2: The Function Body

Next, we have the curly braces `{ ... }`.
Everything inside these braces is what the function *actually does*.

In our case, it’s just one beautiful line:

```javascript
Browser.msgBox("Greeting", "Hello World!", Browser.Buttons.OK);
```

---

## 🧩 Step 3: Understanding `Browser.msgBox()`

Here’s where the fun begins.
`Browser.msgBox()` is a special **Apps Script method** that creates a **popup dialog** box — similar to an alert window — right in your Google Workspace app (like Google Sheets or Docs).

It’s like JavaScript’s `alert()` function, but smarter and better integrated into Google’s world.

---

## 🧩 Step 4: Breaking Down the Message Box Arguments

Our `Browser.msgBox()` has **three arguments** inside it — think of them as ingredients in your popup recipe.

### 🥇 1. The Title – `"Greeting"`

This appears at the top of your dialog box.
It gives the message box a heading — so your user knows what the popup is about.

### 🥈 2. The Message – `"Hello World!"`

This is the main text inside the dialog box.
You can replace it with anything:

> “Welcome to Pepe Hub!”
> “Form submitted successfully!”
> “Your report is ready.”

### 🥉 3. The Button Type – `Browser.Buttons.OK`

This tells Google which buttons to show.
Here we’re using a single **OK** button.

Other options include:

* `Browser.Buttons.OK_CANCEL`
* `Browser.Buttons.YES_NO`
* `Browser.Buttons.YES_NO_CANCEL`

But for our simple greeting, OK is just perfect.

---

## 🧩 Step 5: What Happens When It Runs

When you click the **Run** button in your Google Apps Script editor (after authorizing the script the first time), you’ll see something like this:

```
------------------------
|   Greeting           |
------------------------
|   Hello World!       |
|         [OK]         |
------------------------
```

When you click **OK**, the box disappears and the script ends.
A simple hello — like your code’s first smile. 😊

---

## 🧩 Step 6: Where It Works

This message box works **only within Google Workspace environments** such as:

* Google Sheets
* Google Docs
* Google Slides
* Forms (via attached scripts)

It will not appear in a browser as a web alert unless you build a web app using `HtmlService`.
So, think of this dialog box as a friendly *workspace assistant*.

---

## 🧩 Step 7: Why It’s Useful

You might be wondering — “Okay, but why use this in a real project?”

Here are a few neat reasons:
✅ To notify users after a task (e.g., “Your sheet has been updated.”)
✅ To confirm before performing an action (“Are you sure you want to delete this row?”)
✅ To pause a script and wait for user input (“Do you want to continue?”)
✅ To debug or show quick results while testing your code

In short, it’s a great tool for **interactivity** and **communication** inside your scripts.

---

## 🎓 Summary

Let’s summarize what our script does:

| Component             | Description                                      |
| --------------------- | ------------------------------------------------ |
| `function greeting()` | Defines a new function named `greeting`          |
| `{ ... }`             | Contains the block of code the function executes |
| `Browser.msgBox()`    | Displays a dialog box in Google Workspace        |
| `"Greeting"`          | Title of the popup                               |
| `"Hello World!"`      | Main message shown in the box                    |
| `Browser.Buttons.OK`  | Defines the OK button on the dialog              |
| **Result:**           | A simple popup that greets the user              |

---

## 🧠 Challenge for You

Try modifying the message to include your name or your hub’s name:

```javascript
Browser.msgBox("Welcome!", "Hello from Pepe Programming Hub!", Browser.Buttons.OK);
```

Then run it again — and feel the joy of your script personally greeting your learners!

---

## ✍️ Review: 10 Fill-Gap Questions

Let’s see how well you remember what you’ve just learned.

1. The keyword used to define a function in Google Apps Script is `__________`.
2. `Browser.msgBox()` is used to display a __________ box.
3. The first argument in `Browser.msgBox()` sets the __________ of the dialog.
4. `"Hello World!"` is the __________ displayed in the box.
5. To display only one “OK” button, we use `Browser.Buttons.__________`.
6. The `greeting()` name identifies the __________ of the function.
7. Curly braces `{}` contain the function’s __________.
8. The `Browser.msgBox()` method only works inside __________ environments.
9. To show both “Yes” and “No” buttons, use `Browser.Buttons.__________`.
10. When the function runs, the popup message shown is `"__________"`.
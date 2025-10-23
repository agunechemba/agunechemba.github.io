# 🪟 Google Apps Script: Building A Custom HTML Sidebar In Google Docs

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" alt="Google App Script" style="width: 100%;">

Have you ever dreamed of giving your Google Docs a little *personality* — like having your own sidebar with buttons, colors, and interactive content?

Welcome to the world of **HTML sidebars in Google Apps Script**.

In today’s lesson, we’ll take your “Hello World!” message out of the alert box and place it inside a stylish, clickable **sidebar** — the kind that appears on the right side of your Google Doc.

Get ready to blend HTML and Apps Script into one powerful combination! 💡

---

## 💻 The Code

Let’s start with the short but mighty script:

```javascript
function onOpen() {
  var htmlOutput = HtmlService
    .createHtmlOutput('<button onclick="alert(\'Hello World!\');">Click Me</button>')
    .setTitle('My Sidebar');
  
  DocumentApp.getUi().showSidebar(htmlOutput);
}
```

This compact function will automatically display a sidebar containing a **button**. When you click the button, a **browser-style alert** pops up saying “Hello World!”.

Let’s unpack how all of this magic happens — one line at a time.

---

## 🧩 Step 1: Understanding the `onOpen()` Function

```javascript
function onOpen() {
```

In Google Apps Script, the `onOpen()` function is a **special trigger** that runs automatically whenever you open the document.

So, you don’t even have to manually run the function — it activates by itself each time the file opens.

You can think of it as saying:

> “Whenever this Google Doc is opened, prepare the sidebar for me.”

That’s automation at its finest. ⚙️

---

## 🧩 Step 2: Creating HTML Content with `HtmlService`

```javascript
var htmlOutput = HtmlService
  .createHtmlOutput('<button onclick="alert(\'Hello World!\');">Click Me</button>')
  .setTitle('My Sidebar');
```

Here, we are generating a **small piece of HTML** that will be displayed inside the sidebar.

Let’s dissect it carefully.

---

### 🔹 `HtmlService`

This is a **built-in service** in Google Apps Script that lets you create and serve HTML, CSS, and JavaScript content — just like a mini web page, right inside your Google Workspace apps (Docs, Sheets, etc.).

It’s your portal to web-style interactivity within Google Docs.

---

### 🔹 `.createHtmlOutput('<button onclick="alert(\'Hello World!\');">Click Me</button>')`

This method builds the HTML interface we want to show in the sidebar.

Inside the parentheses, we’ve written a small snippet of HTML:

```html
<button onclick="alert('Hello World!');">Click Me</button>
```

This HTML creates a **button** labeled *Click Me*.

* The `onclick` attribute tells the button what to do when it’s clicked — in this case, run the JavaScript command `alert('Hello World!')`.
* When the user clicks the button, a browser alert pops up with our famous phrase: **“Hello World!”**

This is the same kind of alert you’d get from a web page — not from the Google Docs UI. It’s pure client-side HTML JavaScript.

---

### 🔹 `.setTitle('My Sidebar')`

This gives the sidebar a **title**, which will appear at the top of the panel when it’s displayed in Google Docs.

So you’ll see “My Sidebar” above your button.

You could change it to anything like:

* `"Welcome Panel"`
* `"Pepe Hub Tools"`
* `"Student Dashboard"`

---

### 🧠 Together, these lines mean:

> “Create a sidebar containing a button labeled ‘Click Me’.
> When the button is clicked, show a JavaScript alert saying ‘Hello World!’.
> Also, name this sidebar ‘My Sidebar’.”

Simple and elegant!

---

## 🧩 Step 3: Displaying the Sidebar

```javascript
DocumentApp.getUi().showSidebar(htmlOutput);
```

This is the command that **shows the sidebar** inside the Google Docs interface.

Let’s break it down:

* `DocumentApp` → refers to the Google Docs environment (as opposed to Sheets or Forms).
* `.getUi()` → accesses the **user interface** of that document.
* `.showSidebar(htmlOutput)` → tells the UI to display the HTML content we just created (`htmlOutput`) in a sidebar.

So, your sidebar slides into view on the right-hand side of the document, with your shiny “Click Me” button waiting for action.

---

## 🧩 Step 4: What Happens When You Open the Document

Here’s the sequence in action:

1. You open your Google Doc.
2. The `onOpen()` trigger runs automatically.
3. It creates an HTML output containing a clickable button.
4. The sidebar titled “My Sidebar” appears.
5. You click the button — and an alert pops up saying **“Hello World!”**.

Ta-da! You’ve just built a **custom sidebar interface** for your document.

---

## 🧩 Step 5: Why This Is Awesome

This approach unlocks endless creative possibilities because you can now use **HTML + CSS + JavaScript** right inside Google Docs!

Here are a few ideas for what you could do next:

✅ Create a sidebar with student information or progress updates.
✅ Add input fields for collecting user data.
✅ Display tutorial steps or embedded videos.
✅ Link buttons to functions that edit the document content.

Basically, this is how professional **Google Docs Add-ons** begin.
You’ve just built your first one! 🚀

---

## 🧠 Summary

Let’s summarize this beautiful little script:

| Code Component                                              | Purpose                                                                                 |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `onOpen()`                                                  | Runs automatically when the document is opened                                          |
| `HtmlService.createHtmlOutput()`                            | Creates an HTML interface                                                               |
| `<button onclick="alert('Hello World!')">Click Me</button>` | HTML code for the clickable button                                                      |
| `.setTitle('My Sidebar')`                                   | Sets the title of the sidebar                                                           |
| `DocumentApp.getUi().showSidebar(htmlOutput)`               | Displays the sidebar in Google Docs                                                     |
| **Result:**                                                 | A sidebar appears with a “Click Me” button that triggers an alert saying “Hello World!” |

---

## ✍️ Review: 10 Fill-Gap Questions

1. The function `onOpen()` runs automatically when a document is __________.
2. The `HtmlService` is used to create __________ content inside Google Workspace apps.
3. The method `.createHtmlOutput()` generates a block of __________ code.
4. The `<button>` tag in the HTML creates a clickable __________.
5. The `onclick` attribute specifies the JavaScript code to run when the button is __________.
6. In the example, clicking the button triggers a browser alert that says `"__________"`.
7. The `.setTitle('My Sidebar')` method sets the __________ of the sidebar.
8. The command `DocumentApp.getUi().showSidebar()` displays the HTML in the __________.
9. The sidebar appears on the __________ side of the Google Docs interface.
10. This approach allows you to combine Apps Script with __________, CSS, and JavaScript for interactive UIs.
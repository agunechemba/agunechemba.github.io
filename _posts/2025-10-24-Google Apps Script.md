# 🌟 Google Apps Script: Creating a Custom Add-ons Menu in Google Docs

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" width="100%">

So far, you’ve probably built a simple HTML interface in your script by writing it directly as a string — something like this:

```javascript
HtmlService.createHtmlOutput("<button>Click Me</button>");
```

That’s quick and easy for tiny snippets, but it can get messy fast! Imagine adding multiple buttons, input fields, or a form — your code becomes a jungle of tangled quotation marks and backslashes.

Luckily, Google Apps Script lets us **create separate HTML files** and use them neatly in our projects. Let’s explore that beautiful approach together.

---

## 🧩 Step 1: Creating a Separate HTML File

In your script editor, follow these simple steps:

1. Go to **File → New → HTML file**
2. A small box pops up asking for a file name.
3. Type **Index** (no need to add `.html` — it does that for you).
4. Click **OK**, and voilà! You now have an `Index.html` file sitting alongside your `Code.gs` file.

Google will even add a few default lines of HTML for you. It looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
  </body>
</html>
```

Now, let’s give this HTML page something to display — a lovely, friendly button.

---

## 💡 Step 2: Add a Button to the HTML Page

Between the `<body>` and `</body>` tags, add this simple button code:

```html
<button onclick="alert('Hello World!');">Click Me</button>
```

That’s it! You’ve created an HTML file that shows a clickable button.
But for it to appear inside Google Docs, we must call it from our Apps Script file.

---

## ⚙️ Step 3: Create Your Add-ons Menu in Apps Script

Now switch back to your `Code.gs` file and add this script:

```javascript
function onOpen() {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem("Show Sidebar", "showSidebar")
    .addToUi();
}

function showSidebar() {
  DocumentApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Greetings')
  );
}
```

Let’s break down what’s happening here:

* `onOpen()` runs automatically when the document opens.
* It creates a **custom Add-ons menu** using `.createAddonMenu()`.
* Inside that menu, we add a clickable item — **“Show Sidebar”** — that triggers the `showSidebar()` function.
* Finally, `showSidebar()` uses `HtmlService` to pull our **Index.html** file and display it neatly inside a **sidebar**.

That sidebar is where your button will appear — yes, *the one that says “Click Me!”*

---

## 🧪 Step 4: Test It Out!

To see it in action:

1. Run the `onOpen()` function manually, or
2. Simply reload your Google Doc.

You’ll now see a new **Add-ons menu** at the top bar of your document. Inside it, there’s your shiny new item — “Show Sidebar.”

Click it, and voilà — your sidebar slides into view with the **“Click Me”** button. When clicked, it politely says “Hello World!”

That’s your first working Add-on UI — small, but mighty!

---

## 🎓 Why This Matters

By separating your HTML file from your Apps Script, you:

* Keep your code **organized and readable**
* Make it easy to **update your interface** later
* Enable richer designs — forms, buttons, tables, and even CSS or JavaScript!

This modular approach is exactly how professional developers build scalable, maintainable Add-ons.

---

## ✍️ Review — Fill in the Gaps

Let’s see what you remember! Fill in the blanks below:

1. The `HtmlService.createHtmlOutputFromFile()` method loads content from a ______ file.
2. To create a new HTML file in Apps Script, go to **File → New → ______ file**.
3. The `onOpen()` function runs automatically whenever the ______ opens.
4. The method `.createAddonMenu()` helps create a custom ______ in Google Docs.
5. Inside `.addItem("Show Sidebar", "showSidebar")`, the first parameter is the ______ shown to users.
6. The second parameter (`"showSidebar"`) is the name of the ______ that runs when clicked.
7. HTML files can contain elements like buttons, forms, and ______.
8. Using a separate HTML file keeps your code more ______ and maintainable.
9. The title “Greetings” is set using the `.set______()` method.
10. When you click “Show Sidebar,” your HTML appears in a ______ on the right side of the document.
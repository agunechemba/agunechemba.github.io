# 💬 Google Apps Script: Creating a Modal Dialog in Google Docs

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" width="100%">

Imagine you’re creating an Add-on that needs the user’s full attention — maybe to confirm an action, display a warning, or collect some data before they continue.
You don’t want them clicking around the document while this message is showing, right?

That’s where the **modal dialog** comes in.

Unlike a sidebar (which politely sits to the side), a modal dialog takes center stage. It *locks the background* — meaning the user can’t edit or type in the document until they close it. It’s the perfect tool when you need undivided attention.

---

## ⚙️ Step 1: Update the Script Code

We’ll use the same HTML file (`Index.html`) you created earlier.
Now, let’s update the `Code.gs` file to include the modal dialog logic.

Here’s the code:

```javascript
function onOpen() {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem("Show Dialog", "showDialog")
    .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  DocumentApp.getUi().showModalDialog(html, 'Greeting');
}
```

Simple, clean, and elegant.

---

## 🧠 Let’s Break It Down

Let’s understand what each piece of this script is doing:

* **`onOpen()`** — This function runs automatically whenever your Google Doc (or Sheet) opens. It adds a new menu option under your Add-ons tab called **“Show Dialog.”**

* **`createAddonMenu()`** — This method creates the Add-on menu itself.

* **`addItem("Show Dialog", "showDialog")`** — This line adds a clickable item to the menu. When a user clicks **Show Dialog**, it triggers the **showDialog()** function.

* **`showDialog()`** — This function creates the dialog box itself.

  * First, it loads your **Index.html** file using `HtmlService.createHtmlOutputFromFile('Index')`.
  * Then, it uses `showModalDialog()` to display that HTML as a **blocking dialog box** titled *“Greeting.”*

---

## 🖥️ Step 2: Run and Test It

Now it’s time to see your modal in action!

1. Save your script.
2. Run the `onOpen()` function (or just reload the document).
3. Go to the **Add-ons menu → Chapter 2 → Show Dialog**.

And voilà — your modal dialog pops up front and center, with your “Click Me” button from the HTML file sitting proudly inside it.

Try clicking the button — it should still say “Hello World!”
Notice something? You can’t click anywhere else in the document until you close that dialog. That’s the magic of a **modal** interface.

---

## 🎨 Step 3: Understanding When to Use It

Use a modal dialog when you want the user’s full focus. Examples include:

* Confirming before deleting or submitting data
* Displaying important messages or warnings
* Collecting short form input (like a name or feedback)
* Guiding users through a one-time setup

If you just want to show information alongside their document — like an ongoing dashboard or form — use a **sidebar** instead.

But when your message is critical and non-ignorable, the **modal dialog** is your hero.

---

## 🧩 Step 4: Customizing Your Dialog

You can make your modal more appealing by adding custom HTML, CSS, or even JavaScript inside your `Index.html` file. For instance:

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      }
      button {
        background-color: royalblue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
      }
      button:hover {
        background-color: dodgerblue;
      }
    </style>
  </head>
  <body>
    <h2>Hello, Friend!</h2>
    <p>Welcome to your custom Google Docs Add-on dialog.</p>
    <button onclick="google.script.host.close()">Close Dialog</button>
  </body>
</html>
```

Now when you run your dialog, it feels like a real mini-app inside Google Docs.

---

## ✍️ Review — Fill in the Gaps

Let’s check how well you’ve understood this concept. Fill in the blanks below:

1. A **modal dialog** prevents the user from editing the ______ while it is open.
2. The method used to show a modal dialog is `show______Dialog()`.
3. The function that runs automatically when the document opens is called ______.
4. The `HtmlService.createHtmlOutputFromFile()` method loads the ______ file.
5. The `addItem("Show Dialog", "showDialog")` line adds a clickable item to the Add-ons ______.
6. A modal dialog stays on top until the user ______ it.
7. The first argument inside `showModalDialog()` is the ______ object.
8. The second argument in `showModalDialog()` is the dialog’s ______.
9. A sidebar allows editing in the background, but a modal dialog ______ interaction with the document.
10. To close a modal dialog from within HTML, you can call `google.script.host.______()`.
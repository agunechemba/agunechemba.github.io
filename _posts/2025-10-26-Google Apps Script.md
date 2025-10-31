# 🌈 Google Apps Script: Creating a Modeless Dialog in Google Docs

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" width="100%">

Imagine this: you’re working on a Google Doc, and your Add-on opens a little helper window — maybe it gives tips, or shows shortcuts, or even allows you to insert snippets of text as you type.
You wouldn’t want that window to freeze your document, right? You’d want to keep typing, scrolling, and editing while the helper floats nearby.

That’s exactly what a **modeless dialog** is built for.

Unlike the **modal dialog**, which locks the screen and demands your attention, the **modeless dialog** politely stays open in the corner — you can click, type, or edit your document while it quietly waits for your next move.

---

## ⚙️ Step 1: Update the Script

We’ll make just one tiny change to the code you wrote for the modal dialog.
Here’s the updated function:

```javascript
function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  DocumentApp.getUi().showModelessDialog(html, 'Greeting');
}
```

Did you notice the difference?
We simply replaced **`showModalDialog`** with **`showModelessDialog`**.
That one small change makes a big difference in how the dialog behaves.

---

## 🧠 Step 2: Understanding What’s Happening

Here’s what the code does, line by line:

* The first line creates a variable named `html` that loads your HTML file — in this case, `Index.html`.
* The next line calls the `showModelessDialog()` method, which displays the content in a floating dialog box.

But here’s the key distinction:

* A **modal** dialog *locks* your document — you can’t click or type until it’s closed.
* A **modeless** dialog *floats* above your document, allowing you to keep working freely.

It’s like a sticky note pinned to your workspace — always visible, but never in your way.

---

## 💻 Step 3: Test Your Modeless Dialog

Let’s bring it to life!

1. Save your script changes.
2. Run `onOpen()` or reload your Google Doc.
3. Go to **Add-ons → Chapter 2 → Show Dialog.**

You’ll now see your dialog appear just like before, but this time, notice how you can:

* Click inside your document.
* Type new text.
* Even drag the dialog around the screen.

That’s the **modeless** behavior in action! You get your mini-interface and your full document control — both at the same time.

---

## 🎨 Step 4: When to Use Modeless Dialogs

Modeless dialogs are perfect when you want your Add-on to assist the user continuously without blocking their workflow.
Think of it as a sidekick instead of a supervisor.

Use a modeless dialog for:

* Real-time tools (like word counters, translators, or note helpers)
* Forms that users fill while editing text
* Live feedback windows or hint panels
* In-document guides or floating tool palettes

---

## ✨ Bonus: Keep It Pretty and Functional

You can use the same `Index.html` you built earlier. Add styles or controls as you wish!
You might, for example, include a button to close the dialog when it’s no longer needed:

```html
<button onclick="google.script.host.close()">Close Dialog</button>
```

Or go fancy with a minimalist interface that feels like part of the editor itself — that’s the beauty of HTML customization inside Google Apps Script.

---

## 💡 The Big Picture

By now, you’ve built **three user interface types** in Google Apps Script:

1. **Sidebar** — docks neatly on the right, great for long-term panels.
2. **Modal Dialog** — locks the document until dismissed, best for alerts or confirmations.
3. **Modeless Dialog** — floats freely, lets users multitask, ideal for tools and assistants.

With these three, you can design just about any kind of interactive Add-on experience you dream up.

---

## ✍️ Review — Fill in the Gaps


1. A **modeless dialog** allows you to continue ______ while the dialog is open.
2. The Apps Script method to display it is `show______Dialog()`.
3. The only change from the modal version is replacing `showModalDialog` with `show______Dialog`.
4. A modeless dialog can be ______ around the screen.
5. Unlike modal dialogs, modeless ones do **not** ______ user interaction with the document.
6. The HTML file loaded inside the dialog is created with `HtmlService.createHtmlOutputFrom______()`.
7. The title of the dialog appears as the ______ argument in the `showModelessDialog` method.
8. Modeless dialogs are ideal for tools that provide ______-time help or feedback.
9. You can close a modeless dialog using `google.script.host.______()`.
10. Modeless dialogs act like floating ______ instead of blocking popups.
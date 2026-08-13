# 🚀 Google Apps Script Masterclass: Complete Series


<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" alt="Google App Script" style="width: 100%;">

*A hands-on journey into the world of automation, scripting, and smart Google Workspace tools.*

---

## 📖 About This Series

Welcome to this complete step-by-step guide designed to help you **learn, practice, and master Google Apps Script** — the powerful tool that lets you automate tasks in Google Sheets, Docs, Forms, and more.

Each lesson builds on the previous one, guiding you from the basics to creating your own automated systems.

---

# PART 1: THE FOUNDATIONS

---

## 📘 Day 1 – Introduction to Google Apps Script


If you've ever used Gmail, Google Drive, or Google Sheets, you've already been living in the Google ecosystem — a magical space where your work follows you anywhere there's an internet connection. But what if I told you that you can make these apps *work for you* — automatically, smartly, and even creatively?

Welcome to **Google Apps Script (GAS)** — Google's automation and scripting platform built on **JavaScript**.

---

### ☁️ Understanding Google Applications

Before we dive into scripting, let's talk about the playground. Google provides a family of apps called **Google Workspace Apps** — or simply **Google Apps**. These include:

- **Gmail** — for communication
- **Google Drive** — for file storage
- **Google Calendar** — for time management
- **Google Docs** — for documents
- **Google Sheets** — for spreadsheets
- **Google Forms** — for data collection

Unlike traditional software, these don't live on your computer — they run on **Google's cloud servers**. That's why you can start editing a document on your laptop and finish it later on your phone.

---

### 💡 What Is Google Apps Script (GAS)?

Think of GAS as **the brain behind your Google Apps**. It's a scripting platform that lets you write **JavaScript code** to automate tasks across all these apps.

For example:
- Automatically send emails at a scheduled time
- Move files between folders in Drive
- Create calendar events from Sheet data
- Build custom add-ons or tools for Docs and Forms

Google Apps Script runs entirely in the **cloud**. You don't install anything — you simply open your browser, visit the **Script Editor**, and start coding.

The scripts can be triggered manually or automatically:
- **onOpen()** – runs when a document or Sheet is opened
- **onEdit()** – runs when a user edits a cell
- **Time-driven triggers** – run every minute, hour, or day

---

### 🧩 GAS vs. VBA (Microsoft Visual Basic for Applications)

If you've ever worked with **Excel macros** or **Word automation**, you've probably heard of **VBA**. GAS is like Google's cloud-based cousin of VBA.

**Similarities:**
- Both automate repetitive tasks
- Both use event-driven functions (like `onEdit`, `onOpen`)
- Both can access and modify document content

**Differences:**

| Feature | VBA | GAS |
|---------|-----|-----|
| Platform | Local (Windows/Mac) | Cloud-based (Browser) |
| Language | Visual Basic | JavaScript |
| Access | Office apps only | Google Workspace apps |
| Installation | Requires MS Office | Runs online |
| Sharing | Manual | Automatically saved in the cloud |

---

### 🚀 Advantages of GAS

1. **Version Independence** – Your scripts live in your Google Account, not your machine
2. **Cross-Platform** – Works on Windows, Mac, Android, or iOS
3. **Cloud Storage** – Everything is automatically saved in Google Drive
4. **Collaboration** – Multiple users can share and edit projects together

---

### ⏳ Limitations of GAS

- Scripts can only run for a limited time (around **6 minutes** per execution)
- They depend on an internet connection
- Some advanced features need **authorization** from the user

---

### 📂 Google Drive — Your Cloud Workspace

**Google Drive** is your central storage hub. Every document, spreadsheet, form, or script you create in Google Workspace lives here.

You can:
- Create and share documents instantly
- Collaborate with others in real time
- Access your files from any device

---

### 📧 Gmail — Smarter Email Automation

With GAS, you can automate:
- **Birthday greetings** sent exactly at midnight
- **Bulk personalized messages** using data from Sheets
- **Daily reports** with attached PDFs

---

### 📅 Google Calendar — Scheduling Made Easy

Using the **CalendarApp service**, your script can:
- Create new calendar events
- Add invitees automatically
- Pull data from Sheets to schedule events in bulk

---

### 📄 Google Docs — Automating Text Documents

You can use the **DocumentApp service** to:
- Generate reports
- Format documents
- Translate text automatically
- Save and share them as PDFs

---

### 📊 Google Sheets — Programmable Spreadsheets

With the **SpreadsheetApp class**, you can:
- Read and write data dynamically
- Create dashboards
- Design custom formulas

For example:
```javascript
function myFunction(s1, s2) {
  return s1 + " " + s2;
}
```

Now, in your Sheet, type `=myFunction(A2,B2)` — and you've just built your first custom function!

---

### 🧱 Script Projects: Where the Magic Lives

Scripts in Google are saved as **projects**:
- **Standalone scripts** – independent files in Drive
- **Bound scripts** – attached to specific Docs, Sheets, or Forms

Bound scripts have *more privileges* because they directly interact with their parent document.

You can create a new script project by:
1. Opening [Google Drive](https://drive.google.com)
2. Clicking **New → More → Google Apps Script**
3. Writing your code and saving the project

---

### 📋 Google Forms — Collect and Process Data

Using GAS, you can:
- Create forms dynamically
- Process form submissions automatically
- Send notifications or save responses into Sheets

---

### 🔍 A Fun Experiment: Find a Document by Its ID

Every Google file (Doc, Sheet, or Form) has a **unique ID** in its URL.

Example: `https://docs.google.com/spreadsheets/d/11CEeHWygGKqxGS7jmQzLpeO7Fs3cjetT4HTrWXHTDSU/edit#gid=0`

That long string is the **file ID**. If a document is shared publicly, you can access it using just that ID.

---

### 📝 Chapter 1 Review

1. Google Apps Script is based on the **JavaScript** programming language.
2. All Google Apps run on Google's **cloud** servers.
3. GAS scripts are written and executed directly in the **browser**.
4. The service used to automate Gmail is called **GmailApp**.
5. The function `onOpen()` runs automatically when a document is **opened**.
6. GAS runs entirely in the **cloud**, while VBA runs locally.
7. The class used to automate spreadsheets is **SpreadsheetApp**.
8. A GAS project that is attached to a Sheet or Doc is called a **bound** script.
9. To automate form submissions, you can use an "on form submit" **trigger**.
10. GAS helps users automate tasks across Google products and **third-party** services.

---

## 📘 Day 2 – Your First "Hello World!" In A Popup



Have you ever wanted your script to talk back to you? Imagine your code greeting you politely with a friendly "Hello World!" popping up on your screen. That's exactly what today's adventure is about.

In this lesson, we're going to explore one of the simplest yet most satisfying pieces of code you can ever write in **Google Apps Script** — a **message box** that says "Hello World!".

---

### 🌟 Meet the Code

Here's the magic spell we'll be casting today:

```javascript
function greeting() {
  Browser.msgBox("Greeting", "Hello World!", Browser.Buttons.OK);
}
```

Looks short? Oh yes, it is — but every single part of it has a job to do.

---

### 🧩 Step 1: The Function Declaration

```javascript
function greeting() {
```

- The keyword `function` tells the script that what follows is a **block of reusable code**
- The name `greeting` is what we'll use whenever we want to **call** or **execute** this piece of code
- The parentheses `()` are empty right now, meaning the function doesn't take any input

---

### 🧩 Step 2: The Function Body

```javascript
Browser.msgBox("Greeting", "Hello World!", Browser.Buttons.OK);
```

`Browser.msgBox()` is a special **Apps Script method** that creates a **popup dialog** box — similar to an alert window — right in your Google Workspace app.

---

### 🧩 Step 3: Breaking Down the Arguments

**1. The Title – `"Greeting"`**
This appears at the top of your dialog box, giving the message box a heading.

**2. The Message – `"Hello World!"`**
This is the main text inside the dialog box.

**3. The Button Type – `Browser.Buttons.OK`**
This tells Google which buttons to show. Other options include:
- `Browser.Buttons.OK_CANCEL`
- `Browser.Buttons.YES_NO`
- `Browser.Buttons.YES_NO_CANCEL`

---

### 🧩 Step 4: What Happens When It Runs

When you click the **Run** button in your Google Apps Script editor, you'll see:

```
------------------------
|   Greeting           |
------------------------
|   Hello World!       |
|         [OK]         |
------------------------
```

---

### 🧩 Step 5: Where It Works

This message box works **only within Google Workspace environments** such as:
- Google Sheets
- Google Docs
- Google Slides
- Forms (via attached scripts)

---

### 🧩 Step 6: Why It's Useful

- ✅ To notify users after a task ("Your sheet has been updated.")
- ✅ To confirm before performing an action ("Are you sure you want to delete this row?")
- ✅ To pause a script and wait for user input
- ✅ To debug or show quick results while testing your code

---

### 🧠 Challenge for You

Try modifying the message to include your name:

```javascript
Browser.msgBox("Welcome!", "Hello from Pepe Programming Hub!", Browser.Buttons.OK);
```

---

### 📝 Chapter 2 Review

1. The keyword used to define a function in Google Apps Script is **function**.
2. `Browser.msgBox()` is used to display a **dialog** box.
3. The first argument in `Browser.msgBox()` sets the **title** of the dialog.
4. `"Hello World!"` is the **message** displayed in the box.
5. To display only one "OK" button, we use `Browser.Buttons.**OK**`.
6. The `greeting()` name identifies the **name** of the function.
7. Curly braces `{}` contain the function's **body**.
8. The `Browser.msgBox()` method only works inside **Google Workspace** environments.
9. To show both "Yes" and "No" buttons, use `Browser.Buttons.**YES_NO**`.
10. When the function runs, the popup message shown is **"Hello World!"**.

---

## 📘 Day 3 – Displaying "Hello World!" As A Toast Message


Instead of popping up a dialog box that interrupts your work, your script can quietly slide a neat little notification into the corner of your Google Sheet — friendly, elegant, and non-intrusive.

That, my dear coder, is called a **Toast Message**.

---

### 🍞 The Code

```javascript
function greeting() {
  SpreadsheetApp.getActiveSpreadsheet()
    .toast("Hello World!", "Greeting");
}
```

Short, smooth, and deliciously efficient.

---

### 🧩 Step 1: The Function Declaration

```javascript
function greeting() {
```

This line declares a function named `greeting` that doesn't need any input to run.

---

### 🧩 Step 2: Accessing the Spreadsheet

```javascript
SpreadsheetApp.getActiveSpreadsheet()
```

- **SpreadsheetApp** — The Google Apps Script **service** that gives your code the ability to talk to and manipulate Google Sheets
- **getActiveSpreadsheet()** — This method tells the script: "Give me the spreadsheet that's currently open and active"

---

### 🧩 Step 3: The `.toast()` Method

```javascript
.toast("Hello World!", "Greeting");
```

A **toast** is a small pop-up notification that appears in the bottom-right corner of your Google Sheet — it doesn't block your work or require any button click.

You might've seen similar ones like:
- "File saved."
- "Copy completed."
- "Form submitted successfully."

---

### 🧩 Step 4: The Toast Arguments

```javascript
.toast(message, title)
```

- **`"Hello World!"`** – The Message — the main content of the notification
- **`"Greeting"`** – The Title — the heading displayed above the message in bold

So your toast might look like this in the corner of your Google Sheet:

```
Greeting
Hello World!
```

---

### 🧩 Step 5: What Happens When It Runs

1. Connects to your currently open spreadsheet
2. Displays a short toast message in the lower-right corner of the screen
3. Shows the title and message
4. Quietly disappears after a few seconds — no clicks needed!

---

### 🧩 Step 6: Why Use `.toast()` Instead of `Browser.msgBox()`?

| Feature | `Browser.msgBox()` | `SpreadsheetApp.toast()` |
|---------|-------------------|--------------------------|
| Type | Popup dialog box | Non-intrusive notification |
| User must click "OK"? | ✅ Yes | ❌ No |
| Appears where? | Center of screen | Bottom-right of Sheet |
| Stops script execution? | ✅ Yes | ❌ No |
| Best used for | Confirmations or decisions | Quick feedback or info |

---

### 🧩 Step 7: Practical Uses

```javascript
// Show a completion message
toast("Data saved successfully!", "Done");

// Display progress during long tasks
toast("Sorting data...", "Please wait");

// Greet the user when the sheet opens
toast("Welcome to Pepe Hub Sheet!", "Hello");

// Notify about errors
toast("Oops! Something went wrong.", "Error");
```

---

### 📝 Chapter 3 Review

1. The keyword used to define a function is **function**.
2. The service that allows interaction with Google Sheets is **SpreadsheetApp**.
3. The method `getActiveSpreadsheet()` retrieves the currently **open** spreadsheet.
4. The `.toast()` method displays a small **notification** in the Sheet.
5. The first argument in `.toast()` is the **message** of the message.
6. The second argument in `.toast()` is the **title** shown in bold.
7. Toast messages appear at the **bottom-right** of the Google Sheet window.
8. Unlike `Browser.msgBox()`, `.toast()` does not require the user to click **OK**.
9. `.toast()` is perfect for showing **quick** feedback or quick updates.
10. In the example, the message shown to the user is **"Hello World!"**.

---

## 📘 Day 4 – Building A Custom Menu In Google Docs


What if your Google Docs could have its own **custom menu** — sitting proudly on the toolbar beside "File," "Edit," and "View" — and when clicked, it runs your own function?

That's exactly what we're doing today!

---

### 🧠 THE BIG IDEA

You're about to build two things:

1. A **menu item** that appears in Google Docs
2. A **function** that runs when you click that menu item — showing a greeting popup

```
📄 Open Google Doc → 🧩 See new menu "PACKT" → 👆 Click "Greeting" → 💬 Popup says "Hello World!"
```

---

### 💻 THE CODE

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

---

### 🧩 PART 1 — Creating the Menu

```javascript
function createMenu() {
  DocumentApp.getUi()
    .createMenu("PACKT")
    .addItem("Greeting", "greeting")
    .addToUi();
}
```

**🔹 `DocumentApp.getUi()`**
- `DocumentApp` is the built-in Google Apps Script **service for Google Docs**
- `.getUi()` means "get the user interface of the currently open document"

**🔹 `.createMenu("PACKT")`**
- Creates a **new menu** and names it **PACKT**
- You could name it anything: `"My Tools"`, `"Custom Commands"`, etc.

**🔹 `.addItem("Greeting", "greeting")`**
- `"Greeting"` → is the **label** users will see in the menu
- `"greeting"` → is the **name of the function** that should run when clicked

**🔹 `.addToUi()`**
- **Attaches your new menu** to the Google Docs toolbar

---

### 🧩 PART 2 — The Greeting Function

```javascript
function greeting() {
  var ui = DocumentApp.getUi();
  ui.alert("Greeting", "Hello World!", ui.ButtonSet.OK);
}
```

**🔹 `var ui = DocumentApp.getUi();`**
- Accessing the Google Docs user interface and storing it in a variable

**🔹 `ui.alert("Greeting", "Hello World!", ui.ButtonSet.OK);`**
- Creates an **alert dialog box** with:
  1. **Title:** `"Greeting"`
  2. **Message:** `"Hello World!"`
  3. **Button Set:** `ui.ButtonSet.OK` (just an OK button)

---

### 🧩 HOW IT ALL WORKS TOGETHER

1. You run the `createMenu()` function
2. A new menu named **PACKT** appears in your Google Docs toolbar
3. Inside that menu, you'll find one item — **Greeting**
4. When you click **PACKT → Greeting**, it runs the `greeting()` function
5. The `greeting()` function displays an alert box with your **"Hello World!"** message

---

### 🧩 WHY THIS IS USEFUL

Custom menus are powerful! They let you transform an ordinary Google Doc into a mini-application.

You can use them to:
- ✅ Run formatting scripts
- ✅ Insert templates or custom text
- ✅ Generate reports
- ✅ Trigger add-ons or automations
- ✅ Offer users friendly, clickable commands

---

### 📝 Chapter 4 Review

1. The `DocumentApp` service allows scripts to interact with **Google Docs**.
2. The method `.getUi()` retrieves the document's **user** interface.
3. The `.createMenu("PACKT")` method creates a new **menu** named PACKT.
4. The `.addItem("Greeting","greeting")` line adds a menu item labeled **Greeting**.
5. The second argument `"greeting"` in `.addItem()` refers to the name of a **function**.
6. The `.addToUi()` method attaches the new menu to the Google Docs **toolbar**.
7. The `ui.alert()` method displays a **dialog** box.
8. The third argument `ui.ButtonSet.OK` adds a single **OK** button.
9. To make the menu appear automatically when a document opens, wrap `createMenu()` inside an **onOpen** function.
10. When you click **PACKT → Greeting**, the alert box shows the message **"Hello World!"**.

---

## 📘 Day 5 – Building A Custom HTML Sidebar In Google Docs


Have you ever dreamed of giving your Google Docs a little *personality* — like having your own sidebar with buttons, colors, and interactive content?

Welcome to the world of **HTML sidebars in Google Apps Script**.

---

### 💻 The Code

```javascript
function onOpen() {
  var htmlOutput = HtmlService
    .createHtmlOutput('<button onclick="alert(\'Hello World!\');">Click Me</button>')
    .setTitle('My Sidebar');
  
  DocumentApp.getUi().showSidebar(htmlOutput);
}
```

This compact function will automatically display a sidebar containing a **button**. When you click the button, a **browser-style alert** pops up saying "Hello World!".

---

### 🧩 Step 1: Understanding the `onOpen()` Function

```javascript
function onOpen() {
```

In Google Apps Script, the `onOpen()` function is a **special trigger** that runs automatically whenever you open the document.

---

### 🧩 Step 2: Creating HTML Content with `HtmlService`

```javascript
var htmlOutput = HtmlService
  .createHtmlOutput('<button onclick="alert(\'Hello World!\');">Click Me</button>')
  .setTitle('My Sidebar');
```

**🔹 `HtmlService`**
This is a **built-in service** in Google Apps Script that lets you create and serve HTML, CSS, and JavaScript content — just like a mini web page, right inside your Google Workspace apps.

**🔹 `.createHtmlOutput('<button onclick="alert(\'Hello World!\');">Click Me</button>')`**
This method builds the HTML interface we want to show in the sidebar.

The HTML creates a **button** labeled *Click Me*:
- The `onclick` attribute tells the button what to do when it's clicked
- When the user clicks the button, a browser alert pops up with "Hello World!"

**🔹 `.setTitle('My Sidebar')`**
This gives the sidebar a **title**, which will appear at the top of the panel.

---

### 🧩 Step 3: Displaying the Sidebar

```javascript
DocumentApp.getUi().showSidebar(htmlOutput);
```

This is the command that **shows the sidebar** inside the Google Docs interface:
- `DocumentApp` → refers to the Google Docs environment
- `.getUi()` → accesses the **user interface** of that document
- `.showSidebar(htmlOutput)` → tells the UI to display the HTML content

---

### 🧩 Step 4: What Happens When You Open the Document

1. You open your Google Doc
2. The `onOpen()` trigger runs automatically
3. It creates an HTML output containing a clickable button
4. The sidebar titled "My Sidebar" appears
5. You click the button — and an alert pops up saying **"Hello World!"**

---

### 🧩 Step 5: Why This Is Awesome

This approach unlocks endless creative possibilities because you can now use **HTML + CSS + JavaScript** right inside Google Docs!

Here are a few ideas:
- ✅ Create a sidebar with student information or progress updates
- ✅ Add input fields for collecting user data
- ✅ Display tutorial steps or embedded videos
- ✅ Link buttons to functions that edit the document content

---

### 📝 Chapter 5 Review

1. The function `onOpen()` runs automatically when a document is **opened**.
2. The `HtmlService` is used to create **HTML** content inside Google Workspace apps.
3. The method `.createHtmlOutput()` generates a block of **HTML** code.
4. The `<button>` tag in the HTML creates a clickable **button**.
5. The `onclick` attribute specifies the JavaScript code to run when the button is **clicked**.
6. In the example, clicking the button triggers a browser alert that says **"Hello World!"**.
7. The `.setTitle('My Sidebar')` method sets the **title** of the sidebar.
8. The command `DocumentApp.getUi().showSidebar()` displays the HTML in the **sidebar**.
9. The sidebar appears on the **right** side of the Google Docs interface.
10. This approach allows you to combine Apps Script with **HTML**, CSS, and JavaScript for interactive UIs.

---

## 📘 Day 6 – Creating a Custom Add-ons Menu in Google Docs


So far, you've probably built a simple HTML interface in your script by writing it directly as a string — something like this:

```javascript
HtmlService.createHtmlOutput("<button>Click Me</button>");
```

That's quick and easy for tiny snippets, but it can get messy fast! Luckily, Google Apps Script lets us **create separate HTML files** and use them neatly in our projects.

---

### 🧩 Step 1: Creating a Separate HTML File

In your script editor, follow these simple steps:

1. Go to **File → New → HTML file**
2. A small box pops up asking for a file name
3. Type **Index** (no need to add `.html` — it does that for you)
4. Click **OK**

Google will even add a few default lines of HTML for you:

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

---

### 💡 Step 2: Add a Button to the HTML Page

Between the `<body>` and `</body>` tags, add this simple button code:

```html
<button onclick="alert('Hello World!');">Click Me</button>
```

---

### ⚙️ Step 3: Create Your Add-ons Menu in Apps Script

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

Let's break down what's happening here:
- `onOpen()` runs automatically when the document opens
- It creates a **custom Add-ons menu** using `.createAddonMenu()`
- Inside that menu, we add a clickable item — **"Show Sidebar"** — that triggers the `showSidebar()` function
- `showSidebar()` uses `HtmlService` to pull our **Index.html** file and display it neatly inside a **sidebar**

---

### 🧪 Step 4: Test It Out!

1. Run the `onOpen()` function manually, or
2. Simply reload your Google Doc

You'll now see a new **Add-ons menu** at the top bar of your document. Inside it, there's your shiny new item — "Show Sidebar."

Click it, and your sidebar slides into view with the **"Click Me"** button. When clicked, it politely says "Hello World!"

---

### 🎓 Why This Matters

By separating your HTML file from your Apps Script, you:
- Keep your code **organized and readable**
- Make it easy to **update your interface** later
- Enable richer designs — forms, buttons, tables, and even CSS or JavaScript

---

### 📝 Chapter 6 Review

1. The `HtmlService.createHtmlOutputFromFile()` method loads content from a **HTML** file.
2. To create a new HTML file in Apps Script, go to **File → New → HTML** file.
3. The `onOpen()` function runs automatically whenever the **document** opens.
4. The method `.createAddonMenu()` helps create a custom **menu** in Google Docs.
5. Inside `.addItem("Show Sidebar", "showSidebar")`, the first parameter is the **label** shown to users.
6. The second parameter (`"showSidebar"`) is the name of the **function** that runs when clicked.
7. HTML files can contain elements like buttons, forms, and **styles**.
8. Using a separate HTML file keeps your code more **organized** and maintainable.
9. The title "Greetings" is set using the `.set**Title**()` method.
10. When you click "Show Sidebar," your HTML appears in a **sidebar** on the right side of the document.

---

## 📘 Day 7 – Creating a Modal Dialog in Google Docs


Imagine you're creating an Add-on that needs the user's full attention — maybe to confirm an action, display a warning, or collect some data before they continue. You don't want them clicking around the document while this message is showing, right?

That's where the **modal dialog** comes in.

Unlike a sidebar (which politely sits to the side), a modal dialog takes center stage. It *locks the background* — meaning the user can't edit or type in the document until they close it.

---

### ⚙️ Step 1: Update the Script Code

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

---

### 🧠 Let's Break It Down

- **`onOpen()`** — This function runs automatically whenever your Google Doc opens. It adds a new menu option under your Add-ons tab called **"Show Dialog."**

- **`createAddonMenu()`** — This method creates the Add-on menu itself.

- **`addItem("Show Dialog", "showDialog")`** — This line adds a clickable item to the menu. When a user clicks **Show Dialog**, it triggers the **showDialog()** function.

- **`showDialog()`** — This function creates the dialog box itself:
  - First, it loads your **Index.html** file using `HtmlService.createHtmlOutputFromFile('Index')`
  - Then, it uses `showModalDialog()` to display that HTML as a **blocking dialog box** titled *"Greeting"*

---

### 🖥️ Step 2: Run and Test It

1. Save your script
2. Run the `onOpen()` function (or just reload the document)
3. Go to the **Add-ons menu → Chapter 2 → Show Dialog**

Your modal dialog pops up front and center with your "Click Me" button sitting proudly inside it.

Notice something? You can't click anywhere else in the document until you close that dialog. That's the magic of a **modal** interface.

---

### 🎨 Step 3: Understanding When to Use It

Use a modal dialog when you want the user's full focus. Examples include:
- Confirming before deleting or submitting data
- Displaying important messages or warnings
- Collecting short form input (like a name or feedback)
- Guiding users through a one-time setup

---

### 🧩 Step 4: Customizing Your Dialog

You can make your modal more appealing by adding custom HTML, CSS, or even JavaScript inside your `Index.html` file:

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

### 📝 Chapter 7 Review

1. A **modal dialog** prevents the user from editing the **document** while it is open.
2. The method used to show a modal dialog is `show**Modal**Dialog()`.
3. The function that runs automatically when the document opens is called **onOpen**.
4. The `HtmlService.createHtmlOutputFromFile()` method loads the **HTML** file.
5. The `addItem("Show Dialog", "showDialog")` line adds a clickable item to the Add-ons **menu**.
6. A modal dialog stays on top until the user **closes** it.
7. The first argument inside `showModalDialog()` is the **HTML** object.
8. The second argument in `showModalDialog()` is the dialog's **title**.
9. A sidebar allows editing in the background, but a modal dialog **blocks** interaction with the document.
10. To close a modal dialog from within HTML, you can call `google.script.host.**close**()`.

---

## 📘 Day 8 – Creating a Modeless Dialog in Google Docs


Imagine this: you're working on a Google Doc, and your Add-on opens a little helper window — maybe it gives tips, or shows shortcuts, or even allows you to insert snippets of text as you type. You wouldn't want that window to freeze your document, right? You'd want to keep typing, scrolling, and editing while the helper floats nearby.

That's exactly what a **modeless dialog** is built for.

Unlike the **modal dialog**, which locks the screen and demands your attention, the **modeless dialog** politely stays open in the corner — you can click, type, or edit your document while it quietly waits for your next move.

---

### ⚙️ Step 1: Update the Script

Here's the updated function:

```javascript
function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  DocumentApp.getUi().showModelessDialog(html, 'Greeting');
}
```

Did you notice the difference? We simply replaced **`showModalDialog`** with **`showModelessDialog`**.

---

### 🧠 Step 2: Understanding What's Happening

- The first line creates a variable named `html` that loads your HTML file — `Index.html`
- The next line calls the `showModelessDialog()` method, which displays the content in a floating dialog box

**Key distinction:**
- A **modal** dialog *locks* your document — you can't click or type until it's closed
- A **modeless** dialog *floats* above your document, allowing you to keep working freely

---

### 💻 Step 3: Test Your Modeless Dialog

1. Save your script changes
2. Run `onOpen()` or reload your Google Doc
3. Go to **Add-ons → Chapter 2 → Show Dialog**

You'll now see your dialog appear just like before, but this time, notice how you can:
- Click inside your document
- Type new text
- Even drag the dialog around the screen

That's the **modeless** behavior in action!

---

### 🎨 Step 4: When to Use Modeless Dialogs

Modeless dialogs are perfect when you want your Add-on to assist the user continuously without blocking their workflow.

Use a modeless dialog for:
- Real-time tools (like word counters, translators, or note helpers)
- Forms that users fill while editing text
- Live feedback windows or hint panels
- In-document guides or floating tool palettes

---

### ✨ Bonus: Keep It Pretty and Functional

You can use the same `Index.html` you built earlier. Add styles or controls as you wish:

```html
<button onclick="google.script.host.close()">Close Dialog</button>
```

---

### 💡 The Big Picture

By now, you've built **three user interface types** in Google Apps Script:

1. **Sidebar** — docks neatly on the right, great for long-term panels
2. **Modal Dialog** — locks the document until dismissed, best for alerts or confirmations
3. **Modeless Dialog** — floats freely, lets users multitask, ideal for tools and assistants

---

### 📝 Chapter 8 Review

1. A **modeless dialog** allows you to continue **working** while the dialog is open.
2. The Apps Script method to display it is `show**Modeless**Dialog()`.
3. The only change from the modal version is replacing `showModalDialog` with `show**Modeless**Dialog`.
4. A modeless dialog can be **dragged** around the screen.
5. Unlike modal dialogs, modeless ones do **not** **block** user interaction with the document.
6. The HTML file loaded inside the dialog is created with `HtmlService.createHtmlOutputFrom**File**()`.
7. The title of the dialog appears as the **second** argument in the `showModelessDialog` method.
8. Modeless dialogs are ideal for tools that provide **real**-time help or feedback.
9. You can close a modeless dialog using `google.script.host.**close**()`.
10. Modeless dialogs act like floating **stickies** instead of blocking popups.

---

## 📘 Day 9 – Debugging Like a Pro


Every programmer — beginner or seasoned — faces this moment: your code runs, but it doesn't behave as expected. Maybe the output is strange, maybe nothing happens at all. The question then becomes: *what's really going on inside this code?*

That's where **debugging** steps in — and Google Apps Script gives you excellent tools for it.

The two most powerful are:
1. **Logger**, for writing helpful messages as your code runs
2. **Breakpoints**, for stopping code execution and inspecting variables in real time

---

### 🔍 Step 1: Using the Logger to Track Your Script

The **Logger** class in Apps Script is your friendly "black box" — it records information as your script runs, so you can peek inside later to see what happened.

### Example Code:

```javascript
function showDialog() {
  var ui = DocumentApp.getUi();
  var response = ui.prompt(
    'Greeting',
    'Will you enter your name below?',
    ui.ButtonSet.YES_NO
  );

  if (response.getSelectedButton() == ui.Button.YES) {
    Logger.log('Your name is %s.', response.getResponseText());
  } else if (response.getSelectedButton() == ui.Button.NO) {
    Logger.log('You clicked "NO" button');
  } else {
    Logger.log('You closed the dialog.');
  }
}
```

Let's unpack what's happening:
- `ui.prompt()` shows a small input dialog asking the user to enter their name
- The user then clicks **Yes**, **No**, or closes the dialog
- Depending on the choice, different messages are logged using `Logger.log()`

---

### 🧠 Step 2: Viewing the Logs

After running your `showDialog()` function, open your logs:
- On **Windows**, press `Ctrl + Enter`
- On **Mac**, press `Command + Enter`
- Or go to **View → Logs**

You'll see your messages neatly displayed with timestamps.

---

### 🧩 Step 3: Another Example — The `debug()` Function

```javascript
function debug() {
  var square = 0;
  for (var i = 0; i < 10; i++) {
    square = i * i;
    Logger.log(square);
  }
}
```

When you run this function and open your logs, you'll see:
```
0
1
4
9
16
25
36
49
64
81
```

This shows you how variables change as the loop runs — a fantastic way to *see inside* your logic.

---

### 🐞 Step 4: Debugging with Breakpoints

Sometimes, you need more than just logs. You want to **pause** the script mid-run and *inspect variables directly*. That's where **breakpoints** come in.

Here's how to do it:
1. In the Apps Script editor, click the line number where you want your code to pause. A **red dot** appears — that's your breakpoint.
2. From the **Select function** dropdown at the top, choose the function you want to debug
3. Click the **Debug button** — the little insect icon 🪳 beside the function selector

The script will start running and then stop at your breakpoint. When paused, the editor splits into two sections:
- The **top** shows your code
- The **bottom** shows your variables and their values

---

### 🧭 Step 5: Step Through the Code

Once paused, you can move through the code step by step using these controls:
- **Step Into** – goes inside a function call line by line
- **Step Over** – runs the current line and moves to the next
- **Step Out** – jumps out of the current function to the next caller
- **Continue** – resumes running until the next breakpoint

---

### 🧹 Step 6: Finishing and Cleaning Up

When you're done debugging:
- Click the **Stop Debugging** button (the red square)
- Remove breakpoints by clicking their red dots again

---

### 💬 Why Debugging Matters

Debugging isn't just about fixing errors — it's about **understanding your program**. By observing how variables change, you start thinking like your code thinks. That's how you move from "guessing" what's wrong to **knowing** exactly what's wrong.

Great developers don't avoid bugs — they simply know how to chase them down.

---

### 📝 Chapter 9 Review

1. The `Logger` class helps to record and display **messages** while the script runs.
2. To view logs, press **Ctrl + Enter** (Windows) or **Command + Enter** (Mac), or go to **View → Logs**.
3. The method to record messages is `Logger.**log**()`.
4. The `ui.prompt()` method displays a **dialog** dialog box.
5. A **breakpoint** is set by clicking the **line** number where you want to pause execution.
6. The **Debug** button in the toolbar looks like a small **insect** icon.
7. When the debugger pauses, variable values are shown in the **bottom** section of the editor.
8. The "Step Into," "Step Over," and "Step Out" buttons help you move through the code **step** by **step**.
9. To end debugging, click on the **Stop Debugging** button and remove all **breakpoints**.
10. Debugging helps you understand what your code is actually **doing**.

---

# 🎓 CONCLUSION

Congratulations! You've completed the entire Google Apps Script Masterclass Series. You've gone from complete beginner to being able to:

- ✅ Understand what Google Apps Script is and how it works
- ✅ Write your first scripts and functions
- ✅ Create custom menus and user interfaces
- ✅ Build sidebars, modal dialogs, and modeless dialogs
- ✅ Debug your code like a professional
- ✅ Create complete Add-ons for Google Docs and Sheets

---

## 🚀 What's Next?

The journey doesn't end here! Here are some ideas for what you can build next:

- 📊 **Automated Reporting Systems** – Generate PDF reports from Sheet data
- 📧 **Email Automation** – Send personalized emails based on form submissions
- 📅 **Calendar Integration** – Create events automatically from spreadsheet data
- 📝 **Document Generators** – Create customized documents from templates
- 🎯 **Project Management Tools** – Build custom workflows for your team

---

## 🔗 Stay Connected

Keep exploring more lessons and tutorials at **[Agunechemba's Tech Classroom](https://agunechemba.name.ng/)** — where learning meets creativity.

---

> 🧠 *"Automation is not about replacing people — it's about freeing them to think bigger."*

---

**Happy Coding! 🚀**

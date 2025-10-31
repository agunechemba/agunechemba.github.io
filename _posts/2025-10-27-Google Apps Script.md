# 🪄 Google Apps Script: Debugging Like a Pro

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/google-apps-script-education.jpg" width="100%">

Every programmer — beginner or seasoned — faces this moment: your code runs, but it doesn’t behave as expected. Maybe the output is strange, maybe nothing happens at all. The question then becomes: *what’s really going on inside this code?*

That’s where **debugging** steps in — and Google Apps Script gives you excellent tools for it.
The two most powerful are:

1. **Logger**, for writing helpful messages as your code runs.
2. **Breakpoints**, for stopping code execution and inspecting variables in real time.

Let’s explore both — starting with the easiest one.

---

## 🔍 Step 1: Using the Logger to Track Your Script

The **Logger** class in Apps Script is your friendly “black box” — it records information as your script runs, so you can peek inside later to see what happened.

Here’s how you can add it to your existing function.

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

Let’s unpack what’s happening here.

* `ui.prompt()` shows a small input dialog asking the user to enter their name.
* The user then clicks **Yes**, **No**, or closes the dialog.
* Depending on the choice, different messages are logged using `Logger.log()`.

For example:

* If you type “Ada” and click *Yes*, the log might say:
  `Your name is Ada.`
* If you click *No*, it’ll log:
  `You clicked 'NO' button.`

---

## 🧠 Step 2: Viewing the Logs

After running your `showDialog()` function, open your logs:

* On **Windows**, press `Ctrl + Enter`
* On **Mac**, press `Command + Enter`
* Or go to **View → Logs**

You’ll see your messages neatly displayed with timestamps — perfect for understanding how your script behaved during execution.

It’s like your code whispering back to you: “Hey, this is what I just did!”

---

## 🧩 Step 3: Another Example — The `debug()` Function

Let’s go deeper by creating another function that shows how logging works in loops:

```javascript
function debug() {
  var square = 0;
  for (var i = 0; i < 10; i++) {
    square = i * i;
    Logger.log(square);
  }
}
```

When you run this function and open your logs, you’ll see:

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

## 🐞 Step 4: Debugging with Breakpoints

Sometimes, you need more than just logs. You want to **pause** the script mid-run and *inspect variables directly*. That’s where **breakpoints** come in.

Here’s how to do it:

1. In the Apps Script editor, click the line number where you want your code to pause.
   A **red dot** appears — that’s your breakpoint.

2. From the **Select function** dropdown at the top, choose the function you want to debug (for example, `debug`).

3. Click the **Debug button** — the little insect icon 🪳 beside the function selector.

The script will start running and then stop at your breakpoint.
When paused, the editor splits into two sections:

* The **top** shows your code.
* The **bottom** shows your variables and their values.

Now you can see, in real time, what’s happening with each variable — their values, their types, and how they change.

---

## 🧭 Step 5: Step Through the Code

Once paused, you can move through the code step by step using these controls:

* **Step Into** – goes inside a function call line by line.
* **Step Over** – runs the current line and moves to the next.
* **Step Out** – jumps out of the current function to the next caller.
* **Continue** – resumes running until the next breakpoint.

This is how you *walk through* your program, watching its logic unfold one step at a time.

---

## 🧹 Step 6: Finishing and Cleaning Up

When you’re done debugging:

* Click the **Stop Debugging** button (the red square).
* Remove breakpoints by clicking their red dots again.

Your code is now clean and ready to run normally.

---

## 💬 Why Debugging Matters

Debugging isn’t just about fixing errors — it’s about **understanding your program**.
By observing how variables change, you start thinking like your code thinks. That’s how you move from “guessing” what’s wrong to **knowing** exactly what’s wrong.

Great developers don’t avoid bugs — they simply know how to chase them down.

---

## ✍️ Review — Fill in the Gaps


1. The `Logger` class helps to record and display ______ while the script runs.
2. To view logs, press **Ctrl + Enter** (Windows) or **Command + Enter** (Mac), or go to **View → ______**.
3. The method to record messages is `Logger.______()`.
4. The `ui.prompt()` method displays a ______ dialog box.
5. A **breakpoint** is set by clicking the ______ number where you want to pause execution.
6. The **Debug** button in the toolbar looks like a small ______ icon.
7. When the debugger pauses, variable values are shown in the ______ section of the editor.
8. The “Step Into,” “Step Over,” and “Step Out” buttons help you move through the code ______ by ______.
9. To end debugging, click on the **Stop Debugging** button and remove all ______.
10. Debugging helps you understand what your code is actually ______.
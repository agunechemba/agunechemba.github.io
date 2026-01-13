# Blueprints & Organization

<img src="https://i.ibb.co/RT7nrYbQ/blueprint.png" width="100%">

## Constructors & Modules

Imagine you are building with LEGO.

At first, you just join blocks anyhow and you’re happy it stands.
But one day, you want to build a **big city**, not just one small house.

That is exactly what happens in programming.

At this step, you stop writing “small scripts” and start learning how to build **real applications** that can grow.

---

## What Is an Application?

An **application (app)** is a program that solves a problem.

A notes page that saves text?
That is already an app.

A task list?
Also an app.

So now, you are learning how to build apps *properly*.

---

## The Big Problem This Lesson Solves

When beginners code, they often:

* Put everything in one place
* Repeat the same code many times
* Get confused when things stop working

This lesson teaches **organization**.

And we use two main tools:

* **Constructors**
* **Modules**

But first, let’s understand the web parts.

---

## The Three Web Friends

Every website has three main friends:

**HTML**
HTML is the **structure**.
It creates buttons, inputs, headings, and spaces on the page.

**CSS**
CSS controls how things **look**.
Colors, borders, spacing, and fonts.

**JavaScript**
JavaScript is the **brain**.
It stores data, reacts to clicks, and controls behavior.

Each friend has one job.
When they mix jobs, confusion starts.

---

## What Is Data?

**Data** is information your app works with.

Examples:

* A note
* A task
* A student name
* A description

JavaScript stores and controls data.

To store data neatly, we use **objects**.

---

## What Is an Object?

An **object** is a container that holds related information together.

For example, one note can have:

* a title
* a description

Instead of spreading these everywhere, we keep them together in one object.

---

## Constructors: Blueprints for Objects

A **constructor** is a special function used to create objects.

Think of it as a **cookie cutter**.
Every cookie made from it has the same shape.

Here is a constructor:

```js
function Entry(title, description) {
  this.title = title;
  this.description = description;
}
```

This does not create anything yet.
It only explains **how an entry should look**.

To create a real object, we use the **`new` keyword**.

```js
var myEntry = new Entry("My Note", "Learning JavaScript");
```

The word **`this`** means:
“the object currently being created.”

So each time you use `new`, JavaScript makes a fresh object.

---

## Why Constructors Matter

Without constructors:

* Objects may look different
* Code becomes messy
* Showing data on the page is harder

With constructors:

* All data looks the same
* Your app becomes predictable
* Bugs reduce

This is how serious apps are built.

---

## The Next Problem: Too Much JavaScript Everywhere

When all your JavaScript lives everywhere, problems appear.

Variables clash.
Data gets changed by mistake.

So we need a safe place.

---

## Modules: Keeping Code Safe

A **module** is a container for code.

It groups related data and functions together and protects them.

We create modules using something called an **IIFE**.

**IIFE** means *Immediately Invoked Function Expression*.
That’s a big name for something simple.

It means:

* A function that runs immediately
* Creates a private space

Here is a simple module:

```js
var EntryManager = (function () {
  var entries = [];

  function addEntry(title, description) {
    entries.push(new Entry(title, description));
  }

  function getEntries() {
    return entries;
  }

  return {
    addEntry,
    getEntries
  };
})();
```

The list called `entries` is **private data**.
Other code cannot touch it directly.

Only what we return becomes **public methods**.

This keeps your app safe.

---

## What Is the DOM?

**DOM** means *Document Object Model*.

It is JavaScript’s way of seeing and controlling HTML.

When JavaScript:

* reads input values
* creates new divs
* changes text on the page

It is working with the DOM.

---

## Rendering: Showing Data on the Page

**Rendering** means showing JavaScript data on the screen.

If data exists only in JavaScript, users cannot see it.

Rendering turns data into visible HTML.

---

## Our Simple App Idea

We will build a small **Entry App**.

It will:

* Collect text from a form
* Save it using JavaScript
* Display it on the page

This idea works for notes, tasks, students, or items.

---

## HTML: Page Structure

```html
<h1>My Entry App</h1>

<form id="entryForm">
  <input id="titleInput" placeholder="Title">
  <textarea id="descInput" placeholder="Description"></textarea>
  <button>Add</button>
</form>

<div id="entryList"></div>
```

HTML only prepares the space.

---

## CSS: Simple Styling

```css
body {
  font-family: Arial;
}

.entry {
  border: 1px solid gray;
  padding: 10px;
  margin-top: 10px;
}
```

CSS only handles appearance.

---

## JavaScript: Rendering Entries

```js
function renderEntries() {
  var list = document.getElementById("entryList");
  list.innerHTML = "";

  EntryManager.getEntries().forEach(function (entry) {
    var div = document.createElement("div");
    div.className = "entry";
    div.innerHTML =
      "<h3>" + entry.title + "</h3><p>" + entry.description + "</p>";
    list.appendChild(div);
  });
}
```

This turns objects into visible content.

---

## Events and Event Listeners

An **event** is something that happens:

* clicking
* typing
* submitting a form

An **event listener** waits for an event and reacts.

```js
document.getElementById("entryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  EntryManager.addEntry(
    titleInput.value,
    descInput.value
  );

  renderEntries();
  this.reset();
});
```

Now the app responds to user actions.

---

## Separation of Concerns (Very Important)

This big idea means:

* HTML → structure
* CSS → looks
* JavaScript → behavior

When each part does its job, your app stays clean and easy to fix.

---

## What You Have Learned

By the end of this lesson, you understand:

* What data is
* How constructors create objects
* How modules organize and protect code
* How JavaScript talks to HTML
* How apps are structured

This is the moment you stop thinking like a beginner and start thinking like a **builder**.
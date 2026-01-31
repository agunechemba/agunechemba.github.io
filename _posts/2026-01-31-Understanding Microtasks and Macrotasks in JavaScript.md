# Understanding Microtasks and Macrotasks in JavaScript (Without Stress)

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/0.jpg" width="100%">

JavaScript can feel confusing sometimes, especially when code does **not run in the order you expect**.
You write one thing at the top, another at the bottom… and boom 💥 the output comes out differently.

If you’ve ever asked:

> “Why did my `setTimeout` run last even with `0` delay?”

Then this post is for you.

Let’s calmly break down **microtasks** and **macrotasks**, and by the end, JavaScript’s behavior will start making real sense.

---

## First, how JavaScript really works

JavaScript runs on **one main thread**.
That means it can only do **one thing at a time**.

To manage multiple tasks, JavaScript uses something called the **Event Loop**.
The Event Loop decides **what runs next** and **when**.

The order is always:

1. Run normal (synchronous) code
2. Run **all microtasks**
3. Run **one macrotask**
4. Repeat the cycle

Keep that order in your head. It explains everything.

---

## What is a Microtask?

A **microtask** is a very high-priority task.
JavaScript treats it like:

> “Do this immediately after the current code finishes.”

### Common Microtask examples

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`

### Simple example

```js
Promise.resolve().then(() => {
  console.log("This is a microtask");
});
```

### What this means

* The promise callback does **not** run immediately
* It waits until the current code finishes
* Then it runs **before anything else**

Microtasks are mainly used for **important logic**, like:

* Handling API responses
* Updating application state
* Keeping data consistent

That’s why JavaScript gives them **top priority**.

---

## What is a Macrotask?

A **macrotask** is a scheduled task that can wait a little.

JavaScript sees it like:

> “Okay, I’ll do this later when I’m free.”

### Common Macrotask examples

* `setTimeout`
* `setInterval`
* DOM events (click, scroll)
* Message events

### Example

```js
setTimeout(() => {
  console.log("This is a macrotask");
}, 0);
```

⚠️ Important note:
Even with `0` milliseconds, `setTimeout` **never runs immediately**.

It always waits for:

1. All synchronous code
2. All microtasks

Only then does it run.

---

## Microtask vs Macrotask (Side-by-Side)

| Feature    | Microtask                | Macrotask        |
| ---------- | ------------------------ | ---------------- |
| Priority   | Very high                | Lower            |
| Runs when? | Right after current code | After microtasks |
| Queue      | Microtask Queue          | Macrotask Queue  |
| Examples   | Promise.then             | setTimeout       |
| Execution  | All at once              | One per loop     |

---

## Let’s see this in action

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

### Step-by-step explanation

1. `"A"` logs immediately
2. `"D"` logs immediately
3. Promise (`"C"`) runs next (microtask)
4. `setTimeout` (`"B"`) runs last (macrotask)

### Final output

```text
A
D
C
B
```

This is not magic.
It’s just **priority rules**.

---

## Why JavaScript was designed this way

Promises often handle **critical logic**.
Timers and events are usually less urgent.

So JavaScript says:

> “Finish all promise work first, then handle timers.”

This prevents bugs, broken state updates, and weird UI behavior.

---

## One-sentence takeaway 🧠

> **Microtasks always finish before macrotasks, no matter the delay time.**

---

## Final advice for learners

If JavaScript output ever confuses you, ask yourself:

1. Is this synchronous?
2. Is this a microtask (Promise)?
3. Is this a macrotask (setTimeout)?

Answering those three questions will save you **hours of frustration**.
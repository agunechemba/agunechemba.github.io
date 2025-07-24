# 🚀 JavaScript Promises: A LEGO Spaceship Adventure

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/3_african_children_making_a_spaceship.jpg" width="100%">

---

## 🧱 The Story Begins...

Imagine you're chilling at home on a rainy Saturday when you get an idea — “What if I asked my friend Timi to build me a LEGO spaceship?” You message him, and he replies:

> “Sure! I promise I’ll build it and bring it over.”

Great! But now, you're left wondering...

> “Will he really build it? How long will it take? What if he forgets? Or loses the pieces?!”

This uncertainty… is exactly what **JavaScript Promises** are all about.

---

## 🧠 What Is a JavaScript Promise?

In JavaScript, a **Promise** is an object that represents a **task that will complete in the future**—either successfully (fulfilled), unsuccessfully (rejected), or not yet done (pending). It’s especially useful when working with things that **take time**, like:

* Fetching data from an online server 🌐
* Waiting for a file to load 📁
* Pausing before showing a result ⏳

Let’s go back to Timi and your spaceship.

---

## 🚦 The Three States of a Promise

When you first asked Timi to build the spaceship, here’s how things looked:

### 1. **Pending**

He hasn’t started or finished. Maybe he's thinking about it.
In JavaScript:

```js
let spaceshipPromise = new Promise(() => {});
// Status: Pending
```

### 2. **Fulfilled**

Timi finishes it! He brings it to you. You’re happy.
In JavaScript:

```js
resolve("LEGO spaceship complete!");
```

### 3. **Rejected**

Oh no! He dropped it, or couldn’t find all the pieces.
In JavaScript:

```js
reject("Missing LEGO wings!");
```

Once a Promise is fulfilled or rejected, we say it is **settled**. It can’t go back to pending.

---

## 🛠️ Using `.then()` and `.catch()`

So how do you “react” to a promise in JavaScript? You use:

* **`.then()`** – Runs when the promise is fulfilled.
* **`.catch()`** – Runs when the promise is rejected.

```
spaceshipPromise
  .then(result => {
    console.log("Yay! 🚀", result);
  })
  .catch(error => {
    console.log("Oh no! 😢", error);
  });
```

---

## 🔗 Chaining Promises: Step by Step

After Timi brings the spaceship, you paint it. Then, you attach lights. Then, you fly it across your room.

Each step depends on the previous one.

```
buildSpaceship()
  .then(paintSpaceship)
  .then(addLights)
  .then(flyIt)
  .catch(error => {
    console.log("Something went wrong:", error);
  });
```

This is called **promise chaining**, and it helps avoid “callback hell” (when your code becomes a messy pile of nested functions).

---

## 👬 Handling Multiple Promises

### `Promise.all()`: Wait for Everyone

You asked three friends to build different parts: wings, body, and engine. You only want to assemble when **all** parts are done.

```
Promise.all([buildWings(), buildBody(), buildEngine()])
  .then(parts => {
    console.log("Assembling spaceship with:", parts);
  })
  .catch(error => {
    console.log("One part failed:", error);
  });
```

### `Promise.race()`: First One Wins

You asked three people to get you snacks. Whoever returns first—*that’s* your snack!

```
Promise.race([getBiscuits(), getChips(), getSoda()])
  .then(firstSnack => {
    console.log("First snack arrived:", firstSnack);
  });
```

---

## 🍦 `finally()`: Do Something Anyway

Whether Timi delivers or not, you’ve made a decision: after the wait, you’ll reward yourself with ice cream.

```
spaceshipPromise
  .then(result => {
    console.log("Got the spaceship!", result);
  })
  .catch(error => {
    console.log("No spaceship today 😢", error);
  })
  .finally(() => {
    console.log("Going out for ice cream 🍦");
  });
```

This is perfect for cleanup tasks like hiding loading messages or resetting buttons.

---

## 🎮 Practice Time: Let’s Try It!

### 💻 Try This Code:

```
const makeFriendshipPromise = (willKeepPromise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willKeepPromise) {
        resolve("Your friend built the LEGO spaceship!");
      } else {
        reject("Your friend forgot and went to sleep 😴");
      }
    }, 2000);
  });
};

makeFriendshipPromise(true)
  .then(message => {
    console.log("✅", message);
  })
  .catch(error => {
    console.log("❌", error);
  })
  .finally(() => {
    console.log("👋 End of spaceship journey.");
  });
```

---

## 🧠 Review Questions (Check Your Understanding)

### 📝 Basic Questions

1. What are the three states of a JavaScript Promise?
2. What does `.then()` do in a promise?
3. What happens when a promise is rejected?
4. What does `.finally()` do?
5. What is the difference between `Promise.all()` and `Promise.race()`?
6. Why is chaining `.then()` helpful in writing cleaner code?
7. Write a function that returns a promise that resolves after 3 seconds.
8. How would you catch an error in a chain of promises?
9. What will happen if one promise fails in `Promise.all()`?
10. Can a settled promise change its state again?
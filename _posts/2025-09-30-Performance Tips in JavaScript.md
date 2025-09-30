# ⚡ Performance Tips in JavaScript: Making Your Code Run Like A Smooth, Fast Game

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/lagos-code-optimization.jpg" width="100%">

Imagine you’re playing a video game on your phone. If the game is slow, the characters move like they’re stuck in mud 😩. That’s how websites feel when JavaScript isn’t written well.

So, programmers need to write **fast and efficient code** — like making sure the game runs smoothly without lag.

Let’s explore some simple but powerful **performance tips** to make JavaScript code faster and smoother.

---

## 🏎️ 1. Don’t Do the Same Work Twice

Think about running to fetch water from a borehole. If you fetch once and keep it in a bucket, you can drink anytime. But if you fetch afresh every single time, you’ll waste energy.

In JavaScript:

```javascript
// ❌ Bad (repeating work)
for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
  console.log(document.getElementsByTagName("p")[i].innerText);
}
```

Here, the browser is counting `<p>` tags **again and again**.

✅ Better: Save it in a variable.

```javascript
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].innerText);
}
```

---

## 🚲 2. Use the Right Loops

Some loops are faster than others. For example, `for` loops are often faster than `forEach` when you’re dealing with huge amounts of data.

But the main tip: **don’t overcomplicate things**. Use simple loops for big tasks.

---

## 📦 3. Use Local Variables

If you’re baking puff-puff and the flour is on a high shelf, it takes time to reach for it every single time. Better to put it on the table nearby.

In coding, local variables are like “keeping things nearby.”

```javascript
// ❌ Bad
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

// ✅ Better (store locally)
function calculateArea(radius) {
  const pi = Math.PI;
  return pi * radius * radius;
}
```

---

## ⏳ 4. Avoid Unnecessary DOM Changes

The **DOM** is like the web page structure. Changing it too often is like rearranging furniture in your room every 5 minutes — tiring and slow.

❌ Don’t keep changing elements one by one in a loop.
✅ Instead, prepare changes and apply them together.

---

## 📜 5. Cache What You Can

Caching = remembering. Instead of recalculating or re-fetching things, store the result and reuse it.

For example:

* If you fetched data from the internet once, don’t fetch again immediately — use the stored data.
* If you measured something in the browser, keep it in a variable.

---

## 🧹 6. Clean Up Memory

If you open too many Chrome tabs, your laptop slows down. Same with JavaScript — unused objects or event listeners sitting around waste memory.

👉 Tip: Remove event listeners when they’re no longer needed.

---

## 🚀 7. Minimize External Files

Loading too many scripts and styles slows down the page (like carrying too many bags at once).

* Combine files where possible.
* Minify code (remove spaces and comments for speed).

---

## ⚡ 8. Use Asynchronous Code

Don’t block the main thread. For example, when you fetch data from the server, don’t freeze the whole page. Instead, use:

```javascript
async function getData() {
  let response = await fetch("/data.json");
  let data = await response.json();
  console.log(data);
}
```

This way, the page keeps running while waiting for data.

---

## ✅ Summary

Performance tips are all about making your code run like a smooth, fast game:

* Don’t repeat work unnecessarily.
* Use simple, efficient loops.
* Store values in local variables.
* Avoid too many DOM changes.
* Cache results to save time.
* Clean up memory leaks.
* Minimize external files and scripts.
* Use asynchronous code for smooth apps.

👉 In short: Work **smart**, not just hard.

---

## 📝 Review – Fill in the Gaps

1. A linter is like a ______ for code, but performance tips are like a coach for making code run ______.
2. Fetching the same data again and again is wasteful. Instead, you should ______ it.
3. In a loop, it’s better to store values in a ______ instead of calling a function each time.
4. Rearranging the ______ too often makes a web page slow.
5. A local variable is like keeping flour on the ______ when baking.
6. Too many unused objects or listeners create ______ leaks.
7. Combining and minifying files helps reduce ______ time.
8. Instead of blocking the main thread, you should use ______/await.
9. Using `document.getElementsByTagName("p")` multiple times is slower than saving it in a ______.
10. Performance tips help code run more ______ and smoothly.
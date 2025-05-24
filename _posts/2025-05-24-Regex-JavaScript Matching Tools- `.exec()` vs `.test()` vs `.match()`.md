# 🔍 Regex: JavaScript Matching Tools: `.exec()` vs `.test()` vs `.match()`

<div style="text-align: center;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_confused_cat.jpeg" alt="Ekene Agunechemba" />
</div>


### 👋 Hello, Code Explorer!

Today, let’s explore three powerful tools in JavaScript that help us **find things** in words or sentences:

* `.exec()`
* `.test()`
* `.match()`

They all help you **search**, but they work in different ways — like different kinds of magnifying glasses! 🔍🔎🕵️

---

## 🧪 1. `.test()` – Ask “Is it there?”

`.test()` is super simple.

It only tells you **true** or **false**.
That means: “Yes, it’s there” or “No, it’s not.”

### Example:

```
var re = /cat/;
console.log(re.test("The cat is here"));  // true
console.log(re.test("No animal here"));   // false
```

✅ Use `.test()` when you just want to know **if something matches**.

---

## 📦 2. `.exec()` – Get All the Details

`.exec()` is like a **detective**. It doesn’t just say “yes”—it brings back:

* What it found
* Any captured parts
* Where in the string it was found

### Example:

```
var re = /c(at)/;
var result = re.exec("The cat is here");

console.log(result[0]);      // "cat" (whole match)
console.log(result[1]);      // "at" (captured group)
console.log(result.index);   // 4 (match starts at index 4)
```

✅ Use `.exec()` when you want **extra info** about the match.

---

## 🔁 3. `.match()` – Search Using the String

`.match()` is a lot like `.exec()`, but instead of calling it from the **regex**, you use it on the **string**.

### Example:

```
var sentence = "The cat is here";
var result = sentence.match(/cat/);

console.log(result[0]); // "cat"
```

Want to find **all** matches? Add the `g` flag:

```
var str = "cat, bat, hat";
console.log(str.match(/at/g));  // ["at", "at", "at"]
```

✅ Use `.match()` when you want **quick results**, especially with multiple matches.

---

## 🧠 Summary Table

| Goal                               | Tool to Use | What It Gives You               |
| ---------------------------------- | ----------- | ------------------------------- |
| Just check if there's a match      | `.test()`   | `true` or `false`               |
| Get full match info and groups     | `.exec()`   | Array with full match + details |
| Find matches easily using a string | `.match()`  | Match or array of matches       |

---

## 🧪 Review Practice – Try These!

1. **Which method only says "true" or "false"?**
   A) `.match()`
   B) `.exec()`
   C) `.test()`
   D) `.run()`

2. **Which one gives you captured groups and index?**
   A) `.exec()`
   B) `.test()`
   C) `.find()`
   D) `.search()`

3. What will this return?

   ```
   /cat/.test("I have a dog.")
   ```

   A) true
   B) false
   C) "cat"
   D) null

4. What does this return?

   ```
   "cat, bat, hat".match(/at/g)
   ```

   A) \["cat", "bat", "hat"]
   B) \["at", "at", "at"]
   C) "at"
   D) true

5. In this code:

   ```
   var re = /d(o)g/;
   var result = re.exec("My dog runs");

   console.log(result[1]);
   ```

   What will it print?

   A) "dog"
   B) "d"
   C) "o"
   D) `null`

---

🎉 Great job learning about JavaScript’s matching tools!

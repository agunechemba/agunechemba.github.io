# 🎯 JavaScript Strings and RegExp: Match, Replace, Split, and Search

<div style="text-align: center;">
  <img 
    src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_rabbit_working_with_js_regex_code.jpeg" 
    alt="A rabbit working with JS RegEx code" 
    style="width: 100%; height: auto;"
    >
</div>

---


Regular Expressions (RegExp) are patterns used to match character combinations in strings. JavaScript provides helpful string methods that accept RegExp as input to **find, replace, split, or search** inside strings.

In this lesson, we’ll learn how to use:

* `match()`
* `replace()`
* `split()`
* `search()`

Let’s go!

---

## 🧪 1. `match()` – Find patterns in a string

```js
console.log("string".match(/[i-n]+/)); // → ["in"]
```

* `[i-n]` means: match any letter from **i to n**.
* `+` means: match **one or more** of those letters.
* `"string"` contains `"in"` → so it returns `["in"]`.

You can also capture part of the match:

```js
console.log("string".match(/(r)[i-n]+/)); // → ["rin", "r"]
```

* `(r)` is a **capturing group**.
* The result includes:

  * `"rin"` (the full match)
  * `"r"` (the captured part)

---

## 🛠️ 2. `replace()` – Replace pattern with something else

```js
console.log("string".replace(/[i-n]+/, "foo")); // → strfoog
```

* `[i-n]+` matches `"in"`
* `"in"` is replaced with `"foo"`
* So `"string"` becomes `"strfoog"`

---

## ✂️ 3. `split()` – Split string by the match

```js
console.log("stringstring".split(/[i-n]+/)); // → ["str", "gstr", "g"]
```

* Splits the string wherever it finds letters from i to n.
* `"stringstring"` → split at `"in"` and `"in"` again
* You get the array: `["str", "gstr", "g"]`

---

## 🔍 4. `search()` – Find index of the match

```js
console.log("string".search(/[i-n]+/)); // → 3
console.log("string".search(/[o-q]+/)); // → -1
```

* First one finds `"in"` starting at index **3**
* Second one finds **nothing**, so it returns `-1`

---

## 📌 Summary Table

| Method      | What it does                           |
| ----------- | -------------------------------------- |
| `match()`   | Finds and returns matching content     |
| `replace()` | Replaces matched content with new text |
| `split()`   | Splits string by matched pattern       |
| `search()`  | Returns index of the first match or -1 |

---

## 🧠 Practice Time!

Try these on your own:

### 1️⃣ What does this return?

```js
"banana".match(/[a-c]+/)
```

### 2️⃣ Replace all letters from d to f in `"default"` with `"X"`.

### 3️⃣ What’s the result of:

```js
"hellohello".split(/[l]+/)
```

### 4️⃣ Use `.search()` to find the position of `"oo"` in `"school"` using RegExp.

### 5️⃣ Use `.match()` with a capturing group to extract `"cat"` from `"blackcat"`.

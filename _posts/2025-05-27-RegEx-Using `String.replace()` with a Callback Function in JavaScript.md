# 🔁 RegEx: Using `String.replace()` with a Callback Function in JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_child_replace_a_white_floor_tile.jpeg" width="100%" alt="Child replacing a white floor tile">


When you think of `string.replace()`, you probably imagine swapping out all occurrences of one word with another — like changing `"old"` to `"new"`. But what if you want to do **something different for each match** you find? That’s where **callback functions** shine.

A **callback function** is a function that you pass to another function so it can call *your* code when needed.

## 🧠 Key Idea

When you use `string.replace()` with a **regular expression** and the **global (`g`) flag**, you can pass a **function** instead of a replacement string. This function gets called **every time** a match is found — and what it returns becomes the replacement for that match.

### ✅ What the Callback Gets:

The function you pass to `replace()` automatically receives:

* The **matched text**
* Text from any **capturing groups** (if used)
* The **index** of the match in the original string
* The **entire original string**

Let’s see this in action 👇

---

## 🔹 Example 1: Changing Text Based on Position

**Goal:** Replace the first `"Some"` with `"Start"` and the second with `"End"`.

```
const text = "Some string Some";

const result = text.replace(/Some/g, (match, offset, fullString) => {
  if (offset === 0) {
    return 'Start';
  } else {
    return 'End';
  }
});

console.log(result); // "Start string End"
```

### 🔍 What’s happening:

* First match: `"Some"` at index 0 → callback returns `"Start"`
* Second match: `"Some"` at index 10 → callback returns `"End"`

---

## 🔹 Example 2: Filling in Template Strings

**Goal:** Replace `{name}` and `{surname}` in a template with values from an object.

```
const template = "My name is {surname}, {name} {surname}";
const data = { name: "John", surname: "Doe" };

const result = template.replace(/(?:{(.+?)})/g, (match, key) => {
  return data[key];
});

console.log(result); // "My name is Doe, John Doe"
```

### 🔍 What’s happening:

* The regex `/{(.+?)}/g` finds all placeholders like `{name}`
* The `key` inside the callback captures just the name (e.g. `"name"`)
* We look up the value from the `data` object using `data[key]`

---

## 🧪 Practice Questions

Try these out to solidify your understanding:

1. Replace every number in a string with its double.
   Example: `"3 apples and 5 oranges"` → `"6 apples and 10 oranges"`

2. Capitalize every word in a sentence.
   Example: `"hello world"` → `"Hello World"`

3. Replace placeholders like `{city}` in a string with values from an object.
   Example: `"Welcome to {city}"`, with `{ city: "Lagos" }` → `"Welcome to Lagos"`

4. Replace only even numbers in a string with `"even"`.
   Example: `"1, 2, 3, 4"` → `"1, even, 3, even"`

5. Replace each vowel in a sentence with its uppercase version.
   Example: `"hello"` → `"hEllO"`

---

With `replace()` + callback functions, you're not just swapping text — you're writing logic that responds to **each match**, dynamically. Powerful stuff.

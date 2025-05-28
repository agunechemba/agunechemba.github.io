# JS REGEX 05: Matching Text in JavaScript with `.exec()`

<div style="text-align: center;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_cat_holding_a_gun_to_execute.jpeg" alt="Ekene Agunechemba"  style="width: 100%; height: auto;">
</div>
<br><br>

### 👋 Hey there, young coder!

Today, you're going to learn how to **search for things** in a string using something cool in JavaScript called `.exec()`.
Think of it like using a *magnifying glass* to find hidden patterns or letters in a sentence.

Let’s jump in! 🚀

---

### 🧠 What is `.exec()`?

`.exec()` is a **tool** in JavaScript that helps you search for **matches** in a word or sentence using something called a **regular expression** (also called *regex*).

Here’s a simple example:

```js
var re = /([0-9]+)[a-z]+/;
var match = re.exec("foo123bar");
```

This means:

* The pattern says:
  "Find one or more **numbers**, then one or more **letters**"
* The string is `"foo123bar"`

💡 Here's what happens:

* `match[0]` → `"123bar"` (the full thing it matched)
* `match[1]` → `"123"` (only the number part)
* `match.index` → `3` (where the match starts)

---

### 🎯 Visual Example:

```
String:   f  o  o  1  2  3  b  a  r
Index:    0  1  2  3  4  5  6  7  8
Match:          1  2  3  b  a  r
               ^ match starts here (index 3)
```

---

### 🔁 Loop Through Matches with `.exec()`

What if we want to find **all** the times a letter appears? Let’s use a **loop**!

```
var re = /a/g;
var result;

while ((result = re.exec('barbatbaz')) !== null) {
  console.log("found '" + result[0] + "', next exec starts at index '" + re.lastIndex + "'");
}
```

👀 What’s happening here?

* `/a/g` → "Find all 'a's" (`g` means global)
* `.exec()` finds one "a" at a time
* The loop keeps going until no more "a"s are found
* `re.lastIndex` tells where the search will start next

🖨 Output:

```
found 'a', next exec starts at index '2'
found 'a', next exec starts at index '5'
found 'a', next exec starts at index '8'
```

---

### 🍎 Think of it like a Treasure Hunt!

You're searching a word for every letter "a".
Each time you find one, you shout:

> “Hey! Found one at spot X! Let’s look for the next one!”

And the hunt goes on until all are found!

---

## 🧪 Review Time! Try These Practice Questions

1. **What does `.exec()` do in JavaScript?**
   A) It makes a loop
   B) It searches for matches in a string
   C) It adds numbers
   D) It styles text

2. What will `match[1]` give you?
   A) The full sentence
   B) The starting index
   C) The captured part of the match
   D) The number of matches

3. What does the `g` flag in `/a/g` mean?
   A) Get one
   B) Go back
   C) Global – find all matches
   D) Great match

4. If `.exec()` doesn’t find anything, what does it return?
   A) 0
   B) "Nope"
   C) null
   D) undefined

5. In the word `"abcabc"`, how many times will `/a/g.exec()` find a match?

---

🧠 Tip: You can try out all these in your browser's developer console!

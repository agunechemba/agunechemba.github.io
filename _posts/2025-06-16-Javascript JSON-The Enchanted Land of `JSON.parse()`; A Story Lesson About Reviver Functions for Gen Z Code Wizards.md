# 🏰 Javascript JSON: The Enchanted Land of `JSON.parse()`; A Story Lesson About Reviver Functions for Gen Z Code Wizards

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/imagine_a_cartoon_knight.jpeg" width="100%">

---

Once upon a time in the world of CodeLand, there was a noble knight named **Sir `JSON.stringify()`**.
He was the kingdom’s royal **Scroll Maker** — turning magical objects into *scrolls* (also known as strings) so they could be sent across the lands (like APIs and local storage 😅).

But guess what?

There was someone just as powerful on the other side of the scroll — a mysterious wizard called...

> 🪄 **`JSON.parse()` – The Summoner of Objects**

He could take one of Sir Stringify’s scrolls and **summon** its spirit back into a working JavaScript object.

Let’s meet him in action:

```
let scroll = '{"name":"Luna","species":"Cat"}';
let creature = JSON.parse(scroll);
console.log(creature.name); // Luna
```

✨ Boom. Just like that, **Luna the Cat** was brought back from the scroll — meowgical, right?

---


But *not all scrolls are simple*. Some scrolls are weird.
Some scrolls are tricky.
Some scrolls… **pretend to be normal but hide secrets inside**. 😨

Imagine this scroll:

```json
{
  "name": "Robo",
  "age": "12",
  "joined": "2024-01-01T00:00:00.000Z"
}
```

It looks fine, but it’s sneaky! `"age"` is a string, and `"joined"` looks like a regular string but is actually a date trapped in text form! 😱

That’s where the ancient spellbook opens up…

---


Deep in the castle library, the elite coders of CodeLand discovered a **secret spell** — a second argument for `JSON.parse()` known as the **reviver function**.

This function gave wizards the power to:

> Intercept every key and value during the scroll revival…
> And decide what to *really* do with them! 🧙‍♂️💫

Let’s cast it:

```
let scroll = `{
  "name": "Robo",
  "age": "12",
  "joined": "2024-01-01T00:00:00.000Z"
}`;

let creature = JSON.parse(scroll, function (key, value) {
  if (key === "age") return Number(value);        // turn string into number
  if (key === "joined") return new Date(value);   // turn string into Date object
  return value; // leave the rest unchanged
});

console.log(creature.age);    // 12 (a real number!)
console.log(creature.joined); // Date object! 🕰️
```

🥳 *Now that’s some level 99 wizard stuff!*

---


Every reviver is like a mini detective.

When you pass it into `JSON.parse()`, it gets called **for every key-value pair** in the object, starting **from the inside out** (bottom-up style).

```
function reviver(key, value) {
  // 🧙 You control the transformation
  return value;
}
```

If you return:

* a new value → the key will be updated to it ✅
* `undefined` → that key disappears ✂️

Let’s try a cleanup spell 🔍✨

---


Say you’ve got a scroll like this:

```
let scroll = '{"name":"Sky","_secret":"hidden"}';
```

You can **banish any key** that starts with `_` by returning `undefined` in the reviver:

```
let clean = JSON.parse(scroll, function (key, value) {
  if (key.startsWith && key.startsWith("_")) return undefined;
  return value;
});

console.log(clean); // { name: "Sky" }
```

💨 *Puff!* The secret vanished like smoke. Just how mages like it.

---

## 🎓 The Wizard’s Handbook (Recap Table)

| 🪄 Concept               | 🧙‍♂️ Meaning                                           |
| ------------------------ | ------------------------------------------------------- |
| `JSON.stringify()`       | Turns objects into scrolls (strings) 📜                 |
| `JSON.parse()`           | Reads scrolls and brings objects back to life 🪄        |
| **Reviver function**     | Lets you transform or filter keys while reviving 🔮     |
| Return `undefined`       | Deletes that key from the object ✂️                     |
| Return transformed value | Alters values — like strings to dates, numbers, etc. 💫 |

---

## 🧪 Test


### 1. What is the role of `JSON.parse()`?

A. Make coffee ☕
B. Turn strings into objects 🧙‍♂️
C. Erase bugs 🐞
D. Play Minecraft 🎮

---

### 2. What does the **reviver** function allow you to do?

A. Sleep 😴
B. Customize how each value is brought back 🧙‍♀️
C. Draw emoji 🖍️
D. Crash the code 💥

---

### 3. What happens if the reviver returns `undefined` for a key?

A. That property disappears ✂️
B. It becomes a ghost 👻
C. It crashes 🚨
D. It multiplies like gremlins 🐾

---

### 4. What’s the order in which the reviver walks through the scroll?

A. Outer to inner 🔁
B. Bottom-up (inner to outer) 🧗‍♂️
C. Randomly 🎲
D. With its eyes closed 😵‍💫

---

### 5. BONUS BATTLE QUEST ⚔️

Revive this scroll so `"age"` becomes a number and `_secret` vanishes into the shadows:

```js
let scroll = '{"name":"Nova","age":"14","_secret":"🕵️"}';

let result = JSON.parse(scroll, function (key, value) {
  if (key === "age") return Number(value);
  if (key.startsWith && key.startsWith("_")) return undefined;
  return value;
});

console.log(result); // { name: "Nova", age: 14 }
```

# Javascript JSON: The Tale of the Never-Ending Friendship Circle; A JSON.stringify Story for Gen Z Coders

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/2_cartoon_friends.jpeg" width="100%">
---


Once upon a digital time in the **Kingdom of JavaScript**, there lived a wise helper named **Sir JSON.stringify**. 🤴🏻✨

His royal duty?

> 📜 "Turn any object in the kingdom into a magical scroll (a string) that other kingdoms — like Pythonia or Browserland — can read and understand!"

He was super skilled. Give him a simple object like:

```
let toy = { name: "Rubik's Cube", color: "multicolor" };
```

Sir JSON.stringify would proudly write:

```
'{"name":"Rubik\'s Cube","color":"multicolor"}'
```

👏 Bravo, Sir JSON! 🎉

---


But one day, Sir JSON was asked to write about two noble friends:

```
let friendA = {};
let friendB = {};

friendA.bestie = friendB;
friendB.bestie = friendA;
```

He picked up his pen and began:

🖊️

> “Friend A’s bestie is Friend B…”

But wait! To describe Friend B, he needed to say:

> “Friend B’s bestie is Friend A…”

Oh no. Now we’re *back* to Friend A again.

> “Friend A's bestie is Friend B… who’s besties with Friend A… who’s besties with Friend B… who’s best—AHHHHH!”

And just like that, Sir JSON fell into an **infinite loop**! 😵‍💫

He panicked and dropped his pen with a loud scream:

```
TypeError: Converting circular structure to JSON
```

The scribes of JavaScript shook their heads. “He’s caught in a **cyclic reference curse**,” they said.
“A never-ending friendship loop…”

---


To rescue Sir JSON from this loop nightmare, the kingdom’s best coder stepped forward. 🧙🏽‍♂️⚡
She whispered the magic spell:

```
function safeStringify(obj) {
  const seen = new WeakSet();

  return JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return "[Cyclic]";
      seen.add(value);
    }
    return value;
  });
}
```

And guess what?

Using this spell, the object became safely readable:

```
{
  "bestie": {
    "bestie": "[Cyclic]"
  }
}
```

Sir JSON sighed with relief and smiled. “No more circles. I’m free to write again!” 🥹📜

---


* `JSON.stringify` is like a royal note-taker 📜
* If objects reference each other endlessly, that’s called a **cyclic reference** ♻️
* Cycles confuse Sir JSON and crash the scroll-making process 😢
* But with a custom spell (a.k.a. **replacer function**), we can break the curse and stringify like legends 🪄🧙‍♀️

---

## 🎓 Practice Questions

**1. What is the royal job of Sir JSON.stringify?**
A. Bake cakes
B. Turn objects into magical scrolls (strings)
C. Build castles
D. Play Roblox

> ✨ Hint: He’s the kingdom’s scribe!

---

**2. What does “cyclic object” mean in the story?**
A. A unicorn-shaped object
B. An object that loops forever between friends
C. A code bicycle
D. A pet with magical powers

> 💭 Think: Friendship loop!

---

**3. What error does Sir JSON cry out when he hits a cyclic curse?**
A. `Error: Too much chocolate`
B. `TypeError: Converting circular structure to JSON`
C. `Oops: Royal scroll overflow`
D. None. He just keeps writing

---

**4. True or False:**
Sir JSON.stringify can handle cyclic references *without help*.

> 🤔 Is he *that* powerful, or does he need a wizard?

---

**5. BONUS SPELL TEST 🪄**
What does this code print?

```
let a = {};
a.self = a;
console.log(JSON.stringify(a));
```

A. `{}`
B. `{"self":"[Cyclic]"}`
C. Crashes with a TypeError
D. Turns into a snowman ☃️

---

## 🏁 The End!
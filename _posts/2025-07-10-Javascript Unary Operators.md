# 🧙‍♂️ Javascript Unary Operators: The Magical Wands of JavaScript.

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/because-sometimes-one-is-enough-to-cause-all-the-drama.jpg" width="100%">

## ✨ Welcome Back to JavaScript Wizard School!

Hello again, coding adventurers! 👋

Today, we’re walking into the sparkling **Room of Unary Operators**, where special **JavaScript magic wands** live. These aren’t your everyday wands that need two ingredients (like sugar + spice)... nope! These wands are **unary**, which means they only need **one thing** to work their magic! 🎩✨

Let’s meet these magical wands one by one and see what amazing tricks they can do!

---

## 🪄 1. The "Delete" Wand – `delete`

Meet *Delia Delete*, the neatest wand in JavaScript land. She doesn’t like clutter!

Imagine you have a toy robot with stickers on it. Now, you want to **remove one sticker**, but not the whole robot. Delia comes in and goes *"POOF!"* — and the sticker is gone!

```js
let robot = {
  name: "RoboBuddy",
  color: "red"
};

delete robot.color;

console.log(robot); // { name: "RoboBuddy" }
```

She removed the `color` sticker, but kept the robot safe and happy.

---

## 🪄 2. The "Forget About It" Wand – `void`

Next up is *Vinny Void*, the forgetful wand. He says, “Do the thing… but don’t keep the result!”

Think of it like doing your homework and tossing it in the wind right after. JavaScript forgets what the answer was and just gives you `undefined`.

```js
console.log(void(5 + 3)); // undefined
```

Even though `5 + 3` is `8`, Vinny shrugs and says, “Meh, forget about it!”

---

## 🪄 3. The "What Kind of Thing Are You?" Wand – `typeof`

Here comes *Tina Typeof*, the detective wand! She LOVES finding out what kind of magic stuff you’re holding.

```js
console.log(typeof "Hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
```

Tina is like, “Hmm, this smells like a string... yup, definitely a string!” 🔍

---

## 🪄 4. The "Make Me a Number" Wand – `+`

Now meet *Nino Plus*, the number transformer!

This wand says, “Let’s try to turn this thing into a number!”

```js
console.log(+"5");    // 5
console.log(+"3.14"); // 3.14
console.log(+"hello"); // NaN (Not a Number!)
```

He’s super helpful when you have numbers hiding inside strings.

---

## 🪄 5. The "Opposite Number" Wand – `-`

Here comes *Nina Negative*! She does what Nino Plus does... but flips the number to its opposite!

```js
console.log(-"5");    // -5
console.log(-(-8));   // 8
console.log(-"hello"); // NaN
```

She’s got a little attitude: “If you’re positive, I’ll make you negative! If you’re already negative, I’ll cheer you up!”

---

## 🪄 6. The "Secret Flipper" Wand – `~`

Ahh, *Whiskers Tilde*! The weird wizard 🧙‍♀️. This wand flips secret binary bits behind the scenes.

She’s a bit mysterious, but here’s her special trick:

> `~x` is always equal to `-(x + 1)`

```js
console.log(~5); // -6
console.log(~0); // -1
```

She plays with bits and bytes, flipping 0s to 1s and 1s to 0s, but we can remember her little rhyme: **“Tilde flips the bits, and subtracts just one – that’s her trick, and now it’s done!”**

---

## 🪄 7. The "Truth Flipper" Wand – `!`

Last but not least: *Nora Not*! She flips truth like pancakes. 🥞

```js
console.log(!true);     // false
console.log(!false);    // true
console.log(!0);        // true (because 0 is "falsy")
console.log(!"hello");  // false (because strings are "truthy")
```

Sometimes, people use **two Nora wands** together:

```js
console.log(!!"hello"); // true
console.log(!!0);       // false
```

That’s like saying, “Tell me the real truth here!”

---

## 🧠 Summary: Unary Operator Cheat Sheet

| Operator | Name        | What It Does                                      |
| -------- | ----------- | ------------------------------------------------- |
| `delete` | Delete      | Removes a property from an object                 |
| `void`   | Void        | Ignores the result and returns `undefined`        |
| `typeof` | Typeof      | Tells you the data type of a value                |
| `+`      | Unary Plus  | Converts a value to a number                      |
| `-`      | Unary Minus | Converts a value to a number and flips its sign   |
| `~`      | Bitwise NOT | Flips all bits in a number and returns `-(x + 1)` |
| `!`      | Logical NOT | Flips a truthy/falsy value to the opposite        |

---

## 🧪 Practice Time with the Wand Workshop

🎓 Let's visit **Mr. Ken’s Wand Workshop**, where he challenges you with fun practice!

### 🧩 Review Questions

1. What does the `typeof` operator tell you about a value?
2. What happens if you use `+` on the string `"100"`?
3. What does `!!0` evaluate to, and why?
4. How would you remove the property `age` from this object?

   ```js
   let person = { name: "Lola", age: 10 };
   ```
5. What is the result of `~3` and why?
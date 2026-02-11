# The Magic "Before and After" Buttons in JavaScript

<img src="https://i.ibb.co/B5FrYSC0/funny-meme-pictures-1kat5n1kzzn2awsr.webp" width="100%">

Imagine you have a magical scoreboard in a video game. Sometimes, you want to see your score go up **right now**, and other times, you want to finish your turn **before** the score changes. In the world of JavaScript, we use special symbols called **Unary Operators** to do this!

"Unary" sounds like a big word, but it just means these symbols work on **one** thing at a time (like a single number). We use `++` to add one and `--` to take one away.

---

### 1. The Postfix Operator: "After You!"

The **Postfix Operator** is like a polite friend who lets everyone else go first. You write it with the symbols **after** the name, like `x++`.

When you use this, JavaScript says: *"I’ll use the number you have right now for this job, and then I’ll add one to it once I’m done."*

**Example:**

```javascript
let apples = 5;
console.log(apples++); // It shows 5!
console.log(apples);   // Now it shows 6.

```

* **let**: This is a keyword we use to create a "box" (variable) to store information.
* **apples**: This is the name we gave our box.
* **console.log()**: This is a built-in function that "prints" or shows us what is inside a box on our computer screen.

---

### 2. The Prefix Operator: "Me First!"

The **Prefix Operator** is a bit more impatient. You write the symbols **before** the name, like `++x`.

When you use this, JavaScript says: *"Stop everything! Add one to this number first, and then use the new version for the rest of the work."*

**Example:**

```javascript
let oranges = 5;
console.log(++oranges); // It shows 6 immediately!

```

---

### The Comparison Table

| Type | How it looks | What happens? |
| --- | --- | --- |
| **Postfix** | `x++` | Use the **old** value first, then change it. |
| **Prefix** | `++x` | Change it **first**, then use the new value. |

---

### Putting it All Together

What happens if we mix them up in a big math problem?

```javascript
let score1 = 10;
let score2 = 10;

let total = score1++ + ++score2; 

```

1. **score1++** says: "Use 10 for the math, then make me 11 later."
2. **++score2** says: "Make me 11 right now, then use me for the math."
3. The computer does , so the `total` is **21**!

> **Top Tip:** If you want your code to be easy to read for your friends, try to use these on their own lines so nobody gets confused about the timing!
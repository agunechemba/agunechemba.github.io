# 🌟 A Teacher’s Map to Functions: Teaching with JavaScript and Scratch

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/functions.jpg" width="100%">

Have you ever noticed how repetitive tasks make your learners sigh or lose focus? Imagine a classroom where students write the same lines of code again and again—just to draw three squares! This, dear teacher, is where **functions** come in as our superheroes.

Functions are like **magic boxes** or **helper robots**—you give them instructions once, and they can repeat the task whenever you need, perfectly and instantly. In this blog-lesson, we’ll explore functions using **JavaScript** and **Scratch** so your learners can see how the same concept works across both text and visual programming worlds.

---

## 🧩 **Lesson 1: Why We Need Functions**

Start with a relatable pain point—**repetition**.

In JavaScript:

```javascript
// Drawing three squares manually (ugh, so repetitive!)
drawSquare();
drawSquare();
drawSquare();
```

In Scratch:

> 🟩 **Blocks Needed:**
>
> * “When green flag clicked”
> * “Repeat”
> * “Move 100 steps”
> * “Turn 90 degrees”

Ask your learners to draw **one square**, then **three squares**. They’ll likely just repeat their code blocks!
That’s your teaching moment: “What if we could just tell Scratch to draw a square whenever we need one?”

---

## 🍪 **Lesson 2: What is a Function?**

A function is like a **recipe** or **vending machine**:

* It has a **name** (`drawSquare`)
* Takes **inputs** (`size`, `color`)
* Performs a task (draws the shape)
* Produces an **output** (the drawn shape)

### 🧠 JavaScript Example

```javascript
function drawSquare(size, color) {
  console.log(`Drawing a ${color} square of size ${size}`);
}
drawSquare(100, "blue");
```

### 🧩 Scratch Example

In Scratch, you can make your own block:

> **Make a Block → drawSquare (size, color)**
> Inside the block:
>
> * Set pen color to `(color)`
> * Repeat 4 times → move `(size)` → turn 90°

Now you’ve built your very own *function block*!

---

## 🧾 **Lesson 3: The Parts of a Function**

Let’s break the JavaScript function down like a recipe card:

| Part            | What It Means      | JavaScript Example  |
| --------------- | ------------------ | ------------------- |
| **Return Type** | What it gives back | In JS, any type!    |
| **Name**        | Identifier         | `drawSquare`        |
| **Parameters**  | Ingredients        | `(size, color)`     |
| **Body**        | The steps          | Inside `{ }`        |
| **Return**      | The final dish     | `return something;` |

### 🍋 Example:

```javascript
function sum(a, b) {
  let x = a + b;
  return x;
}
console.log(sum(5, 10));  // Output: 15
```

In Scratch, this would be your **custom reporter block**, one that calculates and returns a value!

---

## ☎️ **Lesson 4: Calling a Function**

You don’t just create a function—you **call** it to make it do its work.

### JavaScript

```javascript
let answer = sum(5, 7); // Calls the sum function
console.log(answer); // Prints 12
```

### Scratch

> You drag your custom block (`sum of a and b`) into another script.
> That’s your *function call!*

---

## 👋 **Lesson 5: Functions That Just Do Things (Void Functions)**

Some functions don’t give anything back—they just *act*.

### JavaScript

```javascript
function sayHello(name) {
  console.log("Hello, " + name + "!");
}
sayHello("Ada");
```

### Scratch

> **Make a Block:** `sayHello(name)`
> Inside: `say (join "Hello, " name)`

Your robot (Scratch Cat) waves and says “Hello, Ada!”—but it doesn’t *return* anything.

---

## 🔗 **Lesson 6: Inputs — Pass by Value vs. Reference**

Here’s how to simplify this for young learners:

* **Pass by Value:** Giving your friend a photocopy—they can draw on it without changing yours.
* **Pass by Reference:** Sharing a Google Doc—everyone sees changes in real time.

### JavaScript Example

```javascript
let score = 10;

function addBonus(x) {
  x += 5;
}
addBonus(score);
console.log(score); // Still 10 (because it’s a copy)
```

### Scratch Thought Experiment

> If you make a clone of a sprite and change its color, the original stays the same — that’s *pass by value*!
> But if you change a shared variable, all sprites see the new value — *pass by reference*.

---

## 🎨 **Creative Activities**

1. **Temperature Converter**

   ```javascript
   function convertFtoC(fahrenheit) {
     return (fahrenheit - 32) * 5 / 9;
   }
   console.log(convertFtoC(100));
   ```

   Scratch version: Make a block that says,
   `set celsius to ((fahrenheit - 32) * 5 / 9)`

2. **Circle Area Calculator**

   ```javascript
   function calculateCircleArea(radius) {
     return Math.PI * radius * radius;
   }
   ```

3. **Greeting Function**

   ```javascript
   function createGreeting(name) {
     return `Hello, ${name}!`;
   }
   console.log(createGreeting("Chemba"));
   ```

4. **Shape Drawer Challenge**
   In Scratch:

   * Create blocks: `drawSquare(size, color)` and `drawTriangle(size, color)`
   * Combine them with loops to draw amazing patterns!

---

## 🌈 **Conclusion**

Functions are the *superpower of programming*: they save time, reduce mistakes, and make code easier to understand.
Whether you’re clicking colorful blocks in Scratch or typing curly braces in JavaScript, the principle is the same — *teach your robot once, and it can help you forever!*

---

### 🧩 Review — Fill in the Gaps

1. A function is like a reusable __________ that performs a specific task.
2. The inputs of a function are called __________.
3. The value that a function gives back is called the __________.
4. In JavaScript, functions are created using the keyword __________.
5. A function that doesn’t return anything is called a __________ function.
6. In Scratch, you can create your own function by clicking __________.
7. Giving a photocopy to a function is like __________ by value.
8. The code inside `{ }` in JavaScript is called the function’s __________.
9. A function that just performs an action is also called a __________ function.
10. To make your function run, you must __________ it by name.